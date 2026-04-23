#!/usr/bin/env node
// One-shot HTML → JSX converter tailored for the Mobius template.
// It trims the shared header/offcanvas/footer/scripts from each HTML page and
// outputs the remaining markup as JSX for a page component.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SRC_HTML_DIR = resolve(ROOT, 'extracted/mobius/html');
const OUT_DIR = resolve(ROOT, 'src/pages');

const PAGES = [
  { html: 'index.html', name: 'Home', breadcrumb: null },
  { html: 'index-2.html', name: 'HomeCorporate', breadcrumb: null },
  { html: 'index-3.html', name: 'HomeInsurance', breadcrumb: null },
  { html: 'about.html', name: 'About', breadcrumb: { title: 'About Us' } },
  { html: 'services.html', name: 'Services', breadcrumb: { title: 'Our Services', current: 'Services' } },
  { html: 'service-details.html', name: 'ServiceDetails', breadcrumb: { title: 'Service Details' } },
  { html: 'team.html', name: 'Team', breadcrumb: { title: 'Our Team', current: 'Team' } },
  { html: 'team-details.html', name: 'TeamDetails', breadcrumb: { title: 'Team Details' } },
  { html: 'pricing.html', name: 'Pricing', breadcrumb: { title: 'Pricing' } },
  { html: 'faq.html', name: 'Faq', breadcrumb: { title: 'FAQ' } },
  { html: 'project.html', name: 'Project', breadcrumb: { title: 'Our Projects', current: 'Projects' } },
  { html: 'project-details.html', name: 'ProjectDetails', breadcrumb: { title: 'Project Details' } },
  { html: 'blog.html', name: 'Blog', breadcrumb: { title: 'Blog' } },
  { html: 'blog-list.html', name: 'BlogList', breadcrumb: { title: 'Blog List' } },
  { html: 'blog-details.html', name: 'BlogDetails', breadcrumb: { title: 'Blog Details' } },
  { html: 'contact.html', name: 'Contact', breadcrumb: { title: 'Contact Us', current: 'Contact' } },
];

const HTML_ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  contenteditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  enctype: 'encType',
  novalidate: 'noValidate',
  spellcheck: 'spellCheck',
  srcset: 'srcSet',
  usemap: 'useMap',
  'accept-charset': 'acceptCharset',
  'http-equiv': 'httpEquiv',
};

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

function attrsToReact(attrString) {
  // Tokenize attributes. Each attribute is `name` or `name="value"` or `name=value`.
  const out = [];
  let i = 0;
  const s = attrString.trim();
  while (i < s.length) {
    while (i < s.length && /\s/.test(s[i])) i++;
    if (i >= s.length) break;

    let nameStart = i;
    while (i < s.length && !/[\s=]/.test(s[i])) i++;
    const name = s.slice(nameStart, i);

    while (i < s.length && /\s/.test(s[i])) i++;
    let value = null;
    if (s[i] === '=') {
      i++;
      while (i < s.length && /\s/.test(s[i])) i++;
      if (s[i] === '"' || s[i] === "'") {
        const quote = s[i];
        i++;
        const valStart = i;
        while (i < s.length && s[i] !== quote) i++;
        value = s.slice(valStart, i);
        i++;
      } else {
        const valStart = i;
        while (i < s.length && !/\s/.test(s[i])) i++;
        value = s.slice(valStart, i);
      }
    }
    out.push([name, value]);
  }

  const parts = [];
  for (const [rawName, rawValue] of out) {
    let name = rawName;
    // camelCase data-* / aria-* stay as-is; else map if known; else keep.
    if (name.startsWith('data-') || name.startsWith('aria-')) {
      // keep kebab
    } else if (HTML_ATTR_MAP[name.toLowerCase()]) {
      name = HTML_ATTR_MAP[name.toLowerCase()];
    } else {
      // Default: camelCase any hyphenated custom attr except data/aria.
      if (name.includes('-')) {
        name = name
          .split('-')
          .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
          .join('');
      }
    }

    // Rewrite .html hrefs to SPA routes (handled separately below at emission).
    if (rawValue === null) {
      parts.push(name);
    } else {
      let value = rawValue;
      if (name === 'href') {
        value = mapHref(value);
      }
      if ((name === 'src' || name === 'poster') && value.startsWith('assets/')) {
        value = '/' + value;
      }
      if (name === 'data-bg-src' && value.startsWith('assets/')) {
        value = '/' + value;
      }
      if (name === 'data-bg-src') {
        const inlineBg = cssToStyleObject(
          `background-image: url(${value}); background-size: cover; background-position: center; background-repeat: no-repeat`,
        );
        parts.push(`style={${inlineBg}}`);
        continue;
      }
      if (name === 'style') {
        const obj = cssToStyleObject(value);
        parts.push(`style={${obj}}`);
        continue;
      }
      // Escape braces in value
      const escaped = value.replace(/"/g, '&quot;');
      parts.push(`${name}="${escaped}"`);
    }
  }
  return parts.length ? ' ' + parts.join(' ') : '';
}

function cssToStyleObject(css) {
  const declarations = css.split(';').map((d) => d.trim()).filter(Boolean);
  const parts = declarations.map((decl) => {
    const [prop, ...rest] = decl.split(':');
    const value = rest.join(':').trim();
    const key = prop
      .trim()
      .replace(/^-(ms|webkit|moz|o)-/, '$1-')
      .split('-')
      .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
      .join('');
    return `${JSON.stringify(key)}: ${JSON.stringify(value)}`;
  });
  return `{ ${parts.join(', ')} }`;
}

function mapHref(href) {
  if (!href) return href;
  if (href.startsWith('#') || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return href;
  }
  const known = {
    'index.html': '/',
    'index-2.html': '/home-corporate',
    'index-3.html': '/home-insurance',
    'about.html': '/about',
    'services.html': '/services',
    'service-details.html': '/service-details',
    'team.html': '/team',
    'team-details.html': '/team-details',
    'pricing.html': '/pricing',
    'faq.html': '/faq',
    'project.html': '/project',
    'project-details.html': '/project-details',
    'blog.html': '/blog',
    'blog-list.html': '/blog-list',
    'blog-details.html': '/blog-details',
    'contact.html': '/contact',
    '404.html': '/404',
  };
  const bare = href.split('#')[0];
  const hash = href.includes('#') ? '#' + href.split('#')[1] : '';
  if (known[bare]) return known[bare] + hash;
  if (href.startsWith('assets/')) return '/' + href;
  return href;
}

function convertHtmlToJsx(html) {
  // Tokenize into tags, comments, and text.
  let out = '';
  let i = 0;
  const len = html.length;

  while (i < len) {
    const ch = html[i];
    if (ch === '<') {
      // Comment?
      if (html.startsWith('<!--', i)) {
        const end = html.indexOf('-->', i);
        if (end === -1) {
          // unterminated — skip
          i = len;
        } else {
          const inner = html.slice(i + 4, end).replace(/\*\//g, '*\\/');
          out += `{/*${inner}*/}`;
          i = end + 3;
        }
        continue;
      }
      // DOCTYPE — skip
      if (html.startsWith('<!', i)) {
        const end = html.indexOf('>', i);
        i = end === -1 ? len : end + 1;
        continue;
      }
      // End of tag
      const end = findTagEnd(html, i);
      if (end === -1) {
        // no closing > — output as text
        out += escapeJsxText(html.slice(i));
        break;
      }
      const rawTag = html.slice(i, end + 1);
      out += convertTag(rawTag);
      i = end + 1;
    } else {
      // text run
      let j = i;
      while (j < len && html[j] !== '<') j++;
      const text = html.slice(i, j);
      out += escapeJsxText(text);
      i = j;
    }
  }
  return out;
}

function findTagEnd(html, start) {
  let i = start + 1;
  let inQuote = null;
  while (i < html.length) {
    const c = html[i];
    if (inQuote) {
      if (c === inQuote) inQuote = null;
    } else {
      if (c === '"' || c === "'") inQuote = c;
      else if (c === '>') return i;
    }
    i++;
  }
  return -1;
}

function convertTag(rawTag) {
  // rawTag is like "<div class="foo" data-x="1">" or "</div>" or "<br>" or "<img ... />".
  if (rawTag.startsWith('</')) {
    const m = /^<\/\s*([a-zA-Z][a-zA-Z0-9-]*)\s*>$/.exec(rawTag);
    if (!m) return '';
    return `</${m[1].toLowerCase()}>`;
  }
  const body = rawTag.slice(1, rawTag.endsWith('/>') ? -2 : -1).trim();
  const selfClose = rawTag.endsWith('/>');
  // name then attrs
  const spaceIdx = firstWhitespace(body);
  let name, rest;
  if (spaceIdx === -1) {
    name = body;
    rest = '';
  } else {
    name = body.slice(0, spaceIdx);
    rest = body.slice(spaceIdx);
  }
  name = name.toLowerCase();
  const attrs = attrsToReact(rest);
  const isVoid = VOID_TAGS.has(name);
  if (isVoid || selfClose) {
    return `<${name}${attrs} />`;
  }
  return `<${name}${attrs}>`;
}

function firstWhitespace(s) {
  for (let i = 0; i < s.length; i++) if (/\s/.test(s[i])) return i;
  return -1;
}

function escapeJsxText(text) {
  return text
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    // JSX allows & — but keep it literal; React will handle it in text.
    ;
}

// Remove element and its matched closing tag, handling nesting.
function removeElement(html, openRegex, tagName) {
  const m = openRegex.exec(html);
  if (!m) return html;
  const start = m.index;
  let i = start + m[0].length;
  let depth = 1;
  const openTag = new RegExp(`<${tagName}\\b[^>]*?(?<!/)>`, 'gi');
  const closeTag = new RegExp(`</${tagName}\\s*>`, 'gi');

  while (depth > 0 && i < html.length) {
    openTag.lastIndex = i;
    closeTag.lastIndex = i;
    const nextOpen = openTag.exec(html);
    const nextClose = closeTag.exec(html);
    if (!nextClose) break;
    if (nextOpen && nextOpen.index < nextClose.index) {
      depth++;
      i = nextOpen.index + nextOpen[0].length;
    } else {
      depth--;
      i = nextClose.index + nextClose[0].length;
    }
  }
  return html.slice(0, start) + html.slice(i);
}

function extractBody(html) {
  const bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  if (!bodyMatch) throw new Error('No body found');
  let body = bodyMatch[1];

  // Remove preloader (nested div)
  body = removeElement(body, /<div\s+id="preloader"[^>]*>/i, 'div');
  // Remove back-to-top button
  body = removeElement(body, /<button\s+id="back-top"[^>]*>/i, 'button');
  // Mouse cursor markers (void-ish but they have closing)
  body = body.replace(/<div\s+class="mouse-cursor cursor-outer"[^>]*>\s*<\/div>/gi, '');
  body = body.replace(/<div\s+class="mouse-cursor cursor-inner"[^>]*>\s*<\/div>/gi, '');

  // Remove <header>
  body = removeElement(body, /<header\b[^>]*>/i, 'header');

  // Remove offcanvas + overlay
  body = removeElement(body, /<div\s+class="ht-offcanvas"[^>]*>/i, 'div');
  body = body.replace(/<div\s+class="ht-offcanvas-overlay"[^>]*>\s*<\/div>/gi, '');

  // Remove breadcrumb
  body = removeElement(body, /<section\s+class="ht-breadcrumb-area"[^>]*>/i, 'section');

  // Remove footer
  body = removeElement(body, /<footer\b[^>]*>/i, 'footer');

  // Remove <script> tags
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Strip any remaining HTML comments (mostly leftover section markers).
  body = body.replace(/<!--[\s\S]*?-->/g, '');

  // Collapse runs of 3+ blank lines to at most 1.
  body = body.replace(/(?:[ \t]*\n){3,}/g, '\n\n');

  return body.trim();
}

function generatePage({ name, html, breadcrumb }) {
  const srcPath = resolve(SRC_HTML_DIR, html);
  const raw = readFileSync(srcPath, 'utf8');
  const body = extractBody(raw);
  const jsx = convertHtmlToJsx(body);

  const usesLink = /to="\//.test(jsx) || breadcrumb;
  const imports = [];
  if (breadcrumb) imports.push("import Breadcrumb from '../components/Breadcrumb.jsx';");

  const breadcrumbJsx = breadcrumb
    ? `      <Breadcrumb title=${JSON.stringify(breadcrumb.title)}${breadcrumb.current ? ` current=${JSON.stringify(breadcrumb.current)}` : ''} />\n`
    : '';

  const out = `${imports.join('\n')}${imports.length ? '\n\n' : ''}export default function ${name}() {
  return (
    <>
${breadcrumbJsx}${indent(jsx, 6)}
    </>
  );
}
`;

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  const outPath = resolve(OUT_DIR, `${name}.jsx`);
  writeFileSync(outPath, out);
  console.log(`✓ ${html} → ${name}.jsx (${out.length} chars)`);
}

function indent(text, spaces) {
  const pad = ' '.repeat(spaces);
  return text
    .split('\n')
    .map((l) => (l.length ? pad + l : l))
    .join('\n');
}

for (const page of PAGES) {
  try {
    generatePage(page);
  } catch (e) {
    console.error(`✗ ${page.html}:`, e.message);
  }
}

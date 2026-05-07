import { useParams, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import BriefPanel from '../components/BriefPanel.jsx';
import CTABand from '../components/CTABand.jsx';
import Glyph from '../components/Glyph.jsx';
import HeroPitchCard from '../components/HeroPitchCard.jsx';
import ProgramSpine from '../components/ProgramSpine.jsx';
import { PROGRAMS_BY_SLUG } from '../data/programs.js';

const ICON_STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const GlobeIcon = () => (
  <svg viewBox="0 0 32 32" {...ICON_STROKE}>
    <circle cx="16" cy="16" r="12" />
    <ellipse cx="16" cy="16" rx="6" ry="12" />
    <path d="M4 16h24" />
    <path d="M22 22l4 4M26 22l-4 4" />
  </svg>
);

const ScalesIcon = () => (
  <svg viewBox="0 0 32 32" {...ICON_STROKE}>
    <path d="M16 5v23" />
    <path d="M8 9h16" />
    <path d="M9 9l-4 9c0 2.2 1.8 3.4 4 3.4S13 20.2 13 18l-4-9z" />
    <path d="M23 9l-4 9c0 2.2 1.8 3.4 4 3.4S27 20.2 27 18l-4-9z" />
  </svg>
);

const FamilyIcon = () => (
  <svg viewBox="0 0 32 32" {...ICON_STROKE}>
    <circle cx="11" cy="10" r="4" />
    <circle cx="22" cy="12" r="3" />
    <path d="M3 26c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    <path d="M19 26c0-2.7 2.7-5 6-5" />
  </svg>
);

const PROGRAM_PITCH = [
  {
    icon: <GlobeIcon />,
    kicker: 'Mobility',
    title: 'Freedom of movement',
    body:
      'Visa-free or visa-on-arrival access across the OECD, plus a second jurisdiction the family can actually live in — schooling, healthcare and tax all mapped before you commit.',
  },
  {
    icon: <ScalesIcon />,
    kicker: 'Tax',
    title: 'Tax positioning',
    body:
      'Residency and tax-resident status modelled against the family’s real income picture — not a brochure assumption. We tell you the break-even before the application is filed.',
  },
  {
    icon: <FamilyIcon />,
    kicker: 'Family',
    title: 'Family & legacy',
    body:
      'Spouse, children — including adult dependants where the rules allow — and where relevant parents and grandparents, sequenced into a single mandate rather than separate filings.',
  },
];

function splitProgramTitle({ name, country }) {
  if (country && name.startsWith(country + ' ')) {
    return { lead: country, tail: name.slice(country.length + 1) };
  }
  if (country === 'United Arab Emirates' && name.startsWith('UAE ')) {
    return { lead: 'UAE', tail: name.slice(4) };
  }
  const words = name.trim().split(/\s+/);
  return words.length >= 2
    ? { lead: words.slice(0, -1).join(' '), tail: words[words.length - 1] }
    : { lead: name, tail: undefined };
}

export default function ProgramPage() {
  const { slug } = useParams();
  const program = PROGRAMS_BY_SLUG[slug];

  if (!program) {
    return <Navigate to="/pricing" replace />;
  }

  const { lead, tail } = splitProgramTitle(program);

  return (
    <>
      <Breadcrumb
        variant="editorial"
        title={lead}
        emphasis={tail}
        crumbs={[
          {
            label: 'Mobius',
            to: '/',
            glyph: <Glyph tone="ivory" size={16} title="Mobius & Partners" />,
          },
          { label: 'Programs', to: '/pricing' },
          { label: program.name },
        ]}
        docControl={{
          category: program.category,
          docCode: program.docCode,
          lastRevisedAt: program.lastRevisedAt,
        }}
        tagline={program.tagline}
        aside={<BriefPanel program={program} />}
        pitch={<HeroPitchCard slides={PROGRAM_PITCH} />}
      />
      <ProgramSpine program={program} />
      <CTABand
        eyebrow="Next step"
        title="Before you commit to this program, hear our read."
        body="Most first calls end with a clear yes, no or redirect. Tell us the situation — we respond under NDA within two business days."
        primary={{ label: 'Schedule Consultation', to: '/contact' }}
        secondary={{ label: 'Programs & Fees', to: '/pricing' }}
        bg="ink"
      />
    </>
  );
}

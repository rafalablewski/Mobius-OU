// Per-jurisdiction program content. Consumed by the shared ProgramPage
// component via /programs/:slug.

export const PROGRAMS = [
  {
    slug: 'portugal-golden-visa',
    region: 'Europe',
    name: 'Portugal Golden Visa',
    tagline: 'EU residency with the lightest presence requirement in Europe.',
    heroImg: '/assets/img/blog/29.jpg',
    summary:
      'Portugal\'s Golden Visa remains the most robust EU residency route after the 2023 reform. The fund sub-route keeps minimum physical presence at seven days per year and preserves the five-year path to citizenship for the whole immediate family.',
    facts: [
      { label: 'Minimum investment', value: '€500,000 qualifying fund' },
      { label: 'Minimum presence',   value: '7 days / year (avg.)' },
      { label: 'Dependants',         value: 'Spouse, children (incl. adult dependent), parents' },
      { label: 'Path to citizenship', value: '5 years from issue of residency' },
    ],
    notes: [
      'The real-estate and capital-transfer sub-routes were closed in 2023; only the regulated-fund, scientific-research and cultural-heritage sub-routes remain open.',
      'Funds must be regulated in the EU and held via a Portuguese bank account. We select on independent merit and audited returns — not on placement commission.',
      'Tax residency is not triggered by the Golden Visa alone; a separate day-count decision is made once sale proceeds and school-year timing permit a clean move.',
    ],
    timeline: [
      { step: 'Discovery', weeks: 'Week 1',       body: 'NDA, intake and a high-level program fit.' },
      { step: 'Fund selection', weeks: 'Week 2–4', body: 'Shortlist, due diligence and a Portuguese bank account.' },
      { step: 'Application', weeks: 'Month 2–6', body: 'Biometric appointment in Lisbon; residency cards issued.' },
    ],
  },
  {
    slug: 'malta-mein',
    region: 'Europe',
    name: 'Malta MEIN',
    tagline: 'The only direct route to an EU passport — slower, heavier, still worth it.',
    heroImg: '/assets/img/blog/13.jpg',
    summary:
      'Malta\'s Citizenship by Direct Investment (MEIN) is the last standing EU citizenship-by-investment route. Processing has lengthened and files are scrutinised more than ever; for the right profile the end-state passport remains the strongest mobility prize on the market.',
    facts: [
      { label: 'Minimum investment', value: '€690,000 contribution + real estate + charity' },
      { label: 'Residency period',   value: '12 or 36 months before naturalisation' },
      { label: 'Dependants',         value: 'Spouse, children, dependent parents & grandparents' },
      { label: 'End state',          value: 'Full Maltese passport (EU)' },
    ],
    notes: [
      'Enhanced due diligence is conducted by a dedicated agency; files with unexplained source-of-funds fail, regardless of investment size.',
      'We only take MEIN mandates where source of funds can be documented to a standard appropriate for an EU citizenship file.',
    ],
    timeline: [
      { step: 'Pre-screen', weeks: 'Week 1–2', body: 'Source-of-funds review; go / no-go decision.' },
      { step: 'Residency',  weeks: 'Month 2',  body: 'Residency card issued; clock starts.' },
      { step: 'Eligibility', weeks: 'Month 13 or 37', body: 'Citizenship application filed.' },
    ],
  },
  {
    slug: 'switzerland-lump-sum',
    region: 'Europe',
    name: 'Switzerland Lump-Sum',
    tagline: 'Canton-level negotiated taxation for substantial foreign-source income.',
    heroImg: '/assets/img/blog/17.jpg',
    summary:
      'Lump-sum (forfait) taxation remains one of Europe\'s quietest premium routes. A negotiated annual tax base — not actual income — is agreed with the canton; for clients with sufficient foreign income, the effective rate is a fraction of European norms.',
    facts: [
      { label: 'Eligible cantons', value: '22 of 26 (incl. Vaud, Valais, Geneva, Ticino)' },
      { label: 'Min. annual tax',  value: 'CHF 150,000–400,000 (canton-dependent)' },
      { label: 'Work allowed',     value: 'No Swiss-source employment or business' },
      { label: 'Residency',        value: 'Obtained via the cantonal tax ruling' },
    ],
    notes: [
      'Not a citizenship route. The expectation is genuine Swiss residence; housing access rules vary materially by canton.',
      'We model the break-even income threshold before recommending a canton; below it, the lump-sum is inefficient versus a normal residence.',
    ],
    timeline: [
      { step: 'Canton selection', weeks: 'Week 1–3', body: 'Tax modelling and shortlist based on income profile.' },
      { step: 'Negotiation',      weeks: 'Month 2–3', body: 'Written ruling with the cantonal tax authority.' },
      { step: 'Move-in',          weeks: 'Month 4+', body: 'Housing, schooling and registration.' },
    ],
  },
  {
    slug: 'italy-flat-tax',
    region: 'Europe',
    name: 'Italy Flat-Tax',
    tagline: '€100,000 on all foreign-source income — one of Europe\'s strongest propositions.',
    heroImg: '/assets/img/blog/30.jpg',
    summary:
      'Italy\'s flat tax for new residents caps the annual Italian tax bill on all foreign-source income at €100,000 for the main applicant and €25,000 per family member, for up to fifteen years. Under-used relative to its actual strength.',
    facts: [
      { label: 'Annual flat tax', value: '€100,000 (main) + €25,000 / family member' },
      { label: 'Covers',          value: 'All foreign-source income & gains' },
      { label: 'Duration',        value: 'Up to 15 years' },
      { label: 'Requirement',     value: 'Not tax-resident in Italy for 9 of last 10 years' },
    ],
    notes: [
      'Available via the investor visa or ordinary residency — we sequence whichever is quicker for the client\'s passport.',
      'Italian-source income remains taxed normally; the benefit is on foreign-source yield, dividends, interest and gains.',
    ],
    timeline: [
      { step: 'Eligibility check', weeks: 'Week 1', body: 'Confirm the 9-of-10 rule and Italian-source picture.' },
      { step: 'Residency',         weeks: 'Month 1–3', body: 'Investor visa or ordinary residency chosen on speed.' },
      { step: 'Tax election',      weeks: 'First Italian tax return', body: 'Formal election of the flat-tax regime.' },
    ],
  },
  {
    slug: 'caribbean-cbi',
    region: 'Americas & Gulf',
    name: 'Caribbean CBI',
    tagline: 'Passport portfolio planning after the US–EU pressure cycle.',
    heroImg: '/assets/img/blog/2.jpg',
    summary:
      'The five active Caribbean programs have been repriced and harmonised. Mandatory interviews, tightened due diligence and a USD 200,000 contribution floor are now the standard; we run programs where the legal and political stability of the end-state passport justifies the spend.',
    facts: [
      { label: 'Active programs', value: 'Antigua, Dominica, Grenada, St. Kitts, St. Lucia' },
      { label: 'Minimum',         value: 'USD 200,000 contribution (per program)' },
      { label: 'Dependants',      value: 'Spouse, children, parents, siblings (varies)' },
      { label: 'Timeline',        value: '4–9 months' },
    ],
    notes: [
      'Portfolio logic: often two passports across programs is safer than doubling on one; we have views on which programs cluster well.',
      'Grenada is the only Caribbean passport with an E-2 US treaty; relevant for operators planning US presence.',
    ],
    timeline: [
      { step: 'Program selection', weeks: 'Week 1',    body: 'Jurisdiction-fit based on travel, residency and family.' },
      { step: 'Due diligence',     weeks: 'Month 2–4', body: 'Enhanced due diligence pack assembled and filed.' },
      { step: 'Naturalisation',    weeks: 'Month 4–9', body: 'Oath and passport issuance.' },
    ],
  },
  {
    slug: 'uae-golden-residence',
    region: 'Americas & Gulf',
    name: 'UAE Golden Residence',
    tagline: 'Ten-year Dubai residency — who still belongs there after corporate tax.',
    heroImg: '/assets/img/blog/3.jpg',
    summary:
      'The UAE Golden Visa is a ten-year renewable residency for investors, founders and specialists. After the 9% corporate tax introduction, the value proposition narrowed — it still works for passive wealth and founders with foreign-source income, less so for purely operating businesses routed through the UAE.',
    facts: [
      { label: 'Minimum investment',  value: 'AED 2M real estate or AED 2M in a regulated fund' },
      { label: 'Duration',            value: '10 years, renewable' },
      { label: 'Dependants',          value: 'Spouse, children (no age cap for unmarried daughters)' },
      { label: 'Corporate tax',       value: '9% on UAE-sourced income above AED 375k' },
    ],
    notes: [
      'Tax residency certificate (for treaty benefits) requires 183 days of physical presence — a meaningful move, not a nominal visa.',
      'Founders whose business pays foreign corporate tax can still route personal residency through the UAE without triggering UAE corporate tax on foreign operations.',
    ],
    timeline: [
      { step: 'Qualification',   weeks: 'Week 1–2', body: 'Investment route selection and source-of-funds pack.' },
      { step: 'Medical & ID',    weeks: 'Month 1',  body: 'In-country medical test and Emirates ID issuance.' },
      { step: 'Golden Residence', weeks: 'Month 2', body: 'Visa stamped; ten-year clock starts.' },
    ],
  },
];

export const PROGRAMS_BY_SLUG = Object.fromEntries(PROGRAMS.map((p) => [p.slug, p]));

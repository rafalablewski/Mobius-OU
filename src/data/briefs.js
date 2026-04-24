// Intelligence briefs published by Mobius.
// Shared by Blog (index) and BlogDetails (article).
// `body` is optional — when present, BlogDetails renders the structured
// blocks; when absent, the article shows the lede plus a "request memo"
// glass card.

export const BRIEFS = [
  {
    id: 'eu-golden-visas-next',
    slug: 'eu-golden-visas-next',
    img: '1.jpg',
    date: 'Mar 18, 2026',
    category: 'Residency',
    readMinutes: 6,
    title: 'Where EU Golden Visas Go Next: Portugal, Greece, Italy',
    excerpt:
      'After Portugal closed the real-estate route and Greece repriced Athens, the serious money is re-ranking Southern Europe on stability, not headline minimums.',
    body: [
      {
        type: 'p',
        text:
          'EU Golden Visas have entered their second decade. Portugal pulled the real-estate route; Greece priced Athens out of reach; Spain signalled a phase-out; Italy quietly kept its own route open. For clients deciding now, the right question is no longer "which program is cheapest" but "which program is still politically stable five years from issue."',
      },
      {
        type: 'p',
        text:
          'Portugal remains the most robust. Fund-route investment (currently a €500,000 minimum in regulated EU funds) keeps the minimum physical presence low — seven days per year — and preserves the statutory five-year path to EU citizenship. Fund governance and returns vary widely; we select on independent merit, not on placement commissions, because a Golden Visa is a fifteen-year relationship, not a transaction.',
      },
      {
        type: 'quote',
        text:
          'The right question is no longer "which program is cheapest" but "which program is still politically stable five years from issue."',
      },
      { type: 'h3', text: 'Greece, Italy and the shift to second-tier hubs' },
      {
        type: 'p',
        text:
          'Greece repriced its Golden Visa in and around Athens, Thessaloniki and the islands, effectively pushing fresh applicants to the €400,000 / €800,000 tiers depending on the municipality. For clients whose objective is mobility rather than a physical Greek base, the program is still sensible — but the case for Portugal\'s fund route strengthens in most side-by-side comparisons we run.',
      },
      {
        type: 'p',
        text:
          'Italy\'s own residency routes — the investor visa and the flat-tax regime for new residents — remain underused. For the right profile (substantial foreign-source income, willingness to physically reside), the €100,000 / €200,000 flat tax on foreign income is one of the strongest propositions in Europe.',
      },
      {
        type: 'pair',
        images: [
          { src: '29.jpg', alt: 'Lisbon riverfront at dusk' },
          { src: '30.jpg', alt: 'Rome architectural skyline' },
        ],
      },
      { type: 'h3', text: 'Our working view' },
      {
        type: 'p',
        text:
          'Portugal for optionality. Italy for residents with real substance. Greece for cost-conscious mobility. Malta only when the end-state is an EU passport and the client can sustain the process. We rank these quarterly for active clients and will send the current internal memo on request.',
      },
    ],
  },
  {
    id: 'caribbean-cbi-pressure-cycle',
    slug: 'caribbean-cbi-pressure-cycle',
    img: '2.jpg',
    date: 'Feb 04, 2026',
    category: 'Citizenship',
    readMinutes: 5,
    title: 'Caribbean CBI After the US–EU Pressure Cycle',
    excerpt:
      'Price harmonisation, mandatory interviews and tightened due diligence have re-shaped the Caribbean programs. What actually changed — and what it means for a multi-generation passport.',
  },
  {
    id: 'uae-corporate-tax-residency',
    slug: 'uae-corporate-tax-residency',
    img: '3.jpg',
    date: 'Jan 22, 2026',
    category: 'Tax Residency',
    readMinutes: 4,
    title: 'UAE Corporate Tax and the New Residency Calculus',
    excerpt:
      'Corporate tax at 9% reshaped the UAE value proposition for operators — but not for passive wealth. A short note on who still belongs in Dubai.',
  },
  {
    id: 'malta-mein-2026',
    slug: 'malta-mein-2026',
    img: '13.jpg',
    date: 'Dec 11, 2025',
    category: 'Citizenship',
    readMinutes: 7,
    title: 'Malta MEIN in 2026: Slower, Heavier, Still Worth It',
    excerpt:
      'Processing times have extended; files are scrutinised more than ever. For the right profile, the EU passport at the other end is still the strongest prize on the market.',
  },
  {
    id: 'schooling-first-relocation',
    slug: 'schooling-first-relocation',
    img: '14.jpg',
    date: 'Nov 02, 2025',
    category: 'Relocation',
    readMinutes: 5,
    title: 'Schooling First: How Families Actually Choose a Jurisdiction',
    excerpt:
      'The calendar that really matters in a relocation is the school year. A planning framework for families choosing between Lisbon, Dubai, Zurich and Singapore.',
  },
  {
    id: 'foundations-vs-trusts-cee',
    slug: 'foundations-vs-trusts-cee',
    img: '15.jpg',
    date: 'Oct 17, 2025',
    category: 'Asset Protection',
    readMinutes: 6,
    title: 'Private Foundations vs Trusts for Central European Wealth',
    excerpt:
      'Why Liechtenstein and Panamanian foundations still outperform common-law trusts for civil-law CEE owners — and where they do not.',
  },
  {
    id: 'qualifying-investments-prospectus',
    slug: 'qualifying-investments-prospectus',
    img: '16.jpg',
    date: 'Sep 09, 2025',
    category: 'Investment',
    readMinutes: 4,
    title: 'Qualifying Investments: Read the Prospectus, Not the Brochure',
    excerpt:
      'Most Golden Visa funds underperform their own benchmark. How to separate the qualifying label from the investment merit.',
  },
  {
    id: 'switzerland-lump-sum',
    slug: 'switzerland-lump-sum',
    img: '17.jpg',
    date: 'Aug 21, 2025',
    category: 'Residency',
    readMinutes: 5,
    title: 'Switzerland\'s Lump-Sum Taxation, Quietly Revisited',
    excerpt:
      'Canton-level reforms, housing access rules and the unspoken threshold above which a lump-sum move pays for itself.',
  },
  {
    id: 'source-of-funds-edd',
    slug: 'source-of-funds-edd',
    img: '18.jpg',
    date: 'Jul 14, 2025',
    category: 'Compliance',
    readMinutes: 8,
    title: 'Source of Funds: What Enhanced Due Diligence Actually Looks At',
    excerpt:
      'An advisor\'s field guide to documenting clean wealth — what the CRA-style questionnaires really want to see, and what derails files that should have cleared.',
  },
];

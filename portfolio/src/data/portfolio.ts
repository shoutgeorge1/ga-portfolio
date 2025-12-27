export type Project = {
  id: string;
  title: string;
  url: string;
  tags: string[];
  industry: string;
  objective: string;
  summary: string;
  featured: boolean;
  images: {
    desktop: string;
    mobile: string;
  };
};

export const portfolio: Project[] = [
  {
    id: 'city-direct-mail-el-cerrito',
    title: 'City Direct Mail Requirements',
    url: 'https://requirements-for-city-direct-mail-c-eight.vercel.app/el-cerrito.html',
    tags: ['Permits', 'Compliance'],
    industry: 'Permits',
    objective: 'Clear permit requirements for local businesses.',
    summary: 'Simple layout that explains what\'s needed without the usual government website confusion.',
    featured: true,
    images: {
      desktop: '/portfolio/city-direct-mail-el-cerrito-desktop.webp',
      mobile: '/portfolio/city-direct-mail-el-cerrito-mobile.webp',
    },
  },
  {
    id: 'dr-dhir-rhyno',
    title: 'Dr. Dhir – Rhyno Clinic',
    url: 'https://dr-dhir-rhyno-s7xu.vercel.app/',
    tags: ['Medical', 'Healthcare'],
    industry: 'Medical',
    objective: 'Turn ad clicks into consultation requests.',
    summary: 'Built for high-intent traffic. Removed friction, kept what matters.',
    featured: true,
    images: {
      desktop: '/portfolio/dr-dhir-rhyno-desktop.webp',
      mobile: '/portfolio/dr-dhir-rhyno-mobile.webp',
    },
  },
  {
    id: 'truglow-phone-offers',
    title: 'Truglow Phone Offers',
    url: 'https://truglow-phone-lp-offers.vercel.app/',
    tags: ['Dental', 'Phone Tracking'],
    industry: 'Dental',
    objective: 'Get more phone calls from promotions.',
    summary: 'Phone-focused design with tracking built in.',
    featured: false,
    images: {
      desktop: '/portfolio/truglow-phone-offers-desktop.webp',
      mobile: '/portfolio/truglow-phone-offers-mobile.webp',
    },
  },
  {
    id: 'balcony-design-permit',
    title: 'Balcony Design Permit',
    url: 'https://balcony-design-permit-landing-gz7k.vercel.app/',
    tags: ['Permits', 'Local Services'],
    industry: 'Permits',
    objective: 'Help people understand permit requirements.',
    summary: 'Organized the info people actually need, captured leads along the way.',
    featured: false,
    images: {
      desktop: '/portfolio/balcony-design-permit-desktop.webp',
      mobile: '/portfolio/balcony-design-permit-mobile.webp',
    },
  },
  {
    id: 'rnd-vs-katz-seo-audit',
    title: 'SEO Audit – RND vs Katz',
    url: 'https://rnd-vs-katz-35o4.vercel.app/SEO_AUDIT_REPORT.html',
    tags: ['SEO Audit', 'Technical'],
    industry: 'SEO/Audit',
    objective: 'Technical audit that people actually read.',
    summary: 'Prioritized fixes, skipped the fluff. Made it actionable.',
    featured: true,
    images: {
      desktop: '/portfolio/rnd-vs-katz-seo-audit-desktop.webp',
      mobile: '/portfolio/rnd-vs-katz-seo-audit-mobile.webp',
    },
  },
  {
    id: 'dr-brent-call-tracking',
    title: 'Dr. Brent – Call Tracking',
    url: 'https://drbrent-call-sb.vercel.app/',
    tags: ['Medical', 'Call Tracking'],
    industry: 'Medical',
    objective: 'Track which ads drive phone calls.',
    summary: 'Call tracking setup with a page that converts.',
    featured: false,
    images: {
      desktop: '/portfolio/dr-brent-call-tracking-desktop.webp',
      mobile: '/portfolio/dr-brent-call-tracking-mobile.webp',
    },
  },
  {
    id: 'encino-dental-emergency',
    title: 'Encino Dental Emergency',
    url: 'https://encino-dental-emer-lp-5lrs.vercel.app/',
    tags: ['Dental', 'Emergency'],
    industry: 'Dental',
    objective: 'Emergency visits need to convert fast.',
    summary: 'Urgent care layout. Big phone number, clear hours, no distractions.',
    featured: false,
    images: {
      desktop: '/portfolio/encino-dental-emergency-desktop.webp',
      mobile: '/portfolio/encino-dental-emergency-mobile.webp',
    },
  },
  {
    id: 'monarch-landscape',
    title: 'Monarch Landscape',
    url: 'https://monarch-landscape-lp.vercel.app/',
    tags: ['Local Services', 'Landscaping'],
    industry: 'Local Services',
    objective: 'Local search to consultation bookings.',
    summary: 'Mobile-first, local SEO built in, clear service list.',
    featured: false,
    images: {
      desktop: '/portfolio/monarch-landscape-desktop.webp',
      mobile: '/portfolio/monarch-landscape-mobile.webp',
    },
  },
  {
    id: 'dj-gui',
    title: 'DrumSep GUI',
    url: 'https://github.com/shoutgeorge1/dj-gui',
    tags: ['Desktop App', 'Audio Processing', 'Python'],
    industry: 'Tools',
    objective: 'Windows app for separating drum stems from audio.',
    summary: 'Built a downloadable executable for DJs. No command line, no Python setup. Just drag, drop, separate.',
    featured: false,
    images: {
      desktop: '/portfolio/dj-gui-desktop.webp',
      mobile: '/portfolio/dj-gui-desktop.webp',
    },
  },
];

export const industries = ['All', 'Medical', 'Dental', 'Local Services', 'SEO/Audit', 'Permits', 'Tools'] as const;


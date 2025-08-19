// /src/data/processSteps.ts
export type ProcessStep = {
  id: number;
  number: string; // "01", "02", ...
  title: string;
  bullets: string[];
};

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Strategy',
    bullets: [
      'Understand your business goals, target audience, and content needs',
      'Review inspiration, competitors, and brand direction',
      'Define project scope, features, and timeline',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX Design',
    bullets: [
      'Wireframe key sections (optional depending on scope)',
      'Design high-fidelity desktop & mobile layouts in Figma',
      'Present interactive prototype for feedback',
      'Finalize design after 1–2 revision rounds',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    bullets: [
      'Set up project structure (Next.js, Tailwind CSS, etc.)',
      'Build responsive frontend from approved Figma design',
      'Integrate animations (Framer Motion or scroll effects if needed)',
      'Set up CMS (if included), blog, or product catalog',
      'Connect APIs (forms, Stripe, etc.)',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Testing & Optimization',
    bullets: [
      'Test across modern browsers and devices',
      'Optimize for performance, SEO, and accessibility',
      'Set up metadata, sitemap, and favicons',
      'Ensure smooth interactions and fast load times',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Launch',
    bullets: [
      'Connect custom domain',
      'Deploy to preferred host',
      'Final walkthrough and training (if CMS is included)',
      'Go live',
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Post-launch Support',
    bullets: [
      'Minor tweaks after launch',
      'Ongoing maintenance available upon request',
    ],
  },
];

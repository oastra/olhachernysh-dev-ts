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
      'We align on your goals, audience, and what success looks like',
      'Review competitors and references to shape a clear direction',
      'Lock in scope, features, and timeline — no surprises later',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX Design',
    bullets: [
      'Design pixel-perfect layouts for desktop and mobile in Figma',
      'Walk you through an interactive prototype you can click and feel',
      'Refine together until the design is exactly right',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    bullets: [
      'Hand-code every page with clean, modern technology',
      'Build fully responsive — looks sharp on any screen',
      'Add smooth animations and micro-interactions',
      'Integrate CMS, payments, forms, and any tools your business needs',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Testing & Optimization',
    bullets: [
      'Test across browsers and devices so nothing breaks',
      'Optimize for speed, SEO, and accessibility from day one',
      'Set up metadata and sitemap so Google finds you fast',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Launch',
    bullets: [
      'Connect your domain and deploy to your preferred host',
      'Walk you through everything so you feel confident managing it',
      'Go live — your site is ready for the world',
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Post-launch Support',
    bullets: [
      'Quick fixes and adjustments included after launch',
      'Ongoing maintenance and updates when you need them',
      'I stay available — you always have a developer on your side',
    ],
  },
];

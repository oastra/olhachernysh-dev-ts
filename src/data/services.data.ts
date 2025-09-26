export type ServiceItem = {
  index: number;
  title: string;
  summary?: string;
  bullets?: string[];
  image?: { src: string; alt: string };
};

export const SERVICES: ServiceItem[] = [
  {
    index: 1,
    title: 'Custom Website Development',
    summary:
      'Full-service websites designed with a UI/UX expert and developed from scratch.',
    bullets: [
      'Landing Pages (high-converting, responsive)',
      'Business Websites (multi-page, CMS-powered)',
      'E-commerce Websites (custom storefronts with Stripe or Shopify)',
      'Booking & Service-based Sites (salons, retreats, events)',
      'Portfolio or Personal Brand Websites',
    ],
    image: {
      src: '/images/services/01-customWebsiteDevelopment.webp',
      alt: 'Custom website development',
    },
  },
  {
    index: 2,
    title: 'UI/UX Design (via expert collaboration)',
    summary:
      'All designs are created in partnership with a professional UI/UX designer.',
    bullets: [
      'High-fidelity Figma prototypes (desktop & mobile)',
      'User-focused wireframes (optional)',
      'Conversion-oriented layouts and flows',
      'Design handoff files for dev teams (if development isn’t included)',
    ],
    image: {
      src: '/images/services/02-UXDesign.webp',
      alt: 'Design collaboration',
    },
  },
  {
    index: 3,
    title: 'Frontend Development',
    summary:
      'Pixel-perfect builds using modern, scalable, and responsive technologies.',
    bullets: [
      'HTML, CSS, JavaScript, Next.js, React.js',
      'Tailwind CSS, Framer Motion, Swiper.js',
      'Accessibility, SEO, and performance-focused markup',
      'Animation and scroll-triggered effects',
    ],
    image: {
      src: '/images/services/03-frontendDevelopment.webp',
      alt: 'Frontend development',
    },
  },
  {
    index: 4,
    title: 'Backend & Integrations',
    summary:
      'Lightweight and efficient solutions for dynamic content and business logic.',
    bullets: [
      'Contact forms and newsletter signup',
      'Stripe or Shopify integration',
      'CMS setup',
      'Firebase, Supabase, MongoDB, MySQL',
      'API integrations (Instagram, maps, etc.)',
    ],
    image: {
      src: '/images/services/04-backendIntegrations.webp',
      alt: 'Backend & integrations',
    },
  },
  {
    index: 5,
    title: 'Technical Setup & Launch',
    summary: 'Everything needed to get your website live and performing.',
    bullets: [
      'Hosting setup',
      'Domain connection and DNS configuration',
      'SEO basics, Google Analytics, and Meta pixel',
      'Speed optimization and performance audits',
    ],
    image: {
      src: '/images/services/05-TechnicalSetupLaunch.webp',
      alt: 'Technical setup and launch',
    },
  },
];

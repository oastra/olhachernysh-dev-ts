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
      'Full-service websites designed with a UI/UX expert and built from scratch \u2014 no templates, no page builders.',
    bullets: [
      'Landing pages that convert visitors into customers',
      'Multi-page business websites with easy content management',
      'Online stores with secure checkout and payments',
      'Booking and service-based sites for salons, events, and more',
      'Portfolio and personal brand websites',
    ],
    image: {
      src: '/images/services/01-customWebsiteDevelopment.webp',
      alt: 'Custom website development',
    },
  },
  {
    index: 2,
    title: 'UI/UX Design',
    summary:
      'Every project includes professional design created in partnership with a dedicated UI/UX designer.',
    bullets: [
      'Polished Figma prototypes for desktop and mobile',
      'Layouts designed to guide users and drive action',
      'Interactive previews you can click through before development starts',
      'Design files available for your team if needed',
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
      'Pixel-perfect builds using modern, scalable technology \u2014 fast, responsive, and built to last.',
    bullets: [
      'Clean, hand-written code that loads fast and ranks well',
      'Fully responsive across all screen sizes',
      'Accessible and SEO-friendly from the ground up',
      'Smooth animations and scroll-triggered effects',
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
      'Connect your website to the tools that run your business.',
    bullets: [
      'Contact forms and newsletter signup',
      'Payment processing with Stripe or Shopify',
      'Content management so you can update your site yourself',
      'Databases, APIs, and third-party integrations',
    ],
    image: {
      src: '/images/services/04-backendIntegrations.webp',
      alt: 'Backend & integrations',
    },
  },
  {
    index: 5,
    title: 'Technical Setup & Launch',
    summary: 'Everything needed to get your website live and performing at its best.',
    bullets: [
      'Hosting setup and domain connection',
      'SEO foundations, Google Analytics, and tracking',
      'Speed optimization so your site loads in seconds',
      'Final performance audit before going live',
    ],
    image: {
      src: '/images/services/05-TechnicalSetupLaunch.webp',
      alt: 'Technical setup and launch',
    },
  },
];

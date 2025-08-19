// Types for reusability elsewhere (FAQ, checkout, etc.)
export type PricingFeature = string;

export type PricingPlan = {
  id: 'landing' | 'business' | 'ecommerce';
  title: string;
  priceLabel: string; // e.g., "from $1,500"
  summary: string;
  features: PricingFeature[];
  ctaText?: string;
  ctaHref?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'landing',
    title: 'Landing Page',
    priceLabel: 'from $1,500',
    summary:
      'Includes expert UI/UX design and a fast, responsive, single-page build tailored to your business goals.',
    features: [
      'High-fidelity UI/UX design in Figma, fully responsive for all screen sizes',
      'Clean, performant development using Next.js and Tailwind CSS',
      'Conversion-focused layout with clear call-to-action',
      'Contact form integration and smooth scroll experience',
    ],
    ctaText: 'Contact Me',
    ctaHref: '#contact',
  },
  {
    id: 'business',
    title: 'Business Website',
    priceLabel: 'from $3,000',
    summary:
      'A complete multi-page website designed and developed to represent your brand, build trust, and grow your online presence.',
    features: [
      'High-fidelity UI/UX design in Figma for all key pages, fully responsive',
      'Custom-coded up to 5 pages using modern tech stack (Next.js, Tailwind CSS)',
      'CMS integration for easy content updates',
      'Blog or dynamic content setup',
      'SEO-ready structure and optimized performance',
    ],
    ctaText: 'Contact Me',
    ctaHref: '#contact',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Setup',
    priceLabel: 'from $5,000',
    summary:
      'A professional online store with everything you need to showcase and sell your products with confidence.',
    features: [
      'High-fidelity Figma design for product pages, cart, and checkout flow',
      'Fully responsive development using Next.js, Tailwind CSS, and e-commerce integrations',
      'Product catalog setup and secure payment integration',
      'Shopping cart and checkout functionality',
      'SEO optimization and performance tuning for fast, smooth shopping experience',
    ],
    ctaText: 'Contact Me',
    ctaHref: '#contact',
  },
];

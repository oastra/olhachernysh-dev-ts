import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    slug: 'tresp',
    title: 'TRESP Recruitment — MedTech Talent Platform',
    shortTitle: 'TRESP',
    headline: 'TRESP — a MedTech recruitment platform in the making',
    location: 'Australia',
    liveUrl: 'https://tresp.com.au',
    status: 'in-development',
    image: {
      src: '/images/projects/tresp/card.webp',
      alt: 'TRESP Recruitment — website redesign for a boutique MedTech and HealthTech recruitment agency, currently in design',
      width: 936,
      height: 650,
    },
    heroImage: {
      src: '/images/projects/tresp/hero.webp',
      alt: 'TRESP Recruitment platform — Home, About, Employers, Jobseekers, Vacancies and Insights, currently in the design phase',
      width: 1440,
      height: 900,
    },
    meta: {
      role: 'Design Direction & Full-Stack Development',
      type: 'MedTech Recruitment Platform',
      year: '2026',
      location: 'Australia',
    },
    progress: {
      summary:
        'A full website redesign for TRESP Recruitment, a boutique MedTech & HealthTech agency — bringing live vacancies, the team and editorial Insights into one modern, conversion-focused product, integrated with JobAdder, LinkedIn and Google Reviews. Design is approved and Payload CMS is signed off as the foundation — now moving into build.',
      overview: {
        what: 'A new website for TRESP Recruitment across six areas — Home, About, Employers, Jobseekers, Vacancies and Insights — replacing an outdated site with a trustworthy, conversion-focused platform wired to the agency’s existing tools.',
        audience:
          'Two distinct audiences: employers hiring specialist MedTech talent and jobseekers looking for roles — plus the TRESP team, showcased through individual consultant profiles that build trust before contact.',
        goal: 'Fix the current site’s weak points (no clear CTA, no social proof, thin navigation, no analytics) and let live data flow in from JobAdder, LinkedIn and Google — keeping candidate personal data off the website entirely, with submissions passed straight to JobAdder.',
      },
      currentPhase: 'Build — kicking off',
      highlights: [
        { text: 'Ran discovery end to end — audited TRESP’s business and services, benchmarked competitor recruiters, and turned it into a section-by-section plan for every page', icon: 'search' },
        { text: 'Information architecture agreed: Home, About, Employers, Jobseekers, Vacancies and Insights', icon: 'check' },
        { text: 'Design system defined — Kollektif headings + Plus Jakarta Sans, a blue palette with a warm #FFA675 accent', icon: 'palette' },
        { text: 'High-fidelity designs delivered across Home, Employers, Jobseekers, Vacancies and Insights — desktop, tablet and mobile', icon: 'sparkles' },
        { text: 'Key patterns designed: hero + tagline, job search filters, structured vacancy cards and the team auto-scroll carousel', icon: 'mobile' },
        { text: 'Stack approved by the client — building on Payload CMS, with a host-then-transfer model and no ongoing licence fees', icon: 'rocket' },
        { text: 'Data approach locked: vacancies served live from JobAdder, with no candidate personal data stored on the site', icon: 'trust' },
        { text: 'Integration scope mapped: JobAdder (live vacancies + applications), LinkedIn (Insights feed), Google Reviews, Office 365', icon: 'trending' },
      ],
      stages: [
        {
          title: 'Discovery',
          status: 'done',
          detail:
            'We led discovery from the ground up — an audit of TRESP’s business and service lines, a competitor benchmark across rival MedTech & Pharma recruiters, and a teardown of the old site’s weak points. That fed a complete information-architecture blueprint: every page mapped section by section, with a key action defined for each.',
        },
        {
          title: 'Design',
          status: 'done',
          detail:
            'Home, Employers, Jobseekers, Vacancies and Insights designed across desktop, tablet and mobile; About finishing once team photos arrive.',
        },
        {
          title: 'Build',
          status: 'active',
          detail:
            'Stack signed off and kicking off — scaffolding Payload and wiring the live JobAdder integration first.',
        },
        {
          title: 'Launch',
          status: 'upcoming',
          detail:
            'Ship with JobPosting structured data, analytics and a clean transfer to TRESP’s own accounts.',
        },
      ],
      gallery: [
        {
          src: '/images/projects/tresp/employers.webp',
          alt: 'TRESP Employers page design — hero and value proposition for clients hiring MedTech talent',
          width: 960,
          height: 720,
          span: 'half',
          caption: 'Employers — for clients building MedTech teams.',
        },
        {
          src: '/images/projects/tresp/jobseekers.webp',
          alt: 'TRESP Jobseekers page design — “We care about your career” hero with Upload CV and View Vacancies CTAs',
          width: 960,
          height: 720,
          span: 'half',
          caption: 'Jobseekers — career-focused, with a clear path to apply.',
        },
        {
          src: '/images/projects/tresp/vacancies.webp',
          alt: 'TRESP Vacancies page design — job search with filters and structured vacancy cards, fed live from JobAdder',
          width: 960,
          height: 720,
          span: 'half',
          caption: 'Vacancies — search and filters, served live from JobAdder.',
        },
        {
          src: '/images/projects/tresp/insights.webp',
          alt: 'TRESP Insights page design — editorial articles and updates fed from LinkedIn',
          width: 960,
          height: 720,
          span: 'half',
          caption: 'Insights — editorial content, fed from LinkedIn.',
        },
      ],
      blueprint: {
        intro:
          'The plan came out of discovery, not guesswork — TRESP’s own services, a competitor benchmark and the old site’s gaps. We mapped what each page had to do before any design started: stronger brand presence, two clear audience paths (employers vs. jobseekers), and a single key action defined on every page.',
        principles: [
          'Stronger brand presence',
          'Two audience paths — employers & jobseekers',
          'A key action on every page',
          'Friendly & approachable',
        ],
        pages: [
          {
            name: 'Home',
            level: 'Primary',
            audience: 'Both audiences',
            keyAction: 'Route to Hire Talent or Join Our Network',
            sections: [
              'Hero — “Trusted Expertise in Medical Device & Healthcare Recruitment” + Join Our Network / Hire Talent',
              'Expertise in Numbers — 4 metrics + client success story',
              'Trusted Partners — client logos',
              'Core Expertise cards',
              'Meet the Team',
              'Job Search',
              'Industry Insights',
              'Latest Vacancies',
              'FAQ',
              'Contact Form',
              'Footer',
            ],
          },
          {
            name: 'About Us',
            level: 'Primary',
            audience: 'Both — trust building',
            keyAction: 'Build trust, then contact',
            sections: [
              'Hero — About TRESP Recruitment',
              'Why Partner with TRESP? — info cards',
              'Expertise in Numbers',
              'Meet the Team',
              'Contact Form',
              'Footer',
            ],
          },
          {
            name: 'Candidates (Jobseekers)',
            level: 'Primary',
            audience: 'Jobseekers',
            keyAction: 'Upload CV / View Vacancies',
            sections: [
              'Hero — “Your next MedTech role starts here” + Upload CV / View Vacancies',
              'Social proof — counters',
              'Why TRESP is not your average recruiter',
              'Who We Support',
              'How We Work Together',
              'Latest Vacancies',
              'MedTech Launchpad',
              'Real Transitions, Real Results',
              'Meet the Team',
              'FAQ',
              'Final CTA — Upload CV / Speak with a consultant',
              'Contact Form',
              'Footer',
            ],
          },
          {
            name: 'Clients (Employers)',
            level: 'Primary',
            audience: 'Employers',
            keyAction: 'Speak with a consultant',
            sections: [
              'Hero — “Hard-to-fill roles in MedTech & Pharma — our specialty”',
              'Address the main objection immediately',
              'Numbers that speak for themselves',
              'Roles we fill',
              'How we work — the client’s perspective',
              'Why TRESP, not a large recruiter',
              'Case studies / success stories',
              'Client testimonials',
              'Meet the team',
              'FAQ for clients',
              'Final CTA',
              'Contact Form',
              'Footer',
            ],
          },
          {
            name: 'Vacancies',
            level: 'Primary',
            audience: 'Jobseekers',
            keyAction: 'Search & apply — live from JobAdder',
            sections: [
              'Hero',
              'Filters — All / Permanent / Contract, function, location',
              'Job cards — live → Job Page',
              '“Don’t see what you’re looking for?” — register interest',
              'Contact Form',
              'Footer',
            ],
          },
          {
            name: 'Insights',
            level: 'Primary',
            audience: 'Both audiences',
            keyAction: 'Read & subscribe',
            sections: [
              'Hero — Insights into Life Sciences Recruitment + Browse / Contact',
              'Featured Insights',
              'Filters — Salary Guides · Hiring Advice · Career Advice · Industry News',
              'Insights grid',
              'Contact Form',
              'Footer',
            ],
          },
          {
            name: 'Contact Us',
            level: 'Primary',
            audience: 'Both audiences',
            keyAction: 'Submit enquiry',
            sections: ['Hero', 'Form', 'Map', 'Footer'],
          },
          {
            name: 'Job Page · Insight Article',
            level: '2nd level',
            audience: 'Both audiences',
            keyAction: 'Apply (passed to JobAdder) / Read',
            sections: [
              'Single vacancy — apply passes straight to JobAdder, no candidate data stored',
              'Single editorial article — fed from LinkedIn',
            ],
          },
          {
            name: 'Technical',
            level: 'Technical',
            sections: ['404 — Not Found', 'Privacy Policy', 'Cookie Policy'],
          },
        ],
      },
      decisions: [
        {
          title: 'Choosing the CMS / backend',
          state: 'decided',
          options: [
            {
              name: 'Sanity',
              note: 'Considered for its simplicity — fast to set up and a polished editor. But it’s a hosted content store, so the JobAdder / LinkedIn integrations and lead routing would live separately, and data would sit on Sanity’s cloud.',
            },
            {
              name: 'Payload CMS',
              note: 'Self-hosted and TypeScript-native with its own database — manages the editable content and hosts the JobAdder / LinkedIn / Google integrations in one codebase, with no ongoing licence fees and full data ownership.',
              recommended: true,
              chosen: true,
            },
          ],
          recommendation:
            'Decided: Payload CMS, approved by the client. TRESP isn’t a typical content site — vacancies come live from JobAdder, posts from LinkedIn and ratings from Google, so the CMS mainly manages team profiles, services and editorial content. Payload is self-hosted with its own database, keeping that content and the integration logic in one codebase, with no ongoing licence fees. Crucially, no candidate personal data is stored on the site — applications pass straight through to JobAdder via the API. Sanity was the simpler, faster start, but data ownership and keeping the integrations in one place won out. Agreed delivery model: we host on our account through the build, with a full transfer to TRESP’s own accounts at go-live (hosting ~$20–40/month).',
        },
        {
          title: 'Primary accent & button colour',
          state: 'decided',
          options: [
            {
              name: 'Warm accent (peach / orange)',
              note: 'Our recommendation — a warm #FFA675 against the blue palette gives the CTAs real contrast and a friendlier, more human feel for a people-first recruitment brand, helping the “Hire Talent” and apply buttons stand out.',
              recommended: true,
            },
            {
              name: 'Light blue',
              note: 'The client’s choice — staying within the blue family keeps the look calm, clinical and on-brand for MedTech. Mehdi also asked to move the top banner from a white background to light blue, so the hero now leads with blue too.',
              chosen: true,
            },
          ],
          recommendation:
            'Decided: light blue, at the client’s request. We recommended a warm peach/orange accent to make the calls-to-action pop and add some human warmth, but Mehdi preferred to keep everything in the blue family for a calmer, more clinical MedTech feel — and asked to switch the top banner from white to light blue. It’s their brand, so the designs now lead with blue across the buttons and hero. We can always revisit a warm accent later if the CTAs need more lift.',
        },
      ],
      next: [
        'Scaffold the Payload CMS build and wire the JobAdder integration first, so Vacancies show live and applications pass straight through to JobAdder.',
        'Build out the approved designs — Home, Employers, Jobseekers, Vacancies and Insights — across desktop, tablet and mobile.',
        'Finish the About page once team photos arrive, and set up hosting under our account ready for a clean transfer to TRESP at go-live.',
      ],
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Payload CMS',
        'PostgreSQL',
        'JobAdder API',
        'LinkedIn API',
        'Google Reviews',
        'Vercel',
      ],
    },
  },
  {
    slug: 'dreamsbranch',
    title: 'DreamsBranch — Community & Fundraising Platform',
    shortTitle: 'DreamsBranch',
    location: 'Sydney, Australia',
    liveUrl: 'https://dreamsbranch.com.au',
    status: 'in-development',
    image: {
      src: '/images/projects/dreamsbranch/card.webp',
      alt: 'DreamsBranch — custom bilingual community and fundraising platform built in Next.js for a Sydney Ukrainian foundation',
      width: 936,
      height: 650,
    },
    heroImage: {
      src: '/images/projects/dreamsbranch/hero.webp',
      alt: 'DreamsBranch About the Community page — custom Next.js community website for a Sydney-based Ukrainian foundation',
      width: 1440,
      height: 900,
    },
    meta: {
      role: 'Full-Stack Development & Platform Architecture',
      type: 'Community Platform',
      year: '2026',
      location: 'Sydney, Australia',
    },
    caseStudy: {
      summary:
        'A custom-built bilingual (English and Ukrainian) community and fundraising platform bringing donations, campaigns, events, news and a community space into one coherent experience.',
      overview: {
        what: 'DreamsBranch is a community-focused digital platform combining fundraising, events, news and member communication under a single structured product, fully translated into English and Ukrainian.',
        audience:
          'A bilingual English- and Ukrainian-speaking community of members, donors and event participants — both first-time visitors and returning supporters.',
        goal: 'Turn a fragmented set of community activities into one platform where people can support causes, follow news and take part in events without friction, in whichever of the two languages they prefer.',
      },
      challenge: [
        'The organisation needed to unify several disconnected touchpoints — donations, events, editorial content and community updates — into one platform with a clear structure and a long-term content model.',
        'The product had to feel light and welcoming to first-time visitors while still handling real fundraising flows, multilingual-oriented content and a growing library of events and stories.',
      ],
      solution: [
        'We approached the build as a long-lived platform rather than a single website, modelling content types first (campaigns, events, news, community entries) and designing the UI around how they would evolve over time.',
        'Visual language stayed calm and editorial. Donation and event flows were kept short, trustworthy and clearly separated from the browsing experience, so neither side distracts from the other.',
      ],
      contributions: [
        {
          title: 'Strategy & structure',
          items: [
            'Defined the content model for campaigns, events and news',
            'Mapped the supporter journey from discovery to donation',
            'Planned the information architecture for scale',
          ],
        },
        {
          title: 'Development',
          items: [
            'Built the full interface in Next.js with reusable sections',
            'Implemented accessible, responsive layouts across all breakpoints',
            'Created a consistent component library for content pages',
          ],
        },
        {
          title: 'Backend & integrations',
          items: [
            'Built server-side handlers for donation and event flows',
            'Integrated editorial content management for the team',
            'Wired bilingual (English / Ukrainian) routing, translations and a header language switch',
            'Set up SEO fundamentals and social sharing for campaigns',
          ],
        },
      ],
      features: [
        {
          title: 'Donation campaigns',
          description:
            'Dedicated campaign pages with clear goals, progress and a focused call to action.',
        },
        {
          title: 'Events hub',
          description:
            'Structured listings for upcoming and past events with registration entry points.',
        },
        {
          title: 'News & stories',
          description:
            'Editorial layout for updates, initiatives and community stories that grows over time.',
        },
        {
          title: 'Community space',
          description:
            'Sections for members to discover what the community does and how to get involved.',
        },
        {
          title: 'Bilingual content — English & Ukrainian',
          description:
            'Every page is fully translated and editable in both languages, with a language switch in the header so visitors stay on the page they are reading.',
        },
      ],
      process: [
        {
          title: 'Discovery',
          description:
            'Aligned on audiences, priorities and the long-term vision for the platform.',
        },
        {
          title: 'Structure',
          description:
            'Defined the content model and navigation before any visuals were locked in.',
        },
        {
          title: 'Design & development',
          description:
            'Built sections in parallel with the content model so each page had a clear purpose.',
        },
        {
          title: 'Refinement',
          description:
            'Tightened copy, spacing and donation flow details in close review rounds.',
        },
        {
          title: 'Launch',
          description:
            'Shipped with SEO, analytics and a content workflow the team could maintain on their own.',
        },
      ],
      outcome: [
        { text: 'One platform replacing scattered pages, forms and announcements', icon: 'sparkles' },
        { text: 'Fully bilingual experience in English and Ukrainian, shipping from day one', icon: 'message' },
        { text: 'A clear path from first visit to donation or event registration', icon: 'trending' },
        { text: 'A scalable content structure the team can grow without developer involvement', icon: 'rocket' },
        { text: 'A visual language that feels trustworthy and community-oriented', icon: 'trust' },
      ],
      reflection: [
        'DreamsBranch taught us that community platforms live or die on their content model. Getting campaigns, events and news shaped correctly before any UI made every later decision easier — the layouts, the admin experience and the bilingual English/Ukrainian rollout all fell out of that early work.',
        'If we could rewind, we would spend even more time on the editorial tooling side from day one — especially around keeping the two language versions in sync without slowing the team down. The public platform feels right; the next frontier is making it just as effortless for the team to keep feeding it.',
      ],
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'next-intl',
        'Node.js',
        'Supabase',
        'PostgreSQL',
        'Supabase Storage',
        'Stripe',
        'PayPal',
        'Vercel',
      ],
      gallerySolution: [
        {
          src: '/images/projects/dreamsbranch/solution.webp',
          alt: 'Bilingual fundraising campaign page (Ukrainian) for an EcoFlow battery — DreamsBranch custom donation platform built in Next.js',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'Campaign page — goal, progress and donor list in one focused layout.',
        },
      ],
      galleryFeatures: [
        {
          src: '/images/projects/dreamsbranch/feature-1.webp',
          alt: 'Volunteer recruitment CTA and FAQ accordion — DreamsBranch community platform built by a Sydney web developer',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/dreamsbranch/feature-2.webp',
          alt: 'Foundation origin story page — "Dreams: Our Beginning" with February 24, 2022 timeline and Sydney rally photos, custom Next.js editorial layout',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/dreamsbranch/feature-3.webp',
          alt: 'Transparency results dashboard — 4 years supporting the Armed Forces, 1,200 events, $12,000 in aid and a "View reports" CTA',
          width: 1440,
          height: 900,
        },
      ],
      galleryMobile: [
        {
          src: '/images/projects/dreamsbranch/mobile-1.webp',
          alt: 'DreamsBranch community events listing on mobile (Ukrainian) — bilingual Next.js platform for a Sydney foundation',
          width: 390,
          height: 844,
        },
        {
          src: '/images/projects/dreamsbranch/mobile-2.webp',
          alt: 'Mobile bilingual donation form with PayPal, Apple Pay, Google Pay and card checkout — DreamsBranch fundraising platform',
          width: 390,
          height: 844,
        },
        {
          src: '/images/projects/dreamsbranch/mobile-3.webp',
          alt: 'Mobile fundraising campaign detail page (Ukrainian) — DreamsBranch EcoFlow donation, custom Next.js community platform',
          width: 390,
          height: 844,
        },
        {
          src: '/images/projects/dreamsbranch/mobile-4.webp',
          alt: 'Mobile handmade goods shop category (Ukrainian) — DreamsBranch community marketplace built in Next.js',
          width: 390,
          height: 844,
        },
      ],
      galleryProcess: [
        {
          src: '/images/projects/dreamsbranch/process.webp',
          alt: 'User flow diagram in Figma for DreamsBranch — donation, events and news flows across desktop and mobile, bilingual Next.js platform',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'User flow — donation, events and news across desktop and mobile.',
        },
      ],
    },
  },
  {
    slug: 'ukrrofing',
    title: 'Ukrrofing — Roofing Solutions',
    shortTitle: 'Ukrrofing',
    headline: "Ukrrofing — Page 1 for 'roofing Sydney' in 3 months",
    location: 'Sydney, Australia',
    liveUrl: 'https://ukrrofing.com.au',
    image: {
      src: '/images/projects/ukrrofing/card.webp',
      alt: 'Ukrrofing — custom Next.js website for a Sydney roofing business, built by a Sydney web developer',
      width: 936,
      height: 650,
    },
    heroImage: {
      src: '/images/projects/ukrrofing/hero.webp',
      alt: 'Ukrrofing homepage hero — "Professional Roofing Services in Sydney" with worker installing blue tile roof, custom Next.js website',
      width: 1440,
      height: 900,
    },
    meta: {
      role: 'Full-Stack Development & UX',
      type: 'Service Business Website',
      year: '2025',
      location: 'Sydney, Australia',
    },
    caseStudy: {
      summary:
        'A trust-first website for a local roofing business, engineered around clear service presentation and direct lead conversion.',
      overview: {
        what: "A service-based business website presenting Ukrrofing's roofing offering, credentials and contact paths in a clean, conversion-focused layout.",
        audience:
          'Homeowners and property managers in Sydney looking for a reliable roofing contractor — often comparing several providers in one session.',
        goal: 'Give visitors everything they need to trust the business and request a quote in under a minute, without template clutter.',
      },
      challenge: [
        'Most local service websites feel generic: stock imagery, vague service lists and contact forms hidden at the bottom of a long page. That pattern costs real leads.',
        'The site needed to communicate credibility quickly, make services easy to understand for a non-technical audience, and keep the path to contact visible throughout the experience.',
      ],
      solution: [
        'We built the site around a single question: "Why should I trust you, and how do I get a quote?" Every section answers one part of that, and the quote CTA is always within reach.',
        'Services are presented in plain language with distinct categories, so a visitor can place their own job in the right one within seconds. Visual identity stays professional and local, not corporate.',
      ],
      contributions: [
        {
          title: 'Strategy & UX',
          items: [
            'Mapped the decision path for a homeowner comparing providers',
            'Prioritised trust signals and quote entry points above everything else',
            'Restructured services for plain-language clarity',
          ],
        },
        {
          title: 'Development',
          items: [
            'Built a fully responsive, fast-loading marketing site',
            'Implemented accessible forms with clear validation feedback',
            'Optimised images and typography for quick first paint',
          ],
        },
        {
          title: 'Backend & integrations',
          items: [
            'Built the quote submission endpoint with validation',
            'Wired email delivery and spam protection for contact flows',
            'Configured deployment, environment and monitoring',
          ],
        },
        {
          title: 'SEO & performance',
          items: [
            'Structured metadata and semantic markup for local search',
            'Applied performance budgets to every page',
            'Set up analytics to track contact conversions',
          ],
        },
      ],
      features: [
        {
          title: 'Service breakdown',
          description:
            'Each roofing service presented with plain-language scope, outcomes and example situations.',
        },
        {
          title: 'Quote-first contact',
          description:
            'A direct quote request flow prioritised over a generic contact form.',
        },
        {
          title: 'Trust signals',
          description:
            'Credentials, locality and workmanship surfaced naturally across the page.',
        },
        {
          title: 'Mobile-optimised flow',
          description:
            'Most visitors arrive on phones — every tap target and form field is tuned for that.',
        },
      ],
      process: [
        {
          title: 'Discovery',
          description:
            'Understood the business, common jobs and the questions homeowners actually ask.',
        },
        {
          title: 'Structure',
          description:
            'Mapped a short, focused site rather than a wide one — every page earning its place.',
        },
        {
          title: 'Design & development',
          description:
            'Built a calm, professional layout with visible CTAs and clear service sections.',
        },
        {
          title: 'Refinement',
          description:
            'Tested forms, tap targets and real-device performance before launch.',
        },
        {
          title: 'Launch',
          description:
            'Shipped with SEO, tracking and a handoff that lets the owner update details easily.',
        },
      ],
      outcome: [
        { text: "First page of Google for 'roofing Sydney' within 3 months of launch", icon: 'search' },
        { text: 'Quote requests arriving straight from the site — no more cold enquiries', icon: 'message' },
        { text: 'A website that looks like a real local business, not a template', icon: 'sparkles' },
        { text: 'A direct, visible path to requesting a quote on every screen', icon: 'trending' },
        { text: 'Fast load times across mobile networks', icon: 'mobile' },
      ],
      reflection: [
        'The biggest lesson from Ukrrofing was how much local trust is earned in the first few seconds. Every choice — typography, real imagery, quote-first CTA — pulled in the same direction, and the build stayed short because we said no to anything that didn\u2019t answer "why should I trust you?".',
        'If we were starting again, we would invest even earlier in structured testimonials and job photography — the site frames them well, but the raw material is what makes them land.',
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      gallerySolution: [
        {
          src: '/images/projects/ukrrofing/solution.webp',
          alt: 'Reliable Roofing Installations & Repairs services grid — new roof installation, tile replacement and metal roof repairs in Sydney, Ukrrofing custom Next.js site',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'Services grid — every offering in plain language, quote CTA always in reach.',
        },
      ],
      galleryFeatures: [
        {
          src: '/images/projects/ukrrofing/feature-1.webp',
          alt: 'Roofing materials gallery — Zinc Roofing, Bitumen Membranes and Green Roofing options for Sydney homes, Ukrrofing service website',
          width: 1440,
          height: 720,
        },
        {
          src: '/images/projects/ukrrofing/feature-2.webp',
          alt: 'About Us section with Sydney roofing experience stats — 17K+ roofs installed, 3K+ repairs completed and 8+ years of experience, Ukrrofing',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/ukrrofing/feature-3.webp',
          alt: 'Get in Touch contact form — quote request flow with name, phone, email and message for Ukrrofing Sydney roofing team',
          width: 1440,
          height: 900,
        },
      ],
      galleryMobile: [
        {
          src: '/images/projects/ukrrofing/mobile-1.webp',
          alt: 'Ukrrofing mobile homepage — "Professional Roofing Services in Sydney" hero, custom Next.js site by a Sydney web developer',
          width: 390,
          height: 844,
        },
      ],
      galleryProcess: [
        {
          src: '/images/projects/ukrrofing/process.webp',
          alt: 'Ukrrofing Figma design file — services, materials, testimonials and gallery section layouts for the Sydney roofing site',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'Design file — services, materials, testimonials and gallery layouts.',
        },
      ],
    },
  },
  {
    slug: 't-koldunenko',
    title: 'Tetiana Koldunenko — Artist Portfolio',
    shortTitle: 'Tetiana Koldunenko',
    headline: 'Tetiana Koldunenko — First artwork sold within a month',
    location: 'Sydney, Australia',
    liveUrl: 'https://t-koldunenko.com',
    image: {
      src: '/images/projects/t-koldunenko/card.webp',
      alt: 'Tetiana Koldunenko — custom artist portfolio and shop in Next.js for a Sydney-based Australian botanical painter',
      width: 936,
      height: 650,
    },
    heroImage: {
      src: '/images/projects/t-koldunenko/hero.webp',
      alt: 'Tetiana Koldunenko artist portfolio homepage — bottlebrush and banksia paintings hero with "Meet the Artist" section, custom Next.js portfolio for a Sydney painter',
      width: 1440,
      height: 900,
    },
    meta: {
      role: 'Full-Stack Development & Design Collaboration',
      type: 'Artist Portfolio & Shop',
      year: '2025',
      location: 'Sydney, Australia',
    },
    caseStudy: {
      summary:
        'A custom portfolio and shop for a practising artist — balancing editorial presentation of the work with a usable browsing and purchase experience.',
      overview: {
        what: "A custom-built website presenting Tetiana's artwork, exhibitions and available pieces, with a quiet commerce layer for direct sales.",
        audience:
          'Collectors, curators, gallery contacts and first-time visitors discovering the artist through exhibitions or social channels.',
        goal: 'Present the work with the respect and calm it deserves, while making it easy to explore the catalogue and enquire about or buy a piece.',
      },
      challenge: [
        'Artist websites often fail in one of two directions: overly decorative layouts that compete with the artwork, or barebones grids that reduce the work to thumbnails.',
        'The site had to hold the tone of a considered exhibition space while still functioning as a working catalogue — searchable, updatable and ready for commerce when the artist chose to sell a piece.',
      ],
      solution: [
        'We led with typography and generous whitespace, letting each piece breathe. The grid is quiet; the artwork does the talking.',
        'Commerce is layered in carefully — you notice it only when you want to. Each artwork page moves naturally from presentation to enquiry or purchase without changing the tone of the site.',
      ],
      contributions: [
        {
          title: 'Design collaboration',
          items: [
            'Defined typography and spacing system for an editorial feel',
            'Planned browsing patterns that respect individual pieces',
            'Shaped the tone for exhibitions, artworks and statements',
          ],
        },
        {
          title: 'Development',
          items: [
            'Built the full portfolio, shop and content pages in Next.js',
            'Implemented image-heavy layouts with careful performance work',
            'Created responsive artwork views that hold up on any screen',
          ],
        },
        {
          title: 'Commerce & content',
          items: [
            'Integrated a lightweight store for artwork sales and enquiries',
            'Built an updatable structure for new pieces and exhibitions',
            'Handled SEO for artist discoverability and exhibition archiving',
          ],
        },
      ],
      features: [
        {
          title: 'Artwork browsing',
          description:
            'A calm grid that lets individual pieces stand on their own.',
        },
        {
          title: 'Exhibition archive',
          description:
            'Dedicated pages for past and current exhibitions, with context and supporting imagery.',
        },
        {
          title: 'Artwork detail pages',
          description:
            'Editorial presentation for each piece with medium, year, dimensions and enquiry path.',
        },
        {
          title: 'Quiet commerce',
          description:
            'A shop layer that respects the tone of the site and only appears when relevant.',
        },
        {
          title: 'Statements & about',
          description:
            'Space for artist statements, biography and press without cluttering the main view.',
        },
      ],
      process: [
        {
          title: 'Discovery',
          description:
            'Spent time with the body of work to understand its tone before sketching any structure.',
        },
        {
          title: 'Structure',
          description:
            'Mapped content into work, exhibitions, shop and statements — each with a distinct but related layout.',
        },
        {
          title: 'Design & development',
          description:
            'Built the site in close iteration, tuning spacing, image ratios and type until the rhythm felt right.',
        },
        {
          title: 'Refinement',
          description:
            'Reviewed the experience on real artworks and real devices, not only design mockups.',
        },
        {
          title: 'Launch',
          description:
            'Shipped with an easy path for the artist to add new pieces and exhibitions over time.',
        },
      ],
      outcome: [
        { text: 'First artwork sold through the site within a month of launch', icon: 'trophy' },
        { text: "Portfolio now used as the artist's official link for exhibitions and press enquiries", icon: 'message' },
        { text: 'A portfolio that feels like an exhibition space, not a template', icon: 'palette' },
        { text: 'A catalogue the artist can grow independently', icon: 'check' },
        { text: 'Strong discoverability through clean SEO and metadata', icon: 'search' },
      ],
      reflection: [
        'The hardest part of this project was resisting the pull to design more. Artist sites get ruined by decorative layouts; the real work was subtraction — tuning typography, spacing and image ratios until the work could breathe and the interface disappeared.',
        'What we would keep for future portfolios: lead with the body of work, not a template. What we would change: build the "add a new exhibition" flow even earlier so the artist feels ownership from day one.',
      ],
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Sanity',
        'Stripe',
        'PayPal',
        'Vercel',
      ],
      gallerySolution: [
        {
          src: '/images/projects/t-koldunenko/solution.webp',
          alt: 'Lightbox view of "Fairy-Floss" Corymbia ficifolia acrylic and texture-paste painting by Tetiana Koldunenko, custom Sydney artist portfolio in Next.js',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'Artwork lightbox — generous space so the piece carries the page.',
        },
      ],
      galleryFeatures: [
        {
          src: '/images/projects/t-koldunenko/feature-1.webp',
          alt: 'Original art shop catalogue grid with prices — Tetiana Koldunenko\'s Australian bushland and shore paintings, Sydney artist online shop',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/t-koldunenko/feature-2.webp',
          alt: 'Sanity CMS admin view managing artwork content — Tetiana Koldunenko Sydney artist portfolio built in Next.js with a Sanity-backed shop',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/t-koldunenko/feature-3.webp',
          alt: 'Artwork detail page — "Two Aussie Blues" with description, materials, dimensions and Add to Cart, Tetiana Koldunenko Sydney artist online shop',
          width: 1440,
          height: 900,
        },
      ],
      galleryMobile: [
        {
          src: '/images/projects/t-koldunenko/mobile-1.webp',
          alt: 'Mobile artwork shop catalogue — Tetiana Koldunenko original Australian paintings with prices, Sydney artist portfolio in Next.js',
          width: 390,
          height: 844,
        },
      ],
      galleryProcess: [
        {
          src: '/images/projects/t-koldunenko/process.webp',
          alt: 'Tetiana Koldunenko portfolio design file in Figma — desktop, tablet and mobile portfolio layouts with gallery and lightbox states',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'Portfolio design file — desktop, tablet and mobile layouts with lightbox states.',
        },
      ],
    },
  },
  {
    slug: 'tatacookies',
    title: 'Tatacookies — Handmade Cookies',
    shortTitle: 'Tatacookies',
    headline: 'Tatacookies — 50+ online orders in the first month',
    location: 'Sydney, Australia',
    liveUrl: 'https://tatacookies.com',
    image: {
      src: '/images/projects/tatacookies/card.webp',
      alt: 'Tatacookies — custom Next.js e-commerce website for a handmade gingerbread cookie brand in Sydney, built by a Sydney web developer',
      width: 936,
      height: 650,
    },
    heroImage: {
      src: '/images/projects/tatacookies/hero.webp',
      alt: 'Tatacookies homepage hero — "Smile-worthy cookies" with handcrafted Easter bunny and donut gingerbread sets, custom Next.js e-commerce build in Sydney',
      width: 1440,
      height: 900,
    },
    meta: {
      role: 'Full-Stack Development',
      type: 'Custom E-Commerce',
      year: '2025',
      location: 'Sydney, Australia',
    },
    caseStudy: {
      summary:
        'A full custom website and e-commerce system built from scratch for a handmade cookie brand — brand story, product browsing, checkout, custom orders, admin and transactional emails, all in one build.',
      overview: {
        what: 'A full custom-built website with an integrated storefront: brand pages, product browsing, cart, checkout, custom orders, admin tooling and transactional emails — all designed and developed as one coherent product.',
        audience:
          'Local customers ordering cookies for everyday occasions, and people commissioning custom orders for events and gifts.',
        goal: 'Give the brand a complete digital home that handles everything from first impression to paid order — without losing the handmade, personal tone that makes it recognisable.',
      },
      challenge: [
        'The brand had no real digital home and no way to take orders online. Customers had to DM to buy cookies, which created bottlenecks, missed messages and inconsistent order details.',
        'The new site had to do both jobs at once: introduce the brand properly to first-time visitors and run a working shop end to end — everyday product orders, one-off custom orders, admin tooling and transactional emails — without feeling like a generic e-commerce template.',
      ],
      solution: [
        'We built the full site from scratch as a single product — brand, shop and admin designed together rather than bolted on. Products, cart and checkout are first-class, custom orders have their own structured flow, and the admin side is lean enough to run from a phone.',
        'Brand presentation stays front and centre — the shop reads as part of the experience, not as a separate mode. Every email, confirmation and status message is written in the same voice.',
      ],
      contributions: [
        {
          title: 'Strategy',
          items: [
            'Defined the order model for regular and custom products',
            'Shaped the admin experience for a small team',
            'Planned a single site that covers brand, shop and operations together',
          ],
        },
        {
          title: 'Development',
          items: [
            'Built the full customer-facing storefront in Next.js',
            'Implemented cart, checkout and order summary flows',
            'Created responsive product browsing optimised for mobile',
          ],
        },
        {
          title: 'Backend & integrations',
          items: [
            'Built an order and product management layer',
            'Wired transactional emails for confirmations and updates',
            'Connected payment handling and order status tracking',
          ],
        },
        {
          title: 'Performance & SEO',
          items: [
            'Tuned images, type and layout for fast product browsing',
            'Structured metadata for product discoverability',
            'Applied clean semantic markup across the store',
          ],
        },
      ],
      features: [
        {
          title: 'Product catalogue',
          description:
            'A calm, responsive catalogue that keeps the handmade tone of the brand.',
        },
        {
          title: 'Cart & checkout',
          description:
            'A short, trustworthy checkout flow designed for first-time buyers.',
        },
        {
          title: 'Custom orders',
          description:
            'A dedicated flow for bespoke orders with structured inputs and clear expectations.',
        },
        {
          title: 'Admin tooling',
          description:
            'A lean admin view to manage products, orders and statuses without friction.',
        },
        {
          title: 'Transactional emails',
          description:
            'Order confirmations, updates and receipts written in the brand voice.',
        },
        {
          title: 'Mobile-first browsing',
          description:
            'Optimised for how most customers actually shop — on their phone, quickly.',
        },
      ],
      process: [
        {
          title: 'Discovery',
          description:
            'Studied the existing ordering pain: where DMs broke down and which orders caused the most back-and-forth.',
        },
        {
          title: 'Structure',
          description:
            'Modelled products, custom orders and statuses before writing UI — commerce rewards good data shapes.',
        },
        {
          title: 'Design & development',
          description:
            'Built the shop alongside the admin side so operational needs shaped the customer experience.',
        },
        {
          title: 'Refinement',
          description:
            'Ran real orders through the system end-to-end, fixed the sharp edges, tightened the emails.',
        },
        {
          title: 'Launch',
          description:
            'Shipped quietly with monitoring, then iterated based on real customer behaviour.',
        },
      ],
      outcome: [
        { text: 'Ordering moved fully to the site within 6 weeks — DM-based orders fully retired', icon: 'cart' },
        { text: 'First 50+ online orders processed through the new checkout in the first month', icon: 'trending' },
        { text: 'Clear, structured custom orders that no longer get lost in DMs', icon: 'check' },
        { text: 'A brand-consistent checkout experience, end to end', icon: 'sparkles' },
        { text: 'A small-team-friendly admin the owner runs from her phone', icon: 'mobile' },
      ],
      reflection: [
        'Tatacookies reminded us that a shop is not a separate mode — it is the product. Designing the storefront and the admin together, in the same sprint, is what kept the voice consistent from the homepage down to the order-status email.',
        'If we were doing it again we would prototype the custom-order flow even earlier with real customers. That was the piece that saved the most time once live, and it deserved more attention in the first iteration.',
      ],
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Supabase',
        'PostgreSQL',
        'Supabase Storage',
        'Stripe',
        'PayPal',
        'Email API',
        'Vercel',
      ],
      gallerySolution: [
        {
          src: '/images/projects/tatacookies/solution.webp',
          alt: 'Product detail page — "Hearts Gift Box Cookies" Valentine\'s Day set with quantity, Add to Cart and stock state, Tatacookies custom Next.js shop in Sydney',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'Product page — clear stock state, quantity and Add to Cart in the brand voice.',
        },
      ],
      galleryFeatures: [
        {
          src: '/images/projects/tatacookies/feature-1.webp',
          alt: 'Themed cookie gallery — Alice in Wonderland, Halloween, farm and Harry Potter handmade cookie sets, Tatacookies Sydney',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/tatacookies/feature-2.webp',
          alt: 'Custom Cookie Order Form — bespoke order flow with event theme, date, delivery, budget and inspiration upload, Tatacookies Sydney handmade cookies',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/tatacookies/feature-3.webp',
          alt: 'Shop catalogue with category filters — 31 handmade gingerbread cookie products with free Sydney pick-up, Tatacookies custom Next.js storefront',
          width: 1440,
          height: 900,
        },
      ],
      galleryMobile: [
        {
          src: '/images/projects/tatacookies/mobile-1.webp',
          alt: 'Mobile homepage — "Things we bake" category showcase with carousel, Tatacookies handmade cookies Sydney custom Next.js shop',
          width: 390,
          height: 844,
        },
      ],
      galleryProcess: [
        {
          src: '/images/projects/tatacookies/process.webp',
          alt: 'System flow diagram — Tatacookies storefront and admin flows designed together, custom Next.js commerce build for a Sydney cookie brand',
          width: 1440,
          height: 900,
          span: 'wide',
          caption:
            'Storefront and admin flows — designed together as one product.',
        },
      ],
    },
  },
  {
    slug: 'deluxio',
    title: 'DeLuxio — Nail Studio',
    shortTitle: 'DeLuxio',
    headline: 'DeLuxio — Ranked #1 on Google within 2 months of launch',
    location: 'Sydney, Australia',
    liveUrl: 'https://deluxio.com.au',
    image: {
      src: '/images/projects/deluxio/card.webp',
      alt: 'DeLuxio — custom Next.js one-page website for a premium nail studio in Rockdale, Sydney, built by a Sydney web developer',
      width: 936,
      height: 650,
    },
    heroImage: {
      src: '/images/projects/deluxio/hero.webp',
      alt: 'DeLuxio homepage hero — "Perfect Manicure: Stylish, Quality, Safe" with manicure photo and Book Now CTA, custom Next.js website for a Sydney nail studio',
      width: 1440,
      height: 900,
    },
    meta: {
      role: 'Full-Stack Development & UX',
      type: 'One-Page Landing',
      year: '2024',
      location: 'Sydney, Australia',
    },
    caseStudy: {
      summary:
        'A premium, mobile-first one-page landing for a nail studio — built around visual trust, clear pricing and a frictionless booking direction.',
      overview: {
        what: "A single-page landing site presenting DeLuxio's services, pricing and aesthetic on one focused scroll, with a strong pathway toward booking.",
        audience:
          'Clients choosing a nail studio on their phone, comparing visuals, services and prices within a few minutes.',
        goal: 'Communicate that DeLuxio is a premium, trusted studio — and make booking the obvious next step, all on a single page.',
      },
      challenge: [
        'Nail studio websites often hide pricing, lean on generic stock visuals and bury the booking path. That pattern loses clients who are already on their phone, ready to book somewhere.',
        'The landing had to do the whole job on one page: feel genuinely premium, be honest about services and pricing, and move a visitor from curiosity to booking in a few taps — no deep navigation, no filler pages.',
      ],
      solution: [
        'We designed mobile-first and worked outward. The page opens with a clear identity, moves through services and pricing, and keeps the booking CTA in reach throughout the scroll.',
        'Typography and spacing carry the premium feel; no decorative overload. Every section earns its place on the page, and every tap takes the visitor closer to a booking, not deeper into a menu.',
      ],
      contributions: [
        {
          title: 'UX & strategy',
          items: [
            'Mapped the mobile-first journey from discovery to booking',
            'Designed a transparent service and pricing structure',
            'Prioritised trust-building visuals and details',
          ],
        },
        {
          title: 'Development',
          items: [
            'Built a fully responsive, polished layout',
            'Implemented smooth, subtle transitions that feel premium',
            'Optimised image delivery for phone-first users',
          ],
        },
        {
          title: 'Backend & integrations',
          items: [
            'Built booking enquiry and contact endpoints end to end',
            'Wired transactional email delivery and validation',
            'Configured deployment, DNS and analytics integrations',
          ],
        },
        {
          title: 'SEO & performance',
          items: [
            'Structured metadata for local search visibility',
            'Tuned layout stability and loading experience',
            'Applied semantic markup across every section of the page',
          ],
        },
      ],
      features: [
        {
          title: 'Service catalogue',
          description:
            'Clear service groupings with honest descriptions — no marketing fog.',
        },
        {
          title: 'Transparent pricing',
          description:
            'Pricing visible where it belongs, not hidden behind an enquiry.',
        },
        {
          title: 'Booking direction',
          description:
            'A visible, consistent path toward booking across the entire site.',
        },
        {
          title: 'Visual storytelling',
          description:
            'Studio imagery used with restraint to communicate the premium feel.',
        },
        {
          title: 'Mobile-first layout',
          description:
            'Designed for the device most clients actually choose the studio on.',
        },
      ],
      process: [
        {
          title: 'Discovery',
          description:
            'Understood how clients actually shop for a nail studio and what makes them commit.',
        },
        {
          title: 'Structure',
          description:
            'Kept the site short, focused and honest — no filler pages to pad it out.',
        },
        {
          title: 'Design & development',
          description:
            'Tuned typography, spacing and imagery until the premium feel came through without noise.',
        },
        {
          title: 'Refinement',
          description:
            'Tested the full journey on real phones, not only desktop mockups.',
        },
        {
          title: 'Launch',
          description:
            'Shipped with analytics and a layout the studio can update as services evolve.',
        },
      ],
      outcome: [
        { text: 'Ranked first on Google search within 2 months of launch — and still holding', icon: 'trophy' },
        { text: 'New clients discovering the studio via local Google search', icon: 'search' },
        { text: 'A website that signals "premium" without shouting', icon: 'sparkles' },
        { text: 'Pricing and services a visitor can trust at first glance', icon: 'trust' },
        { text: 'A visible, consistent path toward booking', icon: 'calendar' },
        { text: 'Strong mobile experience across the entire flow', icon: 'mobile' },
      ],
      reflection: [
        'DeLuxio proved how much a one-page site can carry when every section earns its place. The discipline was in what we left out — no carousel, no decorative sections, no hidden pricing. What stayed was everything a client needs to choose a studio on their phone.',
        'Next time we would bring the booking integration in even tighter from the start. The "direction to booking" works beautifully; an in-page booking step would shave the final friction.',
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      galleryFeatures: [
        {
          src: '/images/projects/deluxio/feature-1.webp',
          alt: 'Location and working hours section — "Conveniently located in Sydney" with Rockdale map and weekly schedule, DeLuxio nail studio website',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/deluxio/feature-2.webp',
          alt: 'Nail care advice section — "Do I need to take breaks from gel?" editorial card with manicure photo, DeLuxio Sydney nail studio',
          width: 1440,
          height: 900,
        },
        {
          src: '/images/projects/deluxio/feature-3.webp',
          alt: 'Client testimonials section — five-star reviews from Instagram, Google and Fresha for DeLuxio nail studio in Sydney',
          width: 1440,
          height: 900,
        },
      ],
      gallerySolution: [
        {
          src: '/images/projects/deluxio/solution.webp',
          alt: 'Services and transparent pricing page — manicure, pedicure and brows & lashes with prices and Book Now CTA, DeLuxio nail studio Sydney',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'Services and pricing — transparent, grouped, with Book Now within reach.',
        },
      ],
      galleryMobile: [
        {
          src: '/images/projects/deluxio/mobile-1.webp',
          alt: 'Mobile menu and contacts panel with Book Now CTA — DeLuxio nail studio in Rockdale, Sydney, custom Next.js one-page site',
          width: 390,
          height: 844,
        },
        {
          src: '/images/projects/deluxio/mobile-2.webp',
          alt: 'Mobile Brows & Lashes service section — eyebrow lamination card with pricing and Book Now CTA, DeLuxio Sydney nail studio',
          width: 390,
          height: 844,
        },
      ],
      galleryProcess: [
        {
          src: '/images/projects/deluxio/process.webp',
          alt: 'Responsive design file — desktop, tablet and mobile layouts with menu-open states, DeLuxio Sydney nail studio one-page site in Figma',
          width: 1440,
          height: 900,
          span: 'wide',
          caption: 'Design file — desktop, tablet and mobile layouts with menu states.',
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const nextIndex = index === -1 ? 0 : (index + 1) % PROJECTS.length;
  return PROJECTS[nextIndex];
}

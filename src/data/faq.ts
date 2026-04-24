export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: 'How much does a custom website cost?',
    answer:
      'A conversion-focused landing page starts from $1,500, a multi-page business website from $3,000, and a full custom e-commerce setup from $5,000. Every package includes UI/UX design in Figma plus custom-coded development — no templates or page builders. A fixed quote is confirmed once the scope is clear.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'A landing page usually takes 2–3 weeks, a multi-page business site 4–6 weeks, and a custom e-commerce build 6–10 weeks end to end — design, development, reviews and launch. Timelines depend on how quickly content and feedback come through on your side.',
  },
  {
    question: 'Do you work with clients outside Sydney or overseas?',
    answer:
      'Yes. Based in Sydney, Australia, but working with clients across Australia, the US, UK and Europe. Everything runs over email, video calls and shared design files, so location is not a blocker. Sydney clients can also meet in person if preferred.',
  },
  {
    question: "What's included in the price — design, development, hosting?",
    answer:
      'Every package includes UI/UX design, custom front-end development, SEO foundations, analytics setup, performance tuning and launch. Hosting (Vercel) and the domain are typically set up on your own accounts so you stay in full control. Ongoing maintenance is available as a separate arrangement.',
  },
  {
    question: 'Do I get the code and design files at the end?',
    answer:
      'Yes. The codebase is handed over on a repository you own, and the Figma design files are shared with your team. You keep full ownership of everything the project produces — no lock-in and no proprietary builder.',
  },
  {
    question: 'Why not just use Squarespace, Wix or a template?',
    answer:
      'Templates are faster upfront but harder to grow with — slower load times, generic layouts, and limits on what you can customise. A custom build is faster, ranks better in Google, and is shaped around how your specific business actually converts visitors into customers.',
  },
  {
    question: 'Can you redesign or rebuild an existing website?',
    answer:
      'Yes — redesigns and rebuilds are a big part of the work. It usually starts with a short audit of what is and is not working on the current site, followed by a focused redesign that keeps the parts that perform and fixes the parts that do not.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. Every site ships with a short post-launch window for adjustments, and longer-term support can be arranged for content updates, new sections, integrations or performance improvements. Most clients stay in touch for ongoing work.',
  },
];

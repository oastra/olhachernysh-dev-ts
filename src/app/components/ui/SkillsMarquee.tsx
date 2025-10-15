'use client';

import Image from 'next/image';
import Script from 'next/script';
import { motion, useReducedMotion } from 'framer-motion';

const logos = [
  { src: '/logos/css-logo.svg', name: 'CSS3' },
  { src: '/logos/expressjs-logo.svg', name: 'Express.js' },
  { src: '/logos/framer-logo.svg', name: 'Framer' },
  { src: '/logos/git-logo.svg', name: 'Git' },
  { src: '/logos/html5-logo.svg', name: 'HTML5' },
  { src: '/logos/js-logo.svg', name: 'JavaScript' },
  { src: '/logos/mongoDB-logo.svg', name: 'MongoDB' },
  { src: '/logos/mysql-logo.svg', name: 'MySQL' },
  { src: '/logos/next-logo.svg', name: 'Next.js' },
  { src: '/logos/node-logo.svg', name: 'Node.js' },
  { src: '/logos/npmjs-logo.svg', name: 'npm' },
  { src: '/logos/postgresql-logo.svg', name: 'PostgreSQL' },
  { src: '/logos/pugjs-logo.svg', name: 'Pug' },
  { src: '/logos/react-logo.svg', name: 'React' },
  { src: '/logos/tailwind-css-logo.svg', name: 'Tailwind CSS' },
  { src: '/logos/typeScript-logo.svg', name: 'TypeScript' },
  { src: '/logos/vitejs-logo.svg', name: 'Vite' },
];

function Track({ duration = 40 }: { duration?: number }) {
  return (
    <motion.div
      className="flex w-max shrink-0 items-center gap-12"
      animate={{ x: ['0%', '-100%'] }} // seamless loop (list is duplicated)
      transition={{
        duration,
        ease: 'linear',
        repeatType: 'loop',
        repeat: Infinity,
      }}
      style={{
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
        maskImage:
          'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
      }}
    >
      {[...logos, ...logos].map((l, i) => (
        <Image
          key={`${l.src}-${i}`}
          src={l.src}
          alt="" // decorative; SEO handled below
          aria-hidden="true"
          width={120}
          height={40}
          className="h-8 w-auto object-contain"
          priority={i < 6}
        />
      ))}
    </motion.div>
  );
}

export default function SkillsMarquee() {
  const reduce = useReducedMotion();

  const seoSentence =
    'Technologies I use: React, Next.js, TypeScript, JavaScript, Node.js, Express.js, PostgreSQL, MySQL, MongoDB, Tailwind CSS, Vite, Git, HTML5, CSS3, Framer, and Pug.';

  // Optional JSON‑LD to reinforce skills (tweak "@id", "name", "url" as needed)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://olhachernysh.dev/#me',
    name: 'Olha Chernysh',
    url: 'https://olhachernysh.dev/',
    jobTitle: 'Frontend Developer',
    knowsAbout: logos.map((l) => l.name),
  };

  return (
    <section className="relative overflow-hidden py-6">
      {/* A11y + SEO */}
      <h2 className="sr-only">Technologies I work with</h2>
      <p className="sr-only">{seoSentence}</p>
      <Script
        id="skills-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {reduce ? (
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-[20px] md:gap-[62px]">
          {logos.map((l, i) => (
            <div
              key={`${l.src}-static-${i}`}
              className="h-[80px] w-[200px] flex items-center justify-center shrink-0"
            >
              <Image
                src={l.src}
                alt=""
                aria-hidden="true"
                width={220} // match w-32 (or 112 for w-28)
                height={80} // match h-12 (or 40 for h-10)
                className="max-h-full max-w-full object-contain"
                priority={i < 6}
              />
            </div>
          ))}
        </div>
      ) : (
        <Track duration={90} /> /* single, slow, infinite line */
      )}{' '}
    </section>
  );
}

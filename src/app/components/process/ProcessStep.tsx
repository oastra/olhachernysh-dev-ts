'use client';

import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: string;
  title: string;
  bullets: string[];
  layout: 'desktop' | 'tablet' | 'mobile';
}

export default function ProcessStep({
  number,
  title,
  bullets,
  layout,
}: ProcessStepProps) {
  const getLayoutStyles = () => {
    switch (layout) {
      case 'desktop':
        return {
          container: 'flex flex-col justify-start items-start gap-4 w-full',
          header: 'w-full flex justify-start items-center gap-[19px]',
          number: 'text-[20px] font-medium leading-[22px] text-ink ',
          title: 'text-h3-desktop text-ink',
          description:
            'text-body text-ink/75 max-w-[603px] whitespace-pre-line',
        };
      case 'tablet':
        return {
          container:
            'w-full max-w-[523px] flex flex-col justify-start items-start gap-4',
          header: 'w-full flex justify-start items-center gap-[19px]',
          number: 'text-[20px] font-medium leading-[22px] text-ink',
          title: 'text-h3-desktop text-ink',
          description:
            'text-body text-ink/75 max-w-[548px] whitespace-pre-line',
        };
      case 'mobile':
        return {
          container: 'w-full flex flex-col justify-start items-start gap-4',
          header: 'w-full flex justify-start items-center gap-[10px]',
          number: 'text-[14px] font-medium leading-[15.4px] text-ink',
          title: 'text-h3-subheading text-ink',
          description:
            'w-full max-w-[316px] text-body-mobile text-ink/75 whitespace-pre-line',
        };
      default:
        return {
          container: 'flex flex-col gap-4',
          header: 'flex items-center gap-4',
          number: 'font-medium text-ink justify-center',
          title: 'font-medium text-ink',
          description: 'text-ink/75',
        };
    }
  };

  const styles = getLayoutStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0% -10% 0%' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={styles.container}
    >
      {/* Header with number and title */}
      <div className={styles.header}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>

      {/* Bullets as formatted text */}
      <div className={styles.description}>
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

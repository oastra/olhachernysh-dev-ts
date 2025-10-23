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
          container:
            'flex flex-col justify-start items-start w-full gap-[12px]',
          header: 'w-full flex justify-start items-center gap-[20px]',
          number: 'text-[20px] font-medium text-ink leading-[22px]',
          title: 'text-[32px] font-medium text-ink leading-[35.2px]',
          bulletList: 'list-disc pl-[20px] space-y-[4px] marker:text-ink/75',
          bulletItem: 'text-[16px] leading-[24px] text-ink/75',
        };
      case 'tablet':
        return {
          container:
            'w-full max-w-[523px] flex flex-col justify-start items-start gap-[12px]',
          header: 'w-full flex justify-start items-center gap-[19px]',
          number: 'text-[20px] font-medium leading-[22px] text-ink',
          title: 'text-[32px] font-medium leading-[35.2px] text-ink',
          bulletList: 'list-disc pl-[20px] space-y-[4px] marker:text-ink/75',
          bulletItem: 'text-[16px] leading-[24px] text-ink/75',
        };
      case 'mobile':
        return {
          container:
            'w-full flex flex-col justify-start items-start gap-[12px]',
          header: 'w-full flex justify-start items-center gap-[10px]',
          number: 'text-[14px] font-medium leading-[15.4px] text-ink',
          title: 'text-[18px] font-medium leading-[19.8px] text-ink',
          bulletList: 'list-disc pl-[16px] space-y-[4px] marker:text-ink/75',
          bulletItem: 'text-[14px] leading-[21px] text-ink/75',
        };
      default:
        return {
          container: 'flex flex-col gap-[12px]',
          header: 'flex items-center gap-[20px]',
          number: 'font-medium text-ink',
          title: 'font-medium text-ink',
          bulletList: 'list-disc pl-[20px] space-y-[4px]',
          bulletItem: 'text-ink/75',
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

      {/* Bullets */}
      <ul className={styles.bulletList}>
        {bullets.map((b, i) => (
          <li key={i} className={styles.bulletItem}>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

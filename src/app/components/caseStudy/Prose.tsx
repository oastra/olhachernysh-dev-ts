import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  paragraphs: string[];
  className?: string;
  children?: ReactNode;
};

/**
 * Simple multi-paragraph body block — keeps Challenge / Solution copy calm.
 */
export default function Prose({ paragraphs, className, children }: Props) {
  return (
    <div
      className={clsx(
        'max-w-[820px] flex flex-col gap-6 text-body text-ink',
        className,
      )}
    >
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {children}
    </div>
  );
}

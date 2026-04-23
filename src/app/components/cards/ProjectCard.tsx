'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import clsx from 'clsx';
import type { Project } from '@/types/project';

type Props = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: Props) {
  const id = useId();
  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <article className={clsx('group', className)}>
      {/* Device-like frame — whole area is tappable (mobile) and hover-reveals CTA (desktop) */}
      <Link
        href={caseStudyHref}
        aria-labelledby={`proj-${id}-title`}
        className="relative block max-h-[470px] lg:max-h-[582px] rounded-[28px] md:rounded-[50px] bg-portfolio-gradient shadow-sm overflow-hidden px-6 pt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-blue/60"
      >
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

        {/* Main image */}
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="w-full h-auto select-none rounded-[5px] group-hover:blur-[2px]"
          priority={false}
        />

        {/* circular CTA — decorative, revealed on hover (desktop) */}
        <span
          aria-hidden="true"
          className={clsx(
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-20 h-20 md:w-[120px] md:h-[120px]',
            'btn-circle-cta flex items-center justify-center',
            'opacity-0 group-hover:opacity-100 transition-all duration-300 z-10',
            'group-hover:scale-105',
          )}
        >
          <IconArrowUpRight
            className="w-8 h-8 md:w-[76px] md:h-[76px] text-white"
            strokeWidth={1.1}
          />
        </span>
      </Link>

      {/* Meta */}
      <div className="mt-6 pl-8">
        {project.status === 'in-development' && (
          <span className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-main-blue/30 text-main-blue text-[11px] font-medium uppercase tracking-[0.08em]">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-main-blue/50 animate-ping" />
              <span className="relative rounded-full w-1.5 h-1.5 bg-main-blue" />
            </span>
            In development
          </span>
        )}
        <h3 id={`proj-${id}-title`} className="text-h3-subheading text-ink">
          <Link
            href={caseStudyHref}
            className="hover:text-main-blue transition-colors"
          >
            {project.title}
          </Link>
        </h3>
        {project.location && (
          <p className="text-gray-custom text-body">{project.location}</p>
        )}
      </div>
    </article>
  );
}

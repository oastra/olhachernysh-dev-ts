'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import clsx from 'clsx';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import { Project } from '@/types/project';

type Props = {
  project: Project;
};

export default function NextProject({ project }: Props) {
  const id = useId();
  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <SectionWrapper id="next-project" size="default">
      <SectionTitle right="Keep exploring recent work.">
        Next project
      </SectionTitle>

      <article className="group max-w-[720px] mb-16 md:mb-0">
        <div className="relative max-h-[470px] lg:max-h-[582px] rounded-[28px] md:rounded-[50px] bg-portfolio-gradient shadow-sm overflow-hidden px-6 pt-8">
          <div className="absolute inset-0 bg-gradient-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 768px) 100vw, 720px"
            quality={90}
            className="w-full h-auto select-none rounded-[5px] group-hover:blur-[2px]"
          />

          <Link
            href={caseStudyHref}
            aria-labelledby={`next-${id}-title`}
            className={clsx(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              'w-20 h-20 md:w-[120px] md:h-[120px]',
              'btn-circle-cta flex items-center justify-center',
              'opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10',
              'transition-transform group-hover:scale-105 focus:scale-105 focus-visible:outline-none',
            )}
          >
            <IconArrowUpRight
              className="w-8 h-8 md:w-[76px] md:h-[76px] text-white"
              strokeWidth={1.1}
            />
          </Link>
        </div>

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
          <h3 id={`next-${id}-title`} className="text-h3-subheading text-ink">
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
    </SectionWrapper>
  );
}

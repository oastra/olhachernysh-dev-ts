import Image from 'next/image';
import Link from 'next/link';
import { IconArrowUpRight, IconArrowLeft } from '@tabler/icons-react';
import SectionWrapper from '../common/SectionWrapper';
import MetaGrid from './MetaGrid';
import { Project } from '@/types/project';

type Props = {
  project: Project;
};

export default function CaseStudyHero({ project }: Props) {
  return (
    <SectionWrapper id="case-study-hero" size="default">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-h6 text-ink/60 hover:text-main-blue transition-colors"
      >
        <IconArrowLeft size={16} stroke={2} />
        Back to projects
      </Link>

      <div className="mt-8 lg:mt-12 flex flex-col gap-6 lg:gap-8 max-w-[1100px]">
        {project.status === 'in-development' && (
          <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full border border-main-blue/30 text-main-blue text-[12px] font-medium uppercase tracking-[0.1em]">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-main-blue/50 animate-ping" />
              <span className="relative rounded-full w-1.5 h-1.5 bg-main-blue" />
            </span>
            In development
          </span>
        )}
        <h1 className="text-h1 text-ink">{project.title}</h1>
        <p className="text-h4-mobile-subheading md:text-h3-subheading text-ink/70 max-w-[820px]">
          {project.caseStudy.summary}
        </p>
      </div>

      <div className="mt-10 lg:mt-14">
        <MetaGrid meta={project.meta} />
      </div>

      {(() => {
        const hero = project.heroImage ?? project.image;
        return (
          <div className="mt-10 lg:mt-14 rounded-[28px] md:rounded-[40px] bg-portfolio-gradient p-6 md:p-10 lg:p-14">
            <div className="rounded-[16px] md:rounded-[24px] bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] overflow-hidden">
              <Image
                src={hero.src}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1300px"
                quality={90}
                className="w-full h-auto select-none"
                priority
              />
            </div>
          </div>
        );
      })()}

      {project.status !== 'in-development' && (
        <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 items-start">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.shortTitle} live site`}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-[18px] leading-[19.8px] font-display font-normal text-[#091A84] rounded-[35px] bg-[rgba(95,160,255,0.37)] hover:bg-main-gradient hover:text-white transition-all duration-300 focus:outline-none"
          >
            View Live Project
            <IconArrowUpRight
              size={20}
              stroke={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <span className="text-h6 text-ink/55 sm:self-center sm:pl-2">
            {project.liveUrl.replace(/^https?:\/\//, '')}
          </span>
        </div>
      )}
    </SectionWrapper>
  );
}

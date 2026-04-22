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
      {/* Back link — subtle, matches site's link treatment */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-h6 text-ink/60 hover:text-main-blue transition-colors"
      >
        <IconArrowLeft size={16} stroke={2} />
        All projects
      </Link>

      {/* Title + summary */}
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
        <p className="text-h4-mobile-subheading md:text-h3-subheading text-gray-custom max-w-[820px]">
          {project.caseStudy.summary}
        </p>
      </div>

      {/* Meta grid */}
      <div className="mt-10 lg:mt-14">
        <MetaGrid meta={project.meta} />
      </div>

      {/* Visual — device-frame style, same DNA as ProjectCard */}
      <div className="mt-10 lg:mt-16 relative rounded-[28px] md:rounded-[50px] bg-portfolio-gradient shadow-sm overflow-hidden px-6 pt-8 md:px-10 md:pt-12">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 95vw, 1400px"
          quality={90}
          className="w-full h-auto select-none rounded-[5px]"
          priority
        />
      </div>

      {/* Live site CTA */}
      {project.status !== 'in-development' && (
        <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 items-start">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.shortTitle} live site`}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-full btn-primary text-[18px] leading-[19.8px] font-display transition-all duration-300"
          >
            Visit live site
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

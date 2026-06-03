import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import SectionWrapper from '../../common/SectionWrapper';
import MetaGrid from '../MetaGrid';
import SlotImage from '../SlotImage';
import type { Project, ProgressContent } from '@/types/project';

type Props = {
  project: Project;
  progress: ProgressContent;
};

export default function ProgressHero({ project, progress }: Props) {
  const hero = project.heroImage ?? project.image;

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
        <div className="flex flex-wrap items-center gap-3">
          <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full border border-main-blue/30 text-main-blue text-[12px] font-medium uppercase tracking-[0.1em]">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-main-blue/50 animate-ping" />
              <span className="relative rounded-full w-1.5 h-1.5 bg-main-blue" />
            </span>
            In development
          </span>
          <span className="self-start inline-flex items-center px-3 py-1 rounded-full bg-main-blue/10 text-main-blue text-[12px] font-medium uppercase tracking-[0.1em]">
            Currently: {progress.currentPhase}
          </span>
        </div>
        <h1 className="text-h1 text-ink">{project.title}</h1>
        <p className="text-h4-mobile-subheading md:text-h3-subheading text-ink/70 max-w-[820px]">
          {progress.summary}
        </p>
      </div>

      <div className="mt-10 lg:mt-14">
        <MetaGrid meta={project.meta} />
      </div>

      <div className="mt-10 lg:mt-14 rounded-[28px] md:rounded-[40px] bg-portfolio-gradient p-6 md:p-10 lg:p-14">
        <div className="relative rounded-[16px] md:rounded-[24px] bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] overflow-hidden min-h-[260px] md:min-h-[420px]">
          <SlotImage
            src={hero.src}
            alt={hero.alt}
            placeholderLabel="Design preview"
            className="block w-full h-auto select-none"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';
import SectionWrapper from '../common/SectionWrapper';
import { Project } from '@/types/project';

type Props = {
  project: Project;
};

export default function NextProject({ project }: Props) {
  return (
    <SectionWrapper id="next-project" size="default">
      <Link
        href={`/projects/${project.slug}`}
        className="group block"
        aria-label={`Next project: ${project.title}`}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between pb-[22px] lg:pb-[32px] mb-[28px] lg:mb-[48px] border-b-2 border-main-blue/10">
          <div className="flex items-baseline gap-4">
            <span className="text-h6 text-main-blue/50 tracking-wide">
              Next project
            </span>
          </div>
          <span className="inline-flex items-center gap-2 text-body text-main-blue group-hover:text-ink transition-colors">
            View case study
            <IconArrowUpRight
              size={18}
              stroke={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center">
          <div className="relative rounded-[28px] md:rounded-[50px] bg-portfolio-gradient shadow-sm overflow-hidden px-6 pt-8">
            <div className="absolute inset-0 bg-gradient-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(max-width: 1024px) 100vw, 700px"
              quality={90}
              className="w-full h-auto select-none rounded-[5px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-h2 text-ink">{project.shortTitle}</h2>
            <p className="text-body text-ink/70 max-w-[560px]">
              {project.caseStudy.summary}
            </p>
          </div>
        </div>
      </Link>
    </SectionWrapper>
  );
}

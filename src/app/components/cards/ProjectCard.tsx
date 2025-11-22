'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import clsx from 'clsx';

export type Project = {
  title: string;
  location?: string;
  href: string;
  image: { src: string; alt: string; width: number; height: number };
};

type Props = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: Props) {
  const id = useId();

  return (
    <article className={clsx('group', className)}>
      {/* Device-like frame */}
      <div className="relative max-h-[470px] lg:max-h-[582px] rounded-[28px] md:rounded-[50px] bg-portfolio-gradient shadow-sm overflow-hidden px-6 pt-8">
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

        {/* circular CTA — hidden until hover */}
        <Link
          href={project.href}
          target="_blank"
          aria-labelledby={`proj-${id}-title`}
          className={clsx(
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-20 h-20 md:w-[120px] md:h-[120px]',
            'btn-circle-cta flex items-center justify-center',
            'opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10',
            'transition-transform group-hover:scale-105 focus:scale-105 focus-visible:outline-none'
          )}
        >
          <IconArrowUpRight
            className="w-8 h-8 md:w-[76px] md:h-[76px] text-white"
            strokeWidth={1.1}
          />
        </Link>
      </div>

      {/* Meta */}
      <div className="mt-6 pl-8">
        <h3 id={`proj-${id}-title`} className="text-h3-subheading text-ink">
          {project.title}
        </h3>
        {project.location && (
          <p className="text-gray-custom text-body">{project.location}</p>
        )}
      </div>
    </article>
  );
}

'use client';

import SectionWrapper from '@/app/components/common/SectionWrapper';
import SectionTitle from '@/app/components/common/SectionTitle';
import ProjectCard from '@/app/components/cards/ProjectCard';
import { PROJECTS } from '@/data/projects';

// Swiper (mobile/tablet)
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" size="default">
      <SectionTitle right="Discover more of our standout work.">
        Recent Projects
      </SectionTitle>

      {/* Mobile + tablet: swipeable carousel */}
      <div className="xl:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.08}
          breakpoints={{
            480: { slidesPerView: 1.08, spaceBetween: 16 },
            540: { slidesPerView: 1.2, spaceBetween: 20 },
            640: { slidesPerView: 1.5, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 2.6, spaceBetween: 32 },
          }}
        >
          {PROJECTS.map((p) => (
            <SwiperSlide key={p.title}>
              <div className="h-full">
                <ProjectCard project={p} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop (xl+): 3-column grid */}
      <div className="hidden xl:grid gap-10 md:gap-12 xl:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </SectionWrapper>
  );
}

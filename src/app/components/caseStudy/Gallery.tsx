import Image from 'next/image';
import SectionWrapper from '../common/SectionWrapper';
import { CaseStudyGalleryItem } from '@/types/project';

type Props = {
  items: CaseStudyGalleryItem[];
  id?: string;
};

/**
 * Gallery strip — shows additional project screenshots between sections.
 * Each item can span "wide" (full width) or "half" (pairs up in a 2-column grid).
 * Reuses the same bg-portfolio-gradient device frame as the hero / ProjectCard.
 */
export default function Gallery({ items, id }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <SectionWrapper id={id} size="default">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {items.map((item) => {
          const span = item.span ?? 'wide';
          return (
            <figure
              key={item.src}
              className={[
                'flex flex-col gap-3',
                span === 'wide' ? 'md:col-span-2' : 'md:col-span-1',
              ].join(' ')}
            >
              <div className="relative rounded-[28px] md:rounded-[50px] bg-portfolio-gradient shadow-sm overflow-hidden px-4 pt-6 md:px-8 md:pt-10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes={
                    span === 'wide'
                      ? '(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1400px'
                      : '(max-width: 768px) 100vw, (max-width: 1440px) 46vw, 700px'
                  }
                  quality={90}
                  className="w-full h-auto select-none rounded-[5px]"
                />
              </div>
              {item.caption && (
                <figcaption className="text-h6 text-ink/55 pl-2 md:pl-6">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

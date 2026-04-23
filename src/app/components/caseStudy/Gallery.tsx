import Image from 'next/image';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import { CaseStudyGalleryItem } from '@/types/project';
import { autoSpan } from '@/utils/gallerySpans';

type Props = {
  items: CaseStudyGalleryItem[];
  id?: string;
};

export default function Gallery({ items, id }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <SectionWrapper id={id} size="default">
      <SectionTitle right="Working files — flows, structure and the thinking behind every screen.">
        Design exploration
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {items.map((item, i) => {
          const span = item.span ?? autoSpan(i, items.length);
          return (
            <figure
              key={item.src}
              className={[
                'flex flex-col gap-3',
                span === 'wide' ? 'md:col-span-2' : 'md:col-span-1',
              ].join(' ')}
            >
              <div className="rounded-[30px] md:rounded-[40px] bg-portfolio-gradient shadow-sm p-4 md:p-6">
                <div
                  className={[
                    'relative rounded-[20px] md:rounded-[28px] bg-white overflow-hidden shadow-[0_16px_40px_-20px_rgba(0,0,0,0.15)]',
                    span === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]',
                  ].join(' ')}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={
                      span === 'wide'
                        ? '(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1300px'
                        : '(max-width: 768px) 100vw, (max-width: 1440px) 46vw, 650px'
                    }
                    quality={90}
                    className="object-cover select-none"
                  />
                </div>
              </div>
              {item.caption && (
                <figcaption className="text-h6 text-ink/55 pl-2 md:pl-4">
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

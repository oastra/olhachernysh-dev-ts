import Image from 'next/image';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import { CaseStudyGalleryItem } from '@/types/project';

type Props = {
  items?: CaseStudyGalleryItem[];
  id?: string;
};

export default function FeatureGallery({ items, id }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <SectionWrapper id={id} size="default">
      <SectionTitle right="Screens that tell the product story — scroll through the highlights.">
        Gallery
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
              <div className="bg-ink/[0.04] rounded-[24px] md:rounded-[32px] p-4 md:p-6">
                <div className="bg-white rounded-[12px] md:rounded-[18px] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes={
                      span === 'wide'
                        ? '(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1300px'
                        : '(max-width: 768px) 100vw, (max-width: 1440px) 46vw, 650px'
                    }
                    quality={90}
                    className="w-full h-auto select-none"
                  />
                </div>
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

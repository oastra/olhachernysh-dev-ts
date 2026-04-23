import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import SlotImage from './SlotImage';

type Props = {
  slug: string;
  shortTitle: string;
  id?: string;
};

const SLOT_COUNT = 4;

export default function MobileGallery({ slug, shortTitle, id }: Props) {
  return (
    <SectionWrapper id={id} size="default">
      <SectionTitle right="Mobile-first layouts tuned for every breakpoint.">
        Mobile View
      </SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {Array.from({ length: SLOT_COUNT }, (_, i) => {
          const n = i + 1;
          return (
            <figure
              key={`mobile-${n}`}
              className="rounded-[28px] md:rounded-[36px] bg-portfolio-gradient shadow-sm p-3 md:p-4"
            >
              <div className="relative aspect-[9/19] rounded-[20px] md:rounded-[28px] bg-white overflow-hidden shadow-[0_16px_40px_-20px_rgba(0,0,0,0.15)]">
                <SlotImage
                  src={`/images/projects/${slug}/mobile-${n}.webp`}
                  alt={`${shortTitle} — mobile view ${n}`}
                  placeholderLabel={`Mobile ${n}`}
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  objectPosition="top"
                />
              </div>
            </figure>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

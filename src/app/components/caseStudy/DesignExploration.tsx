import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import SlotImage from './SlotImage';

type Props = {
  slug: string;
  shortTitle: string;
  id?: string;
  caption?: string;
};

export default function DesignExploration({ slug, shortTitle, id, caption }: Props) {
  return (
    <SectionWrapper id={id} size="default">
      <SectionTitle right="Working files — flows, structure and the thinking behind every screen.">
        Design exploration
      </SectionTitle>

      <figure className="flex flex-col gap-3">
        <div className="rounded-[24px] md:rounded-[32px] bg-ink/[0.04] p-4 md:p-8">
          <div className="relative rounded-[12px] md:rounded-[18px] bg-white shadow-[0_16px_40px_-20px_rgba(0,0,0,0.15)] overflow-hidden min-h-[260px]">
            <SlotImage
              src={`/images/projects/${slug}/process.webp`}
              alt={`${shortTitle} — design exploration`}
              placeholderLabel="Design file"
              className="block w-full h-auto select-none"
            />
          </div>
        </div>
        {caption && (
          <figcaption className="text-h6 text-ink/55 pl-2 md:pl-6">
            {caption}
          </figcaption>
        )}
      </figure>
    </SectionWrapper>
  );
}

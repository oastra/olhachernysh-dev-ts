import { CaseStudyFeature } from '@/types/project';

type Props = {
  features: CaseStudyFeature[];
};

export default function FeatureList({ features }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-12">
      {features.map((feature) => (
        <li key={feature.title} className="flex flex-col gap-3 max-w-[520px]">
          <h3 className="text-h3-subheading text-ink">{feature.title}</h3>
          <p className="text-body text-ink/75">{feature.description}</p>
        </li>
      ))}
    </ul>
  );
}

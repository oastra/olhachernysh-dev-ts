import { CaseStudyOverview } from '@/types/project';

type Props = {
  overview: CaseStudyOverview;
};

const ITEMS: Array<{ key: keyof CaseStudyOverview; label: string }> = [
  { key: 'what', label: 'What' },
  { key: 'audience', label: 'Audience' },
  { key: 'goal', label: 'Goal' },
];

export default function OverviewGrid({ overview }: Props) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
      {ITEMS.map(({ key, label }) => (
        <div key={key} className="flex flex-col gap-4">
          <h3 className="text-h3-subheading text-ink font-semibold">{label}</h3>
          <p className="text-body text-ink/80">{overview[key]}</p>
        </div>
      ))}
    </div>
  );
}

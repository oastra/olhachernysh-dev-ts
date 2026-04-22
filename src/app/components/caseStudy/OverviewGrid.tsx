import { CaseStudyOverview } from '@/types/project';

type Props = {
  overview: CaseStudyOverview;
};

const ITEMS: Array<{ key: keyof CaseStudyOverview; label: string }> = [
  { key: 'what', label: 'What it is' },
  { key: 'audience', label: 'Who it\u2019s for' },
  { key: 'goal', label: 'Main goal' },
];

export default function OverviewGrid({ overview }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
      {ITEMS.map(({ key, label }) => (
        <div key={key} className="flex flex-col gap-3">
          <span className="text-h6 text-main-blue uppercase tracking-wide">
            {label}
          </span>
          <p className="text-body text-ink">{overview[key]}</p>
        </div>
      ))}
    </div>
  );
}

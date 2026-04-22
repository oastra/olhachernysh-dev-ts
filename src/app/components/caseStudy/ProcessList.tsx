import { CaseStudyProcessStep } from '@/types/project';

type Props = {
  steps: CaseStudyProcessStep[];
};

export default function ProcessList({ steps }: Props) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 md:grid-cols-[80px_1fr_2fr] md:gap-x-12 lg:gap-x-20 py-7 lg:py-8 border-t-2 first:border-t-0 border-main-blue/10 last:border-b-2"
        >
          <span className="text-h6 text-main-blue/60 pt-2 md:pt-3">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="text-h3-subheading text-ink">{step.title}</h3>
          <p className="col-start-2 md:col-start-3 text-body text-ink/75 md:pt-1">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

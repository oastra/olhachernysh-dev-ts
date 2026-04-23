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
          className="grid grid-cols-[64px_1fr] md:grid-cols-[88px_1fr] gap-x-4 md:gap-x-6 py-8 lg:py-10 border-t border-ink/10 first:border-t-0"
        >
          <span className="text-h3-subheading text-ink/40 font-normal pt-[2px]">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-col gap-3 max-w-[760px]">
            <h3 className="text-h3-subheading text-ink font-semibold">
              {step.title}
            </h3>
            <p className="text-body text-ink/70">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

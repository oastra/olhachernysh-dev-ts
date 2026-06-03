import clsx from 'clsx';
import { IconStar, IconBulb, IconCircleCheck } from '@tabler/icons-react';
import type { ProgressDecision } from '@/types/project';

type Props = {
  decisions: ProgressDecision[];
};

const STATE_LABEL: Record<NonNullable<ProgressDecision['state']>, string> = {
  open: 'Still deciding',
  recommended: 'Recommendation made',
  decided: 'Decided',
};

export default function DecisionList({ decisions }: Props) {
  return (
    <div className="flex flex-col gap-12">
      {decisions.map((decision) => (
        <div key={decision.title} className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-h3-subheading text-ink font-semibold">
              {decision.title}
            </h3>
            {decision.state && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-main-blue/30 text-main-blue text-[11px] font-medium uppercase tracking-[0.08em]">
                {STATE_LABEL[decision.state]}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {decision.options.map((option) => (
              <div
                key={option.name}
                className={clsx(
                  'relative rounded-[20px] border p-6 flex flex-col gap-3',
                  option.chosen || option.recommended
                    ? 'border-main-blue/40 bg-main-blue/[0.04]'
                    : 'border-ink/12 bg-white',
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-h4 text-ink font-semibold">
                    {option.name}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {option.recommended && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-main-blue/40 text-main-blue text-[11px] font-medium uppercase tracking-[0.08em]">
                        <IconStar size={12} stroke={2.5} />
                        Our pick
                      </span>
                    )}
                    {option.chosen && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-main-blue text-white text-[11px] font-medium uppercase tracking-[0.08em]">
                        <IconCircleCheck size={12} stroke={2.5} />
                        Client’s choice
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-body text-ink/75">{option.note}</p>
              </div>
            ))}
          </div>

          {decision.recommendation && (
            <div className="flex gap-4 rounded-[20px] bg-ink/[0.04] p-6">
              <IconBulb
                size={22}
                stroke={2}
                className="text-main-blue shrink-0 mt-0.5"
              />
              <p className="text-body text-ink/80 max-w-[760px]">
                {decision.recommendation}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

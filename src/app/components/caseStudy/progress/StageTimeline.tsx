import clsx from 'clsx';
import { IconCheck } from '@tabler/icons-react';
import type { ProgressStage } from '@/types/project';

type Props = {
  stages: ProgressStage[];
};

const STATUS_LABEL: Record<ProgressStage['status'], string> = {
  done: 'Done',
  active: 'In progress',
  upcoming: 'Upcoming',
};

export default function StageTimeline({ stages }: Props) {
  return (
    <ol className="flex flex-col gap-0">
      {stages.map((stage, i) => {
        const isLast = i === stages.length - 1;
        return (
          <li key={stage.title} className="flex gap-5">
            {/* Marker + connector */}
            <div className="flex flex-col items-center">
              <span
                className={clsx(
                  'flex items-center justify-center w-9 h-9 rounded-full border-2 shrink-0',
                  stage.status === 'done' &&
                    'bg-main-blue border-main-blue text-white',
                  stage.status === 'active' &&
                    'border-main-blue text-main-blue bg-main-blue/10',
                  stage.status === 'upcoming' &&
                    'border-ink/20 text-ink/30 bg-white',
                )}
              >
                {stage.status === 'done' ? (
                  <IconCheck size={18} stroke={2.5} />
                ) : stage.status === 'active' ? (
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="absolute inset-0 rounded-full bg-main-blue/50 animate-ping" />
                    <span className="relative rounded-full w-2.5 h-2.5 bg-main-blue" />
                  </span>
                ) : (
                  <span className="text-h6 font-medium">{i + 1}</span>
                )}
              </span>
              {!isLast && (
                <span
                  className={clsx(
                    'w-0.5 grow min-h-[28px]',
                    stage.status === 'done' ? 'bg-main-blue' : 'bg-ink/15',
                  )}
                />
              )}
            </div>

            {/* Content */}
            <div className={clsx('pb-8', isLast && 'pb-0')}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-h3-subheading text-ink font-semibold">
                  {stage.title}
                </h3>
                <span
                  className={clsx(
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-[0.08em]',
                    stage.status === 'done' && 'bg-main-blue/10 text-main-blue',
                    stage.status === 'active' &&
                      'border border-main-blue/30 text-main-blue',
                    stage.status === 'upcoming' && 'bg-ink/[0.06] text-ink/45',
                  )}
                >
                  {STATUS_LABEL[stage.status]}
                </span>
              </div>
              {stage.detail && (
                <p className="mt-1.5 text-body text-ink/70 max-w-[640px]">
                  {stage.detail}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

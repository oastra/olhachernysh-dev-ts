import {
  IconTrophy,
  IconTrendingUp,
  IconRocket,
  IconDeviceMobile,
  IconShieldCheck,
  IconSparkles,
  IconPalette,
  IconCalendar,
  IconMessage2,
  IconShoppingCart,
  IconSearch,
  IconCircleCheck,
  IconCheck,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';
import type { CaseStudyOutcome } from '@/types/project';

const ICON_MAP: Record<string, ReactNode> = {
  trophy: <IconTrophy size={22} stroke={1.8} />,
  trending: <IconTrendingUp size={22} stroke={1.8} />,
  rocket: <IconRocket size={22} stroke={1.8} />,
  mobile: <IconDeviceMobile size={22} stroke={1.8} />,
  trust: <IconShieldCheck size={22} stroke={1.8} />,
  sparkles: <IconSparkles size={22} stroke={1.8} />,
  palette: <IconPalette size={22} stroke={1.8} />,
  calendar: <IconCalendar size={22} stroke={1.8} />,
  message: <IconMessage2 size={22} stroke={1.8} />,
  cart: <IconShoppingCart size={22} stroke={1.8} />,
  search: <IconSearch size={22} stroke={1.8} />,
  check: <IconCircleCheck size={22} stroke={1.8} />,
};

type Props = {
  outcomes: CaseStudyOutcome[];
};

export default function OutcomeList({ outcomes }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
      {outcomes.map((raw) => {
        const item = typeof raw === 'string' ? { text: raw } : raw;
        const icon = item.icon ? ICON_MAP[item.icon] : null;
        return (
          <li
            key={item.text}
            className="flex items-start gap-4 text-body text-ink/85"
          >
            <span
              aria-hidden
              className="flex-shrink-0 mt-[2px] w-12 h-12 rounded-full bg-main-blue/10 flex items-center justify-center"
            >
              <span className="w-9 h-9 rounded-full bg-main-blue/20 flex items-center justify-center text-main-blue">
                {icon ?? <IconCheck size={20} stroke={2} />}
              </span>
            </span>
            <span className="leading-relaxed">{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

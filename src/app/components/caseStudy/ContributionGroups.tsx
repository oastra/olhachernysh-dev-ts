import { CaseStudyContributionGroup } from '@/types/project';
import DoneIcon from '../common/DoneIcon';

type Props = {
  groups: CaseStudyContributionGroup[];
};

export default function ContributionGroups({ groups }: Props) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-5">
          <h3 className="text-h3-subheading text-ink font-semibold">
            {group.title}
          </h3>
          <ul className="flex flex-col gap-4">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-body text-ink/80"
              >
                <span className="w-[21px] h-[21px] flex items-center justify-center bg-[rgba(95,160,255,0.37)] rounded-full flex-shrink-0 mt-1">
                  <DoneIcon className="mr-[-6px] mb-[4px]" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

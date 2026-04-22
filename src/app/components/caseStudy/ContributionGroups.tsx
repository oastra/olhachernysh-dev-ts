import { CaseStudyContributionGroup } from '@/types/project';

type Props = {
  groups: CaseStudyContributionGroup[];
};

export default function ContributionGroups({ groups }: Props) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-4">
          <h3 className="text-h3-subheading text-ink">{group.title}</h3>
          <ul className="flex flex-col gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="text-body text-ink/80 flex gap-3"
              >
                <span
                  aria-hidden
                  className="mt-[11px] h-[2px] w-3 shrink-0 bg-main-blue/60"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

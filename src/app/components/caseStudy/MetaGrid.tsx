import { ProjectMeta } from '@/types/project';

type Props = {
  meta: ProjectMeta;
  className?: string;
};

const ITEMS: Array<{ key: keyof ProjectMeta; label: string }> = [
  { key: 'role', label: 'Role' },
  { key: 'type', label: 'Type' },
  { key: 'year', label: 'Year' },
  { key: 'location', label: 'Location' },
];

export default function MetaGrid({ meta, className }: Props) {
  return (
    <dl
      className={[
        'grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6',
        'border-t-2 border-main-blue/10 pt-6',
        className ?? '',
      ].join(' ')}
    >
      {ITEMS.map(({ key, label }) => (
        <div key={key} className="flex flex-col gap-1">
          <dt className="text-h6 text-ink/50 uppercase tracking-wide">
            {label}
          </dt>
          <dd className="text-body text-ink">{meta[key]}</dd>
        </div>
      ))}
    </dl>
  );
}

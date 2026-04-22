type Props = {
  outcomes: string[];
};

export default function OutcomeList({ outcomes }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-[1000px]">
      {outcomes.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-body text-ink/85"
        >
          <span
            aria-hidden
            className="mt-[11px] h-[2px] w-4 shrink-0 bg-main-blue"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

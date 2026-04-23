type Props = {
  outcomes: string[];
};

export default function OutcomeList({ outcomes }: Props) {
  return (
    <ul className="flex flex-col gap-4 max-w-[900px]">
      {outcomes.map((item) => (
        <li key={item} className="flex gap-2 text-body text-ink/85">
          <span aria-hidden className="text-ink/60">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

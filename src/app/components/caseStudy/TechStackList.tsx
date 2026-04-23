type Props = {
  stack: string[];
};

export default function TechStackList({ stack }: Props) {
  return (
    <ul className="flex flex-wrap gap-3">
      {stack.map((item) => (
        <li
          key={item}
          className="px-5 py-2 rounded-full border border-ink/15 bg-white text-body text-ink/85"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

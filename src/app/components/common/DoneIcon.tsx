interface DoneIconProps {
  className?: string;
}

export default function DoneIcon({ className = '' }: DoneIconProps) {
  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.08301 7.66691L4.94167 11.5256C4.97917 11.563 5.03001 11.5841 5.08301 11.5841C5.13601 11.5841 5.18684 11.563 5.22434 11.5256L15.7497 1.00024"
        stroke="#5FA0FF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

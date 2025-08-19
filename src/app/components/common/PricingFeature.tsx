import { IconCheck } from '@tabler/icons-react';

type Props = { text: string };

export default function PricingFeature({ text }: Props) {
  return (
    <li className="flex items-start">
      <IconCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={20} />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

'use client';

interface GifBoxProps {
  width: number;
  height: number;
}

export default function GifBox({ width, height }: GifBoxProps) {
  return (
    <div
      className="bg-gray-100 rounded-lg flex-shrink-0"
      style={{ width, height }}
    >
      {/* TODO: Replace with actual GIF/animation component */}
      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
        GIF
      </div>
    </div>
  );
}

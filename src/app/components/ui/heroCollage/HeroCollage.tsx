'use client';

import HeroCollageDesktop from './HeroCollageDesktop';
import HeroCollageCompact from './HeroCollageCompact';

export default function HeroCollage() {
  return (
    <section className="mx-auto max-w-[1356px] px-4 md:px-6 xl:px-0">
      <div className="hidden xl:block">
        <HeroCollageDesktop />
      </div>
      <div className="xl:hidden">
        <HeroCollageCompact />
      </div>
    </section>
  );
}

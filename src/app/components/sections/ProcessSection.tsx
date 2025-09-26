'use client';

import SectionTitle from '../common/SectionTitle';
import ProcessDesktop from '../process/ProcessDesktop';
import ProcessTablet from '../process/ProcessTablet';
import ProcessMobile from '../process/ProcessMobile';
export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-background px-6 lg:px-[60px] py-[50px] lg:py-[100px]"
    >
      <div className="max-w-[1322px] mx-auto">
        <SectionTitle right="Step-by-step: from discovery to launch (with clean hand-off and support).">
          Process
        </SectionTitle>

        <ProcessDesktop />
        <ProcessTablet />
        <ProcessMobile />
      </div>
    </section>
  );
}

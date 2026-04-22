import Link from 'next/link';
import Header from '@/app/components/common/Header';
import SectionWrapper from '@/app/components/common/SectionWrapper';

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <main>
        <SectionWrapper size="default">
          <div className="flex flex-col gap-6 max-w-[720px]">
            <span className="text-h6 text-main-blue/50 tracking-wide">404</span>
            <h1 className="text-h2 text-ink">Project not found</h1>
            <p className="text-body text-ink/70">
              The case study you&apos;re looking for doesn&apos;t exist or has
              been moved.
            </p>
            <Link
              href="/#projects"
              className="text-body text-main-blue hover:text-ink transition-colors"
            >
              Back to all projects
            </Link>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}

import Header from '../../common/Header';
import ContactSection from '../../sections/ContactSection';

import CaseStudySection from '../CaseStudySection';
import OverviewGrid from '../OverviewGrid';
import Prose from '../Prose';
import OutcomeList from '../OutcomeList';
import TechStackList from '../TechStackList';
import NextProject from '../NextProject';
import ReadingProgress from '../ReadingProgress';

import ProgressHero from './ProgressHero';
import StageTimeline from './StageTimeline';
import DecisionList from './DecisionList';
import ProgressGallery from './ProgressGallery';

import type { Project, ProgressContent } from '@/types/project';

type Props = {
  project: Project;
  progress: ProgressContent;
  nextProject: Project;
};

export default function ProgressLayout({ project, progress, nextProject }: Props) {
  return (
    <>
      <ReadingProgress />
      <Header />
      <main>
        <ProgressHero project={project} progress={progress} />

        <CaseStudySection
          label="Overview"
          id="overview"
          lede={'What the project is, who it’s for, and what it needs to achieve.'}
        >
          <OverviewGrid overview={progress.overview} />
        </CaseStudySection>

        {progress.highlights && progress.highlights.length > 0 && (
          <CaseStudySection
            label="Done so far"
            id="done"
            tone="muted"
            lede={'What’s already been designed, decided and delivered.'}
          >
            <OutcomeList outcomes={progress.highlights} />
          </CaseStudySection>
        )}

        {progress.gallery && progress.gallery.length > 0 && (
          <CaseStudySection
            label="Design preview"
            id="design-preview"
            lede={'Pages already designed across desktop, tablet and mobile.'}
          >
            <ProgressGallery items={progress.gallery} />
          </CaseStudySection>
        )}

        <CaseStudySection
          label="Where it stands"
          id="progress"
          tone="muted"
          lede={'A living view of the project as it moves from design into build.'}
        >
          <StageTimeline stages={progress.stages} />
        </CaseStudySection>

        {progress.decisions && progress.decisions.length > 0 && (
          <CaseStudySection
            label="Key decisions"
            id="decisions"
            lede={'The decisions that shape the build — and where they landed.'}
          >
            <DecisionList decisions={progress.decisions} />
          </CaseStudySection>
        )}

        {progress.next && progress.next.length > 0 && (
          <CaseStudySection label="What’s next" id="next" tone="muted">
            <Prose paragraphs={progress.next} />
          </CaseStudySection>
        )}

        {progress.stack && progress.stack.length > 0 && (
          <CaseStudySection label="Planned stack" id="stack">
            <TechStackList stack={progress.stack} />
          </CaseStudySection>
        )}

        <NextProject project={nextProject} />

        <ContactSection />
      </main>
    </>
  );
}

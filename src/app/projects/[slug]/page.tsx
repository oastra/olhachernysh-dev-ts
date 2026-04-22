import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Header from '@/app/components/common/Header';
import ContactSection from '@/app/components/sections/ContactSection';

import CaseStudyHero from '@/app/components/caseStudy/CaseStudyHero';
import CaseStudySection from '@/app/components/caseStudy/CaseStudySection';
import OverviewGrid from '@/app/components/caseStudy/OverviewGrid';
import Prose from '@/app/components/caseStudy/Prose';
import ContributionGroups from '@/app/components/caseStudy/ContributionGroups';
import FeatureList from '@/app/components/caseStudy/FeatureList';
import ProcessList from '@/app/components/caseStudy/ProcessList';
import OutcomeList from '@/app/components/caseStudy/OutcomeList';
import TechStackList from '@/app/components/caseStudy/TechStackList';
import NextProject from '@/app/components/caseStudy/NextProject';
import Gallery from '@/app/components/caseStudy/Gallery';

import { PROJECTS, getProjectBySlug, getNextProject } from '@/data/projects';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project not found' };

  const title = `${project.shortTitle} — Case Study | Olha Chernysh`;
  const description = project.caseStudy.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://olhachernysh.dev/projects/${project.slug}`,
      images: [
        {
          url: project.image.src,
          width: project.image.width,
          height: project.image.height,
          alt: project.image.alt,
        },
      ],
    },
  };
}

export default async function ProjectCaseStudyPage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nextProject = getNextProject(slug);
  const { caseStudy } = project;

  return (
    <>
      <Header />
      <main>
        <CaseStudyHero project={project} />

        <CaseStudySection
          index="01"
          label="Overview"
          id="overview"
          lede={'What the project is, who it\u2019s for, and what it needed to achieve.'}
        >
          <OverviewGrid overview={caseStudy.overview} />
        </CaseStudySection>

        <CaseStudySection
          index="02"
          label="Challenge"
          id="challenge"
        >
          <Prose paragraphs={caseStudy.challenge} />
        </CaseStudySection>

        <CaseStudySection
          index="03"
          label="Solution"
          id="solution"
        >
          <Prose paragraphs={caseStudy.solution} />
        </CaseStudySection>

        {caseStudy.gallerySolution && caseStudy.gallerySolution.length > 0 && (
          <Gallery items={caseStudy.gallerySolution} id="gallery-solution" />
        )}

        <CaseStudySection
          index="04"
          label="What we did"
          id="what-i-did"
          lede="Strategy, development, integrations and everything in between."
        >
          <ContributionGroups groups={caseStudy.contributions} />
        </CaseStudySection>

        <CaseStudySection
          index="05"
          label="Key features"
          id="features"
        >
          <FeatureList features={caseStudy.features} />
        </CaseStudySection>

        {caseStudy.galleryFeatures && caseStudy.galleryFeatures.length > 0 && (
          <Gallery items={caseStudy.galleryFeatures} id="gallery-features" />
        )}

        <CaseStudySection
          index="06"
          label="Process"
          id="process"
          lede="From discovery to launch — the path this project actually took."
        >
          <ProcessList steps={caseStudy.process} />
        </CaseStudySection>

        {caseStudy.galleryProcess && caseStudy.galleryProcess.length > 0 && (
          <Gallery items={caseStudy.galleryProcess} id="gallery-process" />
        )}

        <CaseStudySection
          index="07"
          label="Outcome"
          id="outcome"
        >
          <OutcomeList outcomes={caseStudy.outcome} />
        </CaseStudySection>

        <CaseStudySection
          index="08"
          label="Tech stack"
          id="stack"
        >
          <TechStackList stack={caseStudy.stack} />
        </CaseStudySection>

        <NextProject project={nextProject} />

        <ContactSection />
      </main>
    </>
  );
}

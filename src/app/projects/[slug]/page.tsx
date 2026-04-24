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
import MobileGallery from '@/app/components/caseStudy/MobileGallery';
import FeatureGallery from '@/app/components/caseStudy/FeatureGallery';
import DesignExploration from '@/app/components/caseStudy/DesignExploration';
import SlotImage from '@/app/components/caseStudy/SlotImage';
import ReadingProgress from '@/app/components/caseStudy/ReadingProgress';

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

  const title = project.headline
    ? project.headline
    : `${project.shortTitle} — Case Study | Olha Chernysh`;
  const description = project.caseStudy.summary;
  const url = `https://olhachernysh.dev/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
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
  const projectUrl = `https://olhachernysh.dev/projects/${project.slug}`;

  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${projectUrl}#project`,
    name: project.title,
    alternateName: project.shortTitle,
    description: caseStudy.summary,
    url: projectUrl,
    image: `https://olhachernysh.dev${project.image.src}`,
    inLanguage: 'en',
    dateCreated: project.meta.year,
    locationCreated: project.meta.location
      ? { '@type': 'Place', name: project.meta.location }
      : undefined,
    creator: { '@id': 'https://olhachernysh.dev/#me' },
    keywords: caseStudy.stack.join(', '),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://olhachernysh.dev/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://olhachernysh.dev/#projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.shortTitle,
        item: projectUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ReadingProgress />
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
          tone="muted"
        >
          <Prose paragraphs={caseStudy.challenge} />
        </CaseStudySection>

        <CaseStudySection
          index="03"
          label="Solution"
          id="solution"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <Prose paragraphs={caseStudy.solution} />
            <div className="rounded-[24px] md:rounded-[32px] bg-solution-blue p-4 md:p-8">
              <div className="relative rounded-[12px] md:rounded-[18px] bg-white shadow-[0_16px_40px_-20px_rgba(0,0,0,0.15)] overflow-hidden min-h-[200px]">
                <SlotImage
                  src={`/images/projects/${project.slug}/solution.webp`}
                  alt={`${project.shortTitle} — solution view`}
                  placeholderLabel="Solution"
                  className="block w-full h-auto select-none"
                />
              </div>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          index="04"
          label="What we did"
          id="what-i-did"
          tone="muted"
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

        <FeatureGallery
          items={caseStudy.galleryFeatures}
          id="gallery-features"
        />

        <MobileGallery
          slug={project.slug}
          shortTitle={project.shortTitle}
          id="mobile-view"
        />

        <CaseStudySection
          index="06"
          label="Process"
          id="process"
        >
          <ProcessList steps={caseStudy.process} />
        </CaseStudySection>

        <DesignExploration
          slug={project.slug}
          shortTitle={project.shortTitle}
          id="gallery-process"
          caption={caseStudy.galleryProcess?.[0]?.caption}
        />

        <CaseStudySection
          index="07"
          label="Outcome"
          id="outcome"
          tone="muted"
        >
          <OutcomeList outcomes={caseStudy.outcome} />
        </CaseStudySection>

        {caseStudy.reflection && caseStudy.reflection.length > 0 && (
          <CaseStudySection label="Reflection" id="reflection">
            <Prose paragraphs={caseStudy.reflection} />
          </CaseStudySection>
        )}

        <CaseStudySection
          index="08"
          label="Tech stack"
          id="stack"
          tone="muted"
        >
          <TechStackList stack={caseStudy.stack} />
        </CaseStudySection>

        <NextProject project={nextProject} />

        <ContactSection />
      </main>
    </>
  );
}

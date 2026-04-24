export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectMeta = {
  role: string;
  type: string;
  year: string;
  location: string;
};

export type CaseStudyOverview = {
  what: string;
  audience: string;
  goal: string;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudyProcessStep = {
  title: string;
  description: string;
};

export type CaseStudyContributionGroup = {
  title: string;
  items: string[];
};

export type OutcomeIcon =
  | 'trophy'
  | 'trending'
  | 'rocket'
  | 'mobile'
  | 'trust'
  | 'sparkles'
  | 'palette'
  | 'calendar'
  | 'message'
  | 'cart'
  | 'search'
  | 'check';

export type CaseStudyOutcome =
  | string
  | {
      text: string;
      icon?: OutcomeIcon;
    };

export type CaseStudyGalleryItem = ProjectImage & {
  /** "wide" spans full width, "half" sits in a 2-up grid. Defaults to "wide". */
  span?: 'wide' | 'half';
  /** Optional short caption shown under the image. */
  caption?: string;
};

export type CaseStudyContent = {
  /** Hero subtitle — one or two sentences. */
  summary: string;
  overview: CaseStudyOverview;
  /** Paragraphs describing the problem space. */
  challenge: string[];
  /** Paragraphs describing the chosen direction. */
  solution: string[];
  /** Grouped contributions — strategy / development / backend etc. */
  contributions: CaseStudyContributionGroup[];
  features: CaseStudyFeature[];
  process: CaseStudyProcessStep[];
  /** Bullet outcomes — describe real-world impact without fake numbers. */
  outcome: CaseStudyOutcome[];
  /** Paragraphs reflecting on what we learned and would do differently. */
  reflection?: string[];
  stack: string[];
  /** Extra screenshots shown after the Solution section. */
  gallerySolution?: CaseStudyGalleryItem[];
  /** Extra screenshots shown after the Features section. */
  galleryFeatures?: CaseStudyGalleryItem[];
  /** Design-file artefacts (Figma frames etc.) shown after the Process section. */
  galleryProcess?: CaseStudyGalleryItem[];
  /** Phone mockups shown in the Mobile View section — up to 4 recommended. */
  galleryMobile?: CaseStudyGalleryItem[];
};

export type ProjectStatus = 'live' | 'in-development';

export type Project = {
  slug: string;
  title: string;
  /** Short version used in "next project" teasers. */
  shortTitle: string;
  /** Outcome-focused headline shown on cards and SERP. Falls back to `title`. */
  headline?: string;
  location?: string;
  /** Public URL of the live site. */
  liveUrl: string;
  /** Defaults to "live" when omitted. */
  status?: ProjectStatus;
  image: ProjectImage;
  /** Optional hero image dedicated to the case-study top banner. Falls back to `image`. */
  heroImage?: ProjectImage;
  meta: ProjectMeta;
  caseStudy: CaseStudyContent;
};

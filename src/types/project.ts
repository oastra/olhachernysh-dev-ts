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

/** Where a stage sits relative to "now". */
export type ProgressStageStatus = 'done' | 'active' | 'upcoming';

export type ProgressStage = {
  /** e.g. "Design", "Build", "Launch". */
  title: string;
  status: ProgressStageStatus;
  /** Optional one-liner — what this stage covers or where it stands. */
  detail?: string;
};

export type ProgressDecisionOption = {
  /** e.g. "Sanity", "Payload CMS". */
  name: string;
  /** Why it was considered — the honest trade-off. */
  note: string;
  /** Marks the option we recommended. */
  recommended?: boolean;
  /** Marks the option the client chose (may differ from the recommendation). */
  chosen?: boolean;
};

export type ProgressDecision = {
  /** e.g. "Choosing the CMS / backend". */
  title: string;
  /** "open" = still deciding, "recommended" = leaning, "decided" = locked. */
  state?: 'open' | 'recommended' | 'decided';
  options: ProgressDecisionOption[];
  /** The recommendation and the reasoning behind it. */
  recommendation?: string;
};

/**
 * Content for an in-development project shown as a living "progress" page
 * instead of a finished case study.
 */
export type ProgressContent = {
  /** Hero subtitle — one or two sentences. */
  summary: string;
  overview: CaseStudyOverview;
  /** Label for the phase the project is in right now, e.g. "Design". */
  currentPhase: string;
  /** Concrete things already delivered — rendered as a checklist. */
  highlights?: CaseStudyOutcome[];
  /** Ordered stages forming the timeline. */
  stages: ProgressStage[];
  /** Open decisions being worked through — e.g. the stack choice. */
  decisions?: ProgressDecision[];
  /** Design previews / screenshots of work delivered so far. */
  gallery?: CaseStudyGalleryItem[];
  /** What happens next, in plain paragraphs. */
  next?: string[];
  /** Tentative / planned stack. */
  stack?: string[];
};

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
  /** Full case study — present for shipped work. */
  caseStudy?: CaseStudyContent;
  /** Living progress page — present for in-development work without a finished case study. */
  progress?: ProgressContent;
};

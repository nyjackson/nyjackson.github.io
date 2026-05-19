// ============================================================
// types.ts
// Central type definitions for the portfolio site.
// ============================================================

/**
 * All valid filter tags a project can belong to.
 * Add new tags here as you start new categories of work.
 */
export type ProjectTag =
  | 'professional'
  | 'academic'
  | 'writing'
  | 'game-dev'
  | 'art'
  | 'infrastructure'
  | 'fullstack'
  | 'frontend';

/**
 * Filter options shown in the UI filter bar.
 * 'all' is always the first option.
 * Add to this union as you add new top-level categories.
 */
export type FilterCategory =
  | 'all'
  | 'professional'
  | 'academic'
  | 'writing'
  | 'game-dev'
  | 'art';

/**
 * A single stat displayed as a chip on a project card.
 * e.g. { value: '9,950+', label: 'documents migrated' }
 */
export interface ProjectStat {
  value: string;
  label: string;
}

/**
 * A link associated with a project.
 */
export interface ProjectLink {
  label: string;   // e.g. 'GitHub', 'Live Site', 'Case Study'
  url: string;
}

/**
 * A single screenshot for a project.
 * src    → path relative to /public/screenshots/ in your Vite project.
 *          e.g. 'portal-landing.png' resolves to /public/screenshots/portal-landing.png
 * alt    → descriptive alt text for accessibility and SEO — be specific.
 * caption → optional short label shown below the image in the lightbox/gallery.
 *
 * Usage in ProjectCard:
 *   <img src={`/screenshots/${screenshot.src}`} alt={screenshot.alt} />
 */
export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * A single project entry.
 */
export interface Project {
  id: string;                        // Unique slug, used as React key
  title: string;
  year: string;                      // e.g. '2026' or '2025–2026'
  description: string;
  tags: ProjectTag[];                // Used for filtering — a project can have multiple
  techStack: string[];               // Displayed as pills on the card
  stats?: ProjectStat[];             // Optional outcome metrics
  links?: ProjectLink[];             // Optional external links
  screenshots?: ProjectScreenshot[]; // Optional ordered gallery images
  featured?: boolean;                // If true, card gets visual emphasis
}

/**
 * A skill group displayed in the Skills section.
 */
export interface SkillGroup {
  label: string;
  skills: string[];
}

/**
 * A navigation link in the Nav bar.
 */
export interface NavLink {
  label: string;
  href: string;
}
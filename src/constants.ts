// ============================================================
// constants.ts
// All static data for the portfolio site.
// Edit this file to add/update projects, skills, and nav links.
// ============================================================

import type { Project, SkillGroup, NavLink, FilterCategory } from './types';

// ------------------------------------------------------------
// NAVIGATION
// ------------------------------------------------------------

export const NAV_LINKS: NavLink[] = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

// ------------------------------------------------------------
// HERO / ABOUT
// ------------------------------------------------------------

export const HERO = {
  name: 'Nyala Jackson',
  title: 'Software Engineer',
  subtitle: 'Cloud Infrastructure & Full-Stack Systems',
  bio: "I build systems for environments where the stakes are real — cloud migrations, HIPAA-compliant applications, and recovery tooling that turns messy legacy data into something trustworthy. I care about understanding a system completely before touching it in production.",
  location: 'New York, NY',
  links: {
    github:   'https://github.com/nyjackson',
    linkedin: 'https://linkedin.com/in/nyalajackson',
    email:    'nymjackson@gmail.com',
  },
};

export const TERMINAL_OUTPUT = `--- 🧩 IDENTITY SYNC [patient] [MODE: DRY] --- 

✓ Verified:   8,412 existing records
🔗 Linking:   Mapping Legacy ID 4821 → PG UUID
🔗 Linking:   Mapping Legacy ID 7103 → PG UUID
⚠️ Collision: Legacy ID 2947 → wrong user. Unlinking.
+ Created:    892 new profiles

============================================
🏁 SYNC SUMMARY
┌─────────────────────┬────────┐
│ Total Processed     │ 31,408 │
│ Verified Existing   │ 8,412  │
│ Linked by PII       │  6,231 │
│ Created New         │    892 │
│ Collisions Unlinked │     12 │
│ Skipped (Junk)      │     47 │
└─────────────────────┴────────┘
============================================`

// ------------------------------------------------------------
// SKILLS
// ------------------------------------------------------------

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Backend',
    skills: ['Node.js (ESM)', 'TypeScript', 'Drizzle ORM', 'REST APIs'],
  },
  {
    label: 'Frontend',
    skills: ['React 19', 'Vite', 'HTML5', 'CSS3'],
  },
  {
    label: 'Database',
    skills: ['PostgreSQL (AWS RDS)', 'MySQL'],
  },
  {
    label: 'Cloud',
    skills: ['AWS S3', 'AWS Cognito', 'AWS EC2', 'AWS RDS', 'AWS Amplify', 'AWS IAM'],
  },
  {
    label: 'Tooling',
    skills: ['Git', 'Shell Scripting', 'pgAdmin 4', 'Docker', 'npx tsx'],
  },
  {
    label: 'Concepts',
    skills: ['HIPAA Compliance', 'Data Migration', 'Identity Reconciliation', 'Cloud-to-Cloud Streaming'],
  },
];

// ------------------------------------------------------------
// FILTER CATEGORIES
// Defines what appears in the filter bar UI, in order.
// 'all' should always be first.
// Add a new entry here when you start a new category of work.
// ------------------------------------------------------------

export const FILTER_CATEGORIES: { value: FilterCategory; label: string }[] = [
  { value: 'all',          label: 'All' },
  { value: 'professional', label: 'Professional' },
  { value: 'academic',     label: 'Academic' },
  // Uncomment as you add projects in these categories:
  // { value: 'writing',   label: 'Writing' },
  // { value: 'game-dev',  label: 'Game Dev' },
  // { value: 'art',       label: 'Art' },
];

// ------------------------------------------------------------
// PROJECTS
// Newest first within each category.
//
// tags[]   → used for filtering. A project can have multiple.
//            'professional' | 'academic' | 'writing' | 'game-dev' | 'art'
//            + secondary: 'infrastructure' | 'fullstack' | 'frontend'
//
// stats[]  → optional outcome metrics shown as chips on the card.
// links[]  → optional external links (GitHub, Live Site, etc.)
// featured → optional boolean for visual emphasis on the card.
// ------------------------------------------------------------

export const PROJECTS: Project[] = [

  // ----------------------------------------------------------
  // PROFESSIONAL
  // ----------------------------------------------------------

  {
    id: 'identity-reconciliation-engine',
    title: 'Identity Reconciliation & Recovery Engine',
    year: '2026',
    description:
      'A TypeScript/SQL toolset for resolving data fragmentation across a legacy healthcare system. Uses PII-safe fingerprinting (Name + DOB / SSN4) to deduplicate patient profiles, elect canonical winner records, and migrate all associated documents transactionally. A separate S3 crawler acts as a safety net to heal any database records missing a physical S3 counterpart.',
    tags: ['professional', 'infrastructure'],
    techStack: ['TypeScript', 'PostgreSQL', 'MySQL', 'AWS S3', 'Drizzle ORM', 'Node.js'],
    stats: [
      { value: '31K → 16K', label: 'profiles consolidated' },
      { value: '100%',      label: 'S3–DB integrity verified' },
    ],
    featured: true,
  },

  {
    id: 'unified-document-scanning-portal',
    title: 'Unified Document Scanning Portal',
    year: '2026',
    description:
      'A HIPAA-compliant document management system for medical and administrative records. Features a three-step presigned S3 upload handshake that keeps sensitive data off the application server, role-based document views, compliance-driven category structures, and expiration tracking built into the upload flow.',
    tags: ['professional', 'fullstack'],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Drizzle ORM', 'PostgreSQL', 'AWS S3', 'AWS Cognito', 'Vite'],
    featured: true,
  },

  {
    id: 'sa-infrastructure-migration',
    title: 'S&A Unified Infrastructure Migration',
    year: '2026',
    description:
      'Full cloud-to-cloud document migration from a legacy s3fs-mounted DigitalOcean environment to AWS S3. Designed a direct API-to-API streaming approach to bypass filesystem bottlenecks. Built a suite of recovery scripts to handle misrouted files, ghost UUID folders, and S3-only orphans with no corresponding database record.',
    tags: ['professional', 'infrastructure'],
    techStack: ['TypeScript', 'AWS S3', 'Node.js', 'Shell Scripting', 'PostgreSQL', 'MySQL'],
    stats: [
      { value: '9,950+', label: 'documents migrated' },
      { value: '1,115',  label: 'files recovered' },
    ],
    featured: true,
  },

  // ----------------------------------------------------------
  // ACADEMIC
  // ----------------------------------------------------------

  {
    id: 'tax-dynasty',
    title: 'Tax Dynasty',
    year: '2025',
    description:
      "Full-stack capstone project for Per Scholas' RTT-48 Full Stack Development course. A mock tax-preparation company site with separate client and employee experiences, working authentication with password encryption, and a full MERN architecture. Planned and tracked using a Jira project board throughout development.",
    tags: ['academic', 'fullstack'],
    techStack: ['React', 'Redux', 'Vite', 'Node.js', 'Express', 'Mongoose', 'MongoDB', 'CSS'],
    links: [
      { label: 'Live Site', url: 'https://cp-325-frontend.onrender.com/' },
      { label: 'GitHub',    url: 'https://github.com/nyjackson/cp-325' },
    ],
  },

  {
    id: 'chat-ou-chien',
    title: 'Chat || Chien',
    year: '2025',
    description:
      'A React + Vite gallery application integrating two external REST APIs (The Cat API and The Dog API). Browse paginated photo collections, generate a random cat or dog image, and save favorites for later. Built with React Router for navigation and useReducer for favorites state management.',
    tags: ['academic', 'frontend'],
    techStack: ['React', 'Vite', 'React Router', 'REST API', 'CSS'],
    links: [
      { label: 'Live Site', url: 'https://chat-ou-chien.netlify.app/' },
      { label: 'GitHub',    url: 'https://github.com/nyjackson/SBA-320H' },
    ],
  },

  {
    id: 'simr-vr',
    title: 'Simr — Immersive VR Computer Education',
    year: '2020',
    description:
      'A 3D virtual reality instructional tool built with React 360 that helps novice programmers visualize memory management and stack operations in C. Features three interactive panels where users select code snippets and observe real-time memory allocation changes displayed as a visual grid.',
    tags: ['academic'],
    techStack: ['React 360', 'Node.js'],
    links: [
      { label: 'Project Site', url: 'https://nyjackson.github.io/dreu2020/' },
      { label: 'GitHub',       url: 'https://github.com/nyjackson/dreu2020' },
    ],
  },

  {
    id: 'anthvr-bone-lab',
    title: 'anthVR: Bone Lab',
    year: '2019',
    description:
      'An enhanced VR application for studying fossil specimens and human evolution, built with HTC Vive Pro. Added Probe Mode — point at any fossil to access detailed species information — and a Timeline Activity where students chronologically arrange hominin fossils with real-time feedback.',
    tags: ['academic'],
    techStack: ['C#', 'Unity'],
    links: [
      { label: 'Project Site', url: 'https://pages.vassar.edu/fordscholars/2019/07/28/virtual-reality-anthropology/' },
      { label: 'GitHub',       url: 'https://github.com/nyjackson/BoneLab2.0' },
    ],
  },

  // ----------------------------------------------------------
  // FUTURE CATEGORIES — uncomment and fill in as you go
  // ----------------------------------------------------------

  // {
  //   id: 'my-writing-project',
  //   title: '',
  //   year: '',
  //   description: '',
  //   tags: ['writing'],
  //   techStack: [],
  //   links: [{ label: 'Read', url: '' }],
  // },

  // {
  //   id: 'my-game',
  //   title: '',
  //   year: '',
  //   description: '',
  //   tags: ['game-dev'],
  //   techStack: [],
  //   links: [{ label: 'Play', url: '' }],
  // },

  // {
  //   id: 'my-art-project',
  //   title: '',
  //   year: '',
  //   description: '',
  //   tags: ['art'],
  //   techStack: [],
  //   links: [],
  // },

];
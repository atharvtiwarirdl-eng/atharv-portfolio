// ============================================================
// CENTRAL CONFIG — edit everything about the site from here.
// Replace the CONFIGURE_ME placeholders with your real details.
// ============================================================

export const profile = {
  name: 'Atharv',
  role: 'Technology Enthusiast / Student / Developer',
  location: 'Uttar Pradesh, India',
  headline: ['Building.', 'Learning.', 'Experimenting.'],
  subline:
    'Technology enthusiast exploring AI, software, cybersecurity, robotics and creative digital technology.',
  bio: `I'm Atharv — a technology enthusiast who enjoys building, experimenting and learning across software, AI, cybersecurity, robotics and creative digital technology. I like understanding how things work under the hood, then turning that understanding into real, working projects. Most of what I know, I picked up by taking something apart — a script, a concept, an idea — and rebuilding it myself.`,
  // Drop your portrait at src/assets/portrait.jpg — if the file is missing,
  // a placeholder panel is shown automatically so the build never breaks.
  portraitSrc: '/Atharv.png',
};

export const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Software Development',
  'Web Development',
  'Cybersecurity',
  'Robotics',
  'Automation',
  'Creative Technology',
  'Digital Products',
  'Gaming / Esports',
];

// Qualitative levels only — no fabricated percentages.
export const skillGroups = [
  {
    category: 'Technology',
    items: [
      { name: 'Python', level: 'Comfortable' },
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'React', level: 'Building' },
      { name: 'Vite', level: 'Building' },
      { name: 'Node.js', level: 'Building' },
      { name: 'HTML / CSS', level: 'Comfortable' },
      { name: 'C', level: 'Building' },
      { name: 'Git & GitHub', level: 'Comfortable' },
      { name: 'APIs', level: 'Building' },
      { name: 'Supabase', level: 'Exploring' },
      { name: 'AI / Machine Learning', level: 'Exploring' },
    ],
  },
  {
    category: 'Cybersecurity',
    items: [
      { name: 'Linux', level: 'Comfortable' },
      { name: 'Kali Linux', level: 'Exploring' },
      { name: 'Security Fundamentals', level: 'Exploring' },
      { name: 'Networking', level: 'Exploring' },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'AI Assistants', level: 'Building' },
      { name: 'Local AI Models', level: 'Building' },
      { name: 'Voice Interfaces', level: 'Building' },
      { name: 'API Integrations', level: 'Comfortable' },
    ],
  },
  {
    category: 'Creative Technology',
    items: [
      { name: 'UI / UX Design', level: 'Building' },
      { name: 'Portfolio Design', level: 'Building' },
      { name: 'Visual Design', level: 'Comfortable' },
      { name: 'Branding', level: 'Exploring' },
    ],
  },
];

export const journey = [
  { label: 'Student', desc: 'Where it all started — curiosity about how things work.' },
  { label: 'Technology exploration', desc: 'Pulling apart tools, tutorials and side projects.' },
  { label: 'Web development', desc: 'Learning to build interfaces and ship them.' },
  { label: 'AI & automation', desc: 'Wiring up assistants, scripts and local models.' },
  { label: 'Cybersecurity experimentation', desc: 'Learning Linux, Kali and how systems break.' },
  { label: 'Creative digital projects', desc: 'Design, branding and visual work for real use cases.' },
  { label: 'Building personal AI systems', desc: 'CHANAKYA AI and other local-first experiments.' },
  { label: 'Continuously learning', desc: 'Still exploring. Still building.' },
];

export const projects = [
  {
    id: 'chanakya-ai',
    title: 'CHANAKYA AI',
    subtitle: 'Personal Local AI Assistant',
    description:
      'A locally running AI assistant designed to listen, understand commands and respond through voice — performing tasks and maintaining memory while reducing dependence on paid AI APIs.',
    tech: ['Python', 'Speech Recognition', 'sounddevice', 'NumPy', 'Local AI'],
    link: '#',
  },
  {
    id: 'devvault',
    title: 'DEVVAULT',
    subtitle: 'Your AI-Powered Developer Command Center',
    description:
      'DevVault is a premium developer workspace built to help you organize, build, and manage everything in one place. From coding tools and project management to AI-powered productivity, DevVault brings your entire development workflow into a single, modern command center.',
    tech: ['React', 'Node.js', 'AI', 'Workflow Automation'], // <-- Added missing array
    link: 'https://devvault-atharvtiwarirdl-engs-projects.vercel.app/',
  },
  {
    id: 'ak-banner-design',
    title: 'AK Banner Design',
    subtitle: 'Creative & Brand Design',
    description:
      'A creative design practice covering banner design, digital branding and social media creatives — client-oriented visual work outside of code.',
    tech: ['Visual Design', 'Branding', 'Social Creatives'],
    link: 'https://ak-banner-design.vercel.app/',
  },

  
];

export const education = [
  { level: 'Class 10', school: "DSM Lion's Public School", note: '57%' },
  { level: 'Class 12', school: '', note: '59%' },
];

// ---- CONFIGURE ME: replace with your real contact details ----
export const contact = {
  email: 'atharvtiwari.rdl@gmail.com',
  phone: '+91 9118594977',
  github: 'https://github.com/atharvtiwarirdl-eng',
  linkedin: 'https://linkedin.com/in/CONFIGURE_ME',
  instagram: 'https://instagram.com/CONFIGURE_ME',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

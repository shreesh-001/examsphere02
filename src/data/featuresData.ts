export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export const whyChooseUsFeatures: FeatureItem[] = [
  {
    id: "cert-verification",
    iconName: "shield",
    title: "Instant Certificate Verification",
    description:
      "Enterprise tamper-proof digital verification system allowing students, employers, and institutions to validate credentials instantly via serial IDs.",
    badge: "Verified Integrity",
    highlight: true,
  },
  {
    id: "training-skill",
    iconName: "award",
    title: "Training & Skill Development",
    description:
      "Specialized modules preparing students for competitive excellence and upskilling examination staff to ensure peak procedural compliance.",
    badge: "Industry Standard",
  },
  {
    id: "vetted-workforce",
    iconName: "users",
    title: "Vetted & Certified Manpower",
    description:
      "Rigorously screened invigilators, observers, and IT proctors with verified background checks and proven high-stakes examination experience.",
    badge: "Zero Compromise",
  },
  {
    id: "exam-infrastructure",
    iconName: "building",
    title: "Modern Exam Centers",
    description:
      "Equipped with isolated Gigabit LAN networks, live multi-angle CCTV feeds, biometric authentication, and dual-generator power backup.",
    badge: "CBT Ready",
  },
  {
    id: "strict-confidentiality",
    iconName: "lock",
    title: "Bank-Grade Confidentiality",
    description:
      "End-to-end chain of custody, tamper-evident security packaging, barcoded tracking, and air-gapped test delivery protocols.",
    badge: "ISO 27001 Ready",
  },
  {
    id: "proven-track-record",
    iconName: "sparkles",
    title: "Proven Institutional Track Record",
    description:
      "Trusted by governmental bodies, prominent educational institutions, and corporate boards across North India for fair assessment execution.",
    badge: "100k+ Assessed",
  },
];

export const keyStats = [
  { value: "150,000+", label: "Students Assessed", sub: "Across Olympiads & Tests" },
  { value: "250+", label: "Partner Schools & Centers", sub: "Statewide Coverage" },
  { value: "1,500+", label: "Vetted Exam Manpower", sub: "Invigilators & Proctors" },
  { value: "99.98%", label: "Examination Reliability", sub: "Zero Incident Record" },
];

export const clientLogos = [
  "National School Consortium",
  "Apex Technical Board",
  "State Talent Search Council",
  "Northern Educational Trust",
  "Premier Institute of Science",
  "District Assessment Directorate",
];

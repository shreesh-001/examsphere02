export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const whyChooseUsFeatures: FeatureItem[] = [
  {
    id: "cert-verification",
    iconName: "shield",
    title: "Instant Certificate Verification",
    description:
      "Verify any student certificate or award online in seconds using its unique code.",
    highlight: true,
  },
  {
    id: "training-skill",
    iconName: "award",
    title: "Training & Skill Development",
    description:
      "Helpful practice workshops for students and practical training for exam staff.",
  },
  {
    id: "vetted-workforce",
    iconName: "users",
    title: "Verified & Trained Staff",
    description:
      "Honest, background-checked invigilators and supervisors who follow exam rules strictly.",
  },
  {
    id: "exam-infrastructure",
    iconName: "building",
    title: "Modern Exam Centers",
    description:
      "Fast computers, quiet rooms, CCTV cameras, and power generators that keep tests running.",
  },
  {
    id: "strict-confidentiality",
    iconName: "lock",
    title: "Safe & Secret Papers",
    description:
      "Sealed envelopes, strict key locks, and secure rooms to keep question papers 100% confidential.",
  },
  {
    id: "proven-track-record",
    iconName: "sparkles",
    title: "Trusted by Institutions",
    description:
      "Schools, universities, and government boards count on us for fair and honest tests.",
  },
];

export const keyStats = [
  { value: "150,000+", label: "Students Assessed", sub: "In School Olympiads & Tests" },
  { value: "250+", label: "Partner Schools & Centers", sub: "Across the Region" },
  { value: "1,500+", label: "Trained Exam Staff", sub: "Invigilators & Supervisors" },
  { value: "100%", label: "Fair & Secure", sub: "Zero Paper Leaks" },
];

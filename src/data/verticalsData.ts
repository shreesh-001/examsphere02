export interface VerticalData {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  badge: string;
  link: string;
  image: string;
  overview: string[];
  keyOfferings: string[];
  infrastructureHighlights: string[];
  targetAudience: string;
}

export const verticalsData: VerticalData[] = [
  {
    id: "1",
    slug: "olympiads",
    title: "Exam Sphere Olympiads",
    shortDesc:
      "Prestigious academic talent search olympiads assessing analytical thinking, mathematics, science, and reasoning across school grades.",
    iconName: "trophy",
    badge: "Flagship Assessment",
    link: "/verticals#olympiads",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Exam Sphere Olympiads are designed to ignite academic curiosity and benchmark student capabilities on an objective national grading scale. We conduct tiered competitions in Science, Mathematics, English, Cyber & AI, and General Aptitude for students from Grade 1 to 12.",
      "Unlike conventional memory-based school tests, our Olympiads emphasize conceptual depth, problem-solving agility, and real-world logic. Students receive granular performance diagnostic reports detailing sectional accuracy, speed metrics, and national percentile standings.",
      "Top performers receive prestigious medals, merit scholarships, educational gadgets, and digitally verified recognition certificates authenticated by the Exam Sphere National Assessment Board.",
    ],
    keyOfferings: [
      "National Science & Innovation Olympiad (NSIO)",
      "Mathematics & Logical Reasoning Olympiad (MLRO)",
      "Global English Language & Proficiency Challenge (GELPC)",
      "Cyber Technologies & Artificial Intelligence Olympiad (CTAIO)",
      "All India Student Diagnostic Benchmarking & Percentile Scorecards",
      "Cash Scholarships, Gold/Silver/Bronze Medals & Institutional Trophies",
    ],
    infrastructureHighlights: [
      "Both online proctored remote testing and paper-and-pen school test centers",
      "AI-assisted fraud detection for remote assessment cohorts",
      "Automated OMR scanning with zero-error verification algorithms",
    ],
    targetAudience:
      "K-12 Schools, Educational Trusts, Independent Students & Parents seeking national academic benchmarking.",
  },
  {
    id: "2",
    slug: "manpower",
    title: "Manpower Supply",
    shortDesc:
      "Trained, background-verified examination workforce including center superintendents, invigilators, IT administrators, and security coordinators.",
    iconName: "users",
    badge: "Trusted Workforce",
    link: "/verticals#manpower",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Conducting credible, leak-proof examinations demands disciplined human supervision. Exam Sphere supplies thoroughly vetted, certified examination personnel capable of handling high-stakes test environments under strict regulatory standards.",
      "Every candidate in our manpower pool undergoes comprehensive police verification, integrity screening, and multi-module training covering standard operating procedures (SOPs), frisking protocols, biometric identity verification, and crisis escalation.",
      "Whether deploying 20 invigilators for a local institution or mobilizing over 2,000 personnel across multi-district recruitment examinations simultaneously, Exam Sphere ensures absolute professionalism and zero operational friction.",
    ],
    keyOfferings: [
      "Certified Center Superintendents and Deputy Observers",
      "Trained Room Invigilators and Hall Supervisors",
      "IT Proctors, Network Engineers & CBT Server Administrators",
      "Biometric Registration & Iris-Scanning Technical Staff",
      "Frisking Personnel, Queue Controllers & Gate Security Marshals",
      "Reserve Flying Squads and Confidential Document Couriers",
    ],
    infrastructureHighlights: [
      "Strict background and police clearance verification for all deployed staff",
      "Pre-exam tactical briefings and digital attendance check-in system",
      "Emergency standby teams reserved for rapid substitution without delays",
    ],
    targetAudience:
      "Government recruiting commissions, universities, autonomous testing organizations, and private testing agencies.",
  },
  {
    id: "3",
    slug: "recruitment",
    title: "Outsourcing Recruitment",
    shortDesc:
      "Comprehensive recruitment process outsourcing (RPO) encompassing candidate applications, question paper formulation, and automated evaluation.",
    iconName: "briefcase",
    badge: "Turnkey Solutions",
    link: "/verticals#recruitment",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Exam Sphere delivers end-to-end Recruitment Process Outsourcing (RPO) tailored for public sector undertakings, municipal boards, educational institutions, and corporate enterprises.",
      "We take complete custody of the hiring lifecycle: designing applicant registration portals, generating admit cards, confidential question bank curation through subject matter committees, test execution, OMR evaluation or CBT score aggregation, and merit list publishing.",
      "Our operations strictly adhere to confidentiality protocols, dual-key encryption of confidential question papers, and audit-ready chain of custody logging to eliminate legal vulnerabilities.",
    ],
    keyOfferings: [
      "Custom Online Application Gateways & Fee Collection Portals",
      "Multi-subject Confidential Question Bank Generation & Translation",
      "Admit Card Generation, Roll Number Allocation & Center Tagging",
      "Objective Scoring, Normalization & Normalized Percentile Formulation",
      "Candidate Document Verification & Biometric Match Screening",
      "Comprehensive Audit Trails & Legal Representation Assistance",
    ],
    infrastructureHighlights: [
      "ISO 27001 data security compliance and end-to-end data encryption",
      "Air-gapped server environments for confidential question assembly",
      "Blind multi-evaluator workflows for subjective and interview score aggregation",
    ],
    targetAudience:
      "State departments, public sector enterprises, universities, banks, and major corporations.",
  },
  {
    id: "4",
    slug: "centers",
    title: "Government Exam Centers (Online & Offline)",
    shortDesc:
      "State-of-the-art Computer-Based Test (CBT) labs and secure offline examination centers equipped with CCTV surveillance, power backup, and frisking booths.",
    iconName: "building",
    badge: "High-Capacity Hubs",
    link: "/verticals#centers",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Exam Sphere establishes and manages certified examination centers optimized for large-scale state and central government examinations, competitive entrance tests, and national eligibility trials.",
      "Our CBT centers feature commercial-grade desktop nodes arranged in private cubicles, isolated local area networks (LAN) isolated from the public internet during test delivery, uninterruptible power supply (UPS) backings paired with industrial diesel generators, and 360-degree IP CCTV cameras streaming directly to central command centers.",
      "For pen-and-paper examinations, our centers offer spacious, well-illuminated halls with fixed desk numbering, secure lock-and-key confidential strong rooms with dual-custody access, and dedicated frisking corridors.",
    ],
    keyOfferings: [
      "Fully Equipped Computer-Based Testing (CBT) Auditoriums",
      "Secure Strong Rooms with 24/7 CCTV & Armed Guard Coordination",
      "Dedicated High-Speed Gigabit LAN with Zero External Internet Leakage",
      "Tri-level Power Redundancy: Online UPS + Automatic Dual Diesel GenSets",
      "Separate Male/Female Frisking Enclosures with Handheld Metal Detectors (HHMD)",
      "Real-time IP CCTV Video Wall Feed for External Government Observers",
    ],
    infrastructureHighlights: [
      "Up to 1,500+ simultaneous CBT terminals in prime regional hubs",
      "Strict physical isolation between testing perimeter and public areas",
      "Disability-friendly ramps, tactile pathways, and dedicated special-needs desks",
    ],
    targetAudience:
      "National Testing Authorities, Staff Selection Commissions, Railway & Banking Boards, and State Public Service Commissions.",
  },
  {
    id: "5",
    slug: "supplies",
    title: "Educational Support Goods & Services Supply",
    shortDesc:
      "Tamper-evident examination stationery, high-security OMR answer sheets, institutional furniture, digital smart classroom aids, and school supplies.",
    iconName: "package",
    badge: "Secure Supply Chain",
    link: "/verticals#supplies",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Exam Sphere is a trusted vendor and distributor of specialized educational products and high-security examination consumables. We bridge the gap between quality manufacturing and institutional logistics.",
      "Our examination supplies include custom barcoded OMR answer sheets with anti-copy watermarks, tamper-evident security bags with unique serial tracking, personalized question booklets, and specialized test seal tapes.",
      "Furthermore, we supply educational institutions with state-of-the-art classroom furniture, science laboratory apparatus, robotics training kits, digital smart boards, and standardized student stationery kits.",
    ],
    keyOfferings: [
      "High-Precision Barcoded & Watermarked OMR Sheets (A4 & Custom)",
      "Tamper-Evident Security Courier Bags & Confidential Sealing Tape",
      "Pre-numbered Question Booklet Envelopes & Metal Trunk Box Seals",
      "Ergonomic Examination Desks, Benches, and Partition Screens",
      "STEM, Physics, Chemistry & Biology Laboratory Equipment Kits",
      "Digital Interactive Flat Panels, Audio Systems & Smart Podium Units",
    ],
    infrastructureHighlights: [
      "Direct manufacturing tie-ups ensuring ISO-compliant security stationery",
      "GPS-monitored armored container logistics for confidential supplies",
      "Rapid dispatch capabilities fulfilling bulk orders on short notice",
    ],
    targetAudience:
      "Schools, Colleges, Universities, Autonomous Examination Boards, and Education Foundations.",
  },
  {
    id: "6",
    slug: "training",
    title: "Training & Skill Development",
    shortDesc:
      "Targeted student aptitude coaching, educator professional development, digital examination readiness workshops, and vocational skill certifications.",
    iconName: "graduation",
    badge: "Empowerment & Growth",
    link: "/verticals#training",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Skill development is central to the Exam Sphere vision of Redefining Excellence. We provide practical, outcome-driven training modules that empower both students and academic professionals.",
      "For students, we deliver structured workshops on competitive test-taking strategies, speed mathematics, logical reasoning, and computer-based test familiarity to eliminate exam anxiety.",
      "For educators and test administrators, our certified training programs cover modern pedagogy, objective question item writing, anti-malpractice detection, and digital evaluation methodologies.",
    ],
    keyOfferings: [
      "Competitive Olympiad & Scholarship Exam Bootcamp for Students",
      "CBT Exam Familiarization & Stress-Free Assessment Workshops",
      "Teacher Professional Development on Question Item Design & Rubrics",
      "Invigilation Protocol & Examination Ethics Certification",
      "Youth Vocational IT & Data Entry Operator Training Modules",
      "Campus-to-Corporate Employability & Aptitude Enhancement Courses",
    ],
    infrastructureHighlights: [
      "Hybrid learning delivery: In-person masterclasses + digital LMS portal",
      "Real-world simulated mock tests under actual CBT lab conditions",
      "Industry-recognized certificates with verifiable QR integrity codes",
    ],
    targetAudience:
      "Aspiring students, in-service teachers, school administrators, and job-seekers seeking skill credentials.",
  },
];

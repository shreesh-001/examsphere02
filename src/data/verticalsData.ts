export interface VerticalData {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
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
      "School competitions in Math, Science, English, and Logic that test real understanding, with medals and verified certificates.",
    iconName: "trophy",
    link: "/olympiads",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Exam Sphere Olympiads help school students test their knowledge and build confidence. We organize friendly competitions in Science, Mathematics, English, Computers & AI, and General Aptitude for students from Class 1 to 12.",
      "Instead of testing simple memorization, our questions encourage students to think logically and solve everyday problems. Every student gets a clear report card showing their strengths and areas to improve.",
      "Top students receive medals, scholarships, learning gifts, and official certificates that can be verified online anytime.",
    ],
    keyOfferings: [
      "National Science Olympiad",
      "Mathematics & Logic Challenge",
      "English Reading & Grammar Challenge",
      "Computer & AI Olympiad",
      "Easy-to-read student scorecards and rankings",
      "Medals, certificates, and school trophies",
    ],
    infrastructureHighlights: [
      "Available both online on computers and on paper at schools",
      "Automated and fair checking with zero bias",
      "Fast results and downloadable certificates",
    ],
    targetAudience:
      "Schools, teachers, students, and parents looking for fair academic challenges.",
  },
  {
    id: "2",
    slug: "manpower",
    title: "Manpower Supply",
    shortDesc:
      "Trained and verified staff for exams, including invigilators, supervisors, computer lab helpers, and security staff.",
    iconName: "users",
    link: "/verticals#manpower",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Running smooth exams requires honest, dependable people. Exam Sphere provides verified and trained exam personnel who know how to manage test halls calmly and strictly.",
      "Every person on our team goes through background checks, identity verification, and hands-on training on exam rules, student checking, and handling emergencies.",
      "Whether you need 10 invigilators for a school test or over 500 staff for a large recruitment exam across multiple cities, we provide dependable teams on time.",
    ],
    keyOfferings: [
      "Exam center superintendents and chief observers",
      "Room invigilators and hall supervisors",
      "Computer lab technicians and network support staff",
      "Biometric attendance and ID checking operators",
      "Gate security guards and queue helpers",
      "Quick standby staff in case anyone is absent",
    ],
    infrastructureHighlights: [
      "Full background checks on every staff member",
      "Pre-exam briefings on rules and duties",
      "Backup teams on standby to avoid any delays",
    ],
    targetAudience:
      "Government exam bodies, universities, colleges, and testing organizations.",
  },
  {
    id: "3",
    slug: "recruitment",
    title: "Outsourcing Recruitment",
    shortDesc:
      "Complete help for hiring exams — from application forms and question papers to checking answer sheets and final lists.",
    iconName: "briefcase",
    link: "/verticals#recruitment",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Exam Sphere helps government departments, colleges, and private companies run their hiring tests smoothly from start to finish.",
      "We take care of every step: setting up online candidate registration, creating admit cards, making balanced question papers with subject teachers, managing the exam day, and checking results accurately.",
      "All question papers and candidate records are kept strictly secret and safe to make sure the hiring process is 100% fair and transparent.",
    ],
    keyOfferings: [
      "Simple online job application and fee portals",
      "Subject-wise question papers prepared by experienced teachers",
      "Roll number generation and admit card printing",
      "Computer and OMR answer checking with zero errors",
      "Candidate ID checking and document verification",
      "Clear merit lists and detailed test reports",
    ],
    infrastructureHighlights: [
      "Strict data privacy and password protection",
      "Sealed question papers opened only inside the exam room",
      "Automated checking system to prevent human bias",
    ],
    targetAudience:
      "Government departments, public boards, universities, banks, and companies.",
  },
  {
    id: "4",
    slug: "centers",
    title: "Government Exam Centers (Online & Offline)",
    shortDesc:
      "Clean, modern computer labs and exam halls with CCTV cameras, backup generators, and strict security checks.",
    iconName: "building",
    link: "/verticals#centers",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "We set up and manage high-quality exam centers for major state and central government tests, entrance exams, and certification drives.",
      "Our computer testing labs feature fast computers with private partitions so students cannot see each other's screens. The computers run on safe local networks without outside internet interference, backed by instant battery power and silent diesel generators.",
      "For pen-and-paper exams, we provide bright, quiet halls with clearly numbered desks, guarded storage rooms for question papers, and separate entry gates for boys and girls.",
    ],
    keyOfferings: [
      "Fast computer labs with private cubicles",
      "Locked strong rooms with 24/7 security guards",
      "Safe local networks with no external internet leaks",
      "Backup generators so exams never stop during power cuts",
      "Separate checking booths for male and female candidates with metal detectors",
      "CCTV screens for government observers to watch live",
    ],
    infrastructureHighlights: [
      "Large capacity with over 1,500 computers in our main hubs",
      "Strict boundaries so visitors cannot enter test areas",
      "Wheelchair ramps and accessible desks for students with disabilities",
    ],
    targetAudience:
      "National and state testing agencies, staff selection boards, and universities.",
  },
  {
    id: "5",
    slug: "supplies",
    title: "Educational Support Goods & Services Supply",
    shortDesc:
      "High-quality exam supplies like watermarked OMR sheets, tamper-proof bags, school desks, and laboratory items.",
    iconName: "package",
    link: "/verticals#supplies",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Exam Sphere supplies schools, colleges, and exam authorities with genuine, high-quality test stationery and classroom items.",
      "Our exam materials include barcoded OMR answer sheets that cannot be photocopied, tamper-proof courier envelopes that show immediately if someone tried to open them, pre-numbered question envelopes, and lock seals.",
      "We also supply durable classroom furniture, school desks, science laboratory equipment, and smart classroom boards to help institutions upgrade their facilities.",
    ],
    keyOfferings: [
      "Barcoded, easy-to-scan OMR answer sheets",
      "Tamper-proof envelopes and security sealing tape",
      "Numbered question paper boxes with metal seals",
      "Comfortable exam desks, benches, and room partitions",
      "Physics, Chemistry, and Biology lab apparatus",
      "Digital smart boards and classroom sound systems",
    ],
    infrastructureHighlights: [
      "Direct supply from trusted makers to guarantee quality",
      "Sealed transport for confidential question papers",
      "Quick delivery for urgent institutional orders",
    ],
    targetAudience:
      "Schools, colleges, autonomous exam boards, and educational foundations.",
  },
  {
    id: "6",
    slug: "training",
    title: "Training & Skill Development",
    shortDesc:
      "Practical workshops for students to prepare for exams, and training for teachers and exam invigilators.",
    iconName: "graduation",
    link: "/verticals#training",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Helping people learn and grow is at the heart of our motto, Redefining Excellence. We provide practical, step-by-step training for both students and educators.",
      "For students, we run friendly workshops on how to solve multiple-choice questions, tips for mental math, logical reasoning tricks, and how to take computer-based tests without stress.",
      "For teachers and test supervisors, we offer training on how to write good test questions, check papers fairly, spot cheating, and follow exam rules strictly.",
    ],
    keyOfferings: [
      "Exam preparation bootcamps for school students",
      "Mock tests to practice on real computers before actual exams",
      "Teacher workshops on designing fair and interesting test questions",
      "Training courses for exam invigilators and supervisors",
      "Basic computer skills and typing courses for youth",
      "Interview skills and confidence-building workshops",
    ],
    infrastructureHighlights: [
      "Hands-on practice in real computer labs",
      "Friendly trainers with real classroom experience",
      "Verifiable certificates for all who finish the training",
    ],
    targetAudience:
      "School students, school teachers, exam staff, and young job-seekers.",
  },
];

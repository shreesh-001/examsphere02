export interface TopPerformer {
  id: string;
  rank: number;
  name: string;
  class: string;
  school: string;
  city: string;
  subject: string;
  score: string;
  percentile: string;
  medal: "gold" | "silver" | "bronze" | "merit";
  certificateId: string;
}

export const topPerformersData: TopPerformer[] = [
  {
    id: "p1",
    rank: 1,
    name: "Aarav Sharma",
    class: "Class 10",
    school: "Delhi Public School",
    city: "Lucknow",
    subject: "National Science & Aptitude",
    score: "99/100",
    percentile: "99.92%",
    medal: "gold",
    certificateId: "ES-2024-OLY-1001",
  },
  {
    id: "p2",
    rank: 2,
    name: "Ananya Singh",
    class: "Class 8",
    school: "St. Xavier's High School",
    city: "Varanasi",
    subject: "Mathematics & Logic Challenge",
    score: "98/100",
    percentile: "99.65%",
    medal: "silver",
    certificateId: "ES-2024-OLY-1002",
  },
  {
    id: "p3",
    rank: 3,
    name: "Rohan Gupta",
    class: "Class 9",
    school: "Army Public School",
    city: "Prayagraj",
    subject: "Computer & AI Olympiad",
    score: "97/100",
    percentile: "99.30%",
    medal: "bronze",
    certificateId: "ES-2024-OLY-1003",
  },
  {
    id: "p4",
    rank: 4,
    name: "Priya Patel",
    class: "Class 11",
    school: "Central Academy",
    city: "Jaunpur",
    subject: "English Language Challenge",
    score: "96/100",
    percentile: "98.90%",
    medal: "merit",
    certificateId: "ES-2024-OLY-1004",
  },
  {
    id: "p5",
    rank: 5,
    name: "Vikram Joshi",
    class: "Class 7",
    school: "Sunbeam School",
    city: "Varanasi",
    subject: "National Science & Aptitude",
    score: "95/100",
    percentile: "98.45%",
    medal: "merit",
    certificateId: "ES-2024-OLY-1005",
  },
  {
    id: "p6",
    rank: 6,
    name: "Sneha Verma",
    class: "Class 12",
    school: "Modern Convent School",
    city: "Ayodhya",
    subject: "Mathematics & Logic Challenge",
    score: "94/100",
    percentile: "98.10%",
    medal: "merit",
    certificateId: "ES-2024-OLY-1006",
  },
];

export interface OlympiadCertificateRecord {
  certificateId: string;
  candidateName: string;
  programName: string;
  rollNumber: string;
  issueDate: string;
  scoreOrRank: string;
  grade: string;
  school: string;
  city: string;
  status: "verified" | "invalid";
}

export const olympiadCertificatesRegistry: Record<string, OlympiadCertificateRecord> = {
  "ES-2024-OLY-1001": {
    certificateId: "ES-2024-OLY-1001",
    candidateName: "Aarav Sharma",
    programName: "National Science & Aptitude Olympiad 2024",
    rollNumber: "ES-NSA-90214",
    issueDate: "15 August 2024",
    scoreOrRank: "All India Rank 1 (Score: 99/100)",
    grade: "Gold Medalist & National Topper",
    school: "Delhi Public School",
    city: "Lucknow",
    status: "verified",
  },
  "ES-2024-OLY-1002": {
    certificateId: "ES-2024-OLY-1002",
    candidateName: "Ananya Singh",
    programName: "Mathematics & Logic Challenge 2024",
    rollNumber: "ES-MLC-80145",
    issueDate: "20 August 2024",
    scoreOrRank: "All India Rank 2 (Score: 98/100)",
    grade: "Silver Medalist",
    school: "St. Xavier's High School",
    city: "Varanasi",
    status: "verified",
  },
  "ES-2024-OLY-1003": {
    certificateId: "ES-2024-OLY-1003",
    candidateName: "Rohan Gupta",
    programName: "Computer & AI Olympiad 2024",
    rollNumber: "ES-CAI-70231",
    issueDate: "25 August 2024",
    scoreOrRank: "All India Rank 3 (Score: 97/100)",
    grade: "Bronze Medalist",
    school: "Army Public School",
    city: "Prayagraj",
    status: "verified",
  },
  "ES-2024-OLY-1004": {
    certificateId: "ES-2024-OLY-1004",
    candidateName: "Priya Patel",
    programName: "English Language Challenge 2024",
    rollNumber: "ES-ELC-60412",
    issueDate: "28 August 2024",
    scoreOrRank: "State Rank 1 (Score: 96/100)",
    grade: "Merit Certificate of Distinction",
    school: "Central Academy",
    city: "Jaunpur",
    status: "verified",
  },
  "ES-2024-OLY-1005": {
    certificateId: "ES-2024-OLY-1005",
    candidateName: "Vikram Joshi",
    programName: "National Science & Aptitude Olympiad 2024",
    rollNumber: "ES-NSA-50119",
    issueDate: "15 August 2024",
    scoreOrRank: "State Rank 2 (Score: 95/100)",
    grade: "Merit Certificate of Honor",
    school: "Sunbeam School",
    city: "Varanasi",
    status: "verified",
  },
  "ES-2024-OLY-1006": {
    certificateId: "ES-2024-OLY-1006",
    candidateName: "Sneha Verma",
    programName: "Mathematics & Logic Challenge 2024",
    rollNumber: "ES-MLC-40982",
    issueDate: "20 August 2024",
    scoreOrRank: "All India Rank 5 (Score: 94/100)",
    grade: "Merit Certificate of Distinction",
    school: "Modern Convent School",
    city: "Ayodhya",
    status: "verified",
  },
};

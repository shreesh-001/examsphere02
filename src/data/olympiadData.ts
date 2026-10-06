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

export const topPerformersData: TopPerformer[] = [];

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

export const olympiadCertificatesRegistry: Record<string, OlympiadCertificateRecord> = {};

export interface PartnerInstitution {
  id: string;
  name: string;
  category: string;
  location: string;
  fullAddress: string;
  established?: string;
  rating?: string;
  ratingCount?: string;
  badge?: string;
  description: string;
  link: string;
  isExternal?: boolean;
}

export const partnersData: PartnerInstitution[] = [
  {
    id: "toss-college-of-pharmacy",
    name: "Toss College Of Pharmacy",
    category: "Colleges | Pharmacy Colleges",
    location: "Teonga, Pratapgarh, Uttar Pradesh",
    fullAddress:
      "Pratapgarh City, Pure Mustafa Road, Teonga, Pratapgarh-Uttar Pradesh – 230002, Uttar Pradesh",
    established: "2024",
    rating: "5.0",
    ratingCount: "5 Ratings",
    badge: "Pharmacy College Partner",
    description:
      "A premier pharmaceutical education institute in Pratapgarh, Uttar Pradesh, partnered with Exam Sphere for examination center administration, academic assessments, and educational skill initiatives.",
    link: "https://www.justdial.com/Pratapgarh-Uttar-Pradesh/Toss-College-Of-Pharmacy-Pratapgarh-City-Teonga/9999P5342-5342-250710212754-R5X4_BZDET",
    isExternal: true,
  },
];

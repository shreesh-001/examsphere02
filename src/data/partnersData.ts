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
  linkText?: string;
  isExternal?: boolean;
  type?: "academic" | "legal" | "corporate";
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
    linkText: "View on Justdial",
    isExternal: true,
    type: "academic",
  },
  {
    id: "jsv-associates",
    name: "JSV Associates",
    category: "Law Firm | Legal Advisory",
    location: "Lucknow, Uttar Pradesh",
    fullAddress: "Lucknow, Uttar Pradesh – 226006, India",
    badge: "Law Firm Partner",
    description:
      "A respected legal advisory firm founded by Adv. Kaushalendra Pratap Rai, partnering with Exam Sphere LLP to ensure complete statutory compliance, governance, contract integrity, and institutional legal advisory across all examination operations.",
    link: "/contact?subject=Legal%20Partnership%20Inquiry%20-%20JSV%20Associates",
    linkText: "Contact Partner",
    isExternal: false,
    type: "legal",
  },
];

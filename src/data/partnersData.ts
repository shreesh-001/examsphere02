export interface PartnerInstitution {
  id: string;
  name: string;
  category: string;
  location: string;
  fullAddress: string;
  chamberAddress?: string;
  phone?: string;
  phoneSecondary?: string;
  email?: string;
  specialization?: string;
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
    category: "Law Firm | Criminal, Taxation & Corporate Advisory",
    location: "Prayagraj & Allahabad High Court, UP",
    fullAddress:
      "First Floor, 61D/9A/2G, Ram Chandra Puram, Gali No-2, Salori Shukla Market, Near Taxi Stand, Prayagraj – 211004",
    chamberAddress:
      "Chamber No. 31, Old Building, Allahabad High Court, Dist. Prayagraj – 211017",
    phone: "+91 7007122489",
    phoneSecondary: "+91 9554503322",
    email: "kprai5100@gmail.com",
    specialization: "Criminal & Taxation • Allahabad High Court Litigation",
    badge: "Law Firm Partner",
    description:
      "A premier legal advisory and litigation firm founded by Adv. Kaushalendra Pratap Rai (Advocate, Allahabad High Court). Partnering with Exam Sphere LLP to ensure complete statutory compliance, governance, contract integrity, and institutional legal advisory across all examination operations.",
    link: "/contact?subject=Legal%20Partnership%20Inquiry%20-%20JSV%20Associates",
    linkText: "Contact Partner",
    isExternal: false,
    type: "legal",
  },
];

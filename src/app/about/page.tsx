import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Target,
  Eye,
  BookOpen,
  Scale,
  Globe,
  Trophy,
  GraduationCap,
  MapPin,
  ExternalLink,
  Star,
  Building,
  ArrowRight,
  Mail,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { partnersData } from "@/data/partnersData";

export const metadata: Metadata = {
  title: "About Us | Exam Sphere - Redefining Excellence",
  description:
    "Learn about Exam Sphere, our mission for honest and fair exams, our core values, and our commitment to student excellence.",
};

const coreValues = [
  {
    icon: Scale,
    title: "Complete Honesty & Fairness",
    quadrant: "Emblem Quadrant I",
    desc: "Every test and evaluation we manage is 100% fair. We have zero tolerance for cheating, paper leaks, or unfair practices.",
  },
  {
    icon: BookOpen,
    title: "Real Understanding",
    quadrant: "Emblem Quadrant II",
    desc: "Our questions test real concepts and clear thinking, helping students understand subjects deeply rather than just memorizing answers.",
  },
  {
    icon: Globe,
    title: "High Standards",
    quadrant: "Emblem Quadrant III",
    desc: "We follow strict national guidelines. Our centers have fast computers, backup power generators, and complete CCTV coverage.",
  },
  {
    icon: Trophy,
    title: "Rewarding Hard Work",
    quadrant: "Emblem Quadrant IV",
    desc: "We celebrate student achievement with authentic medals, official certificates, and scholarships that help build bright futures.",
  },
];

interface TeamMember {
  name: string;
  designation: string;
  initials: string;
  image?: string;
  linkedin?: string;
  email?: string;
  description: string;
}

const coreTeamData: TeamMember[] = [
  {
    name: "Gyanve Sharma",
    designation: "Managing Director (Operations)",
    initials: "GS",
    image: "/images/gyanve-sharma.jpg",
    linkedin:
      "https://www.linkedin.com/in/gyanvesharma?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    email: "Gyanves@gmail.com",
    description:
      "Directs nationwide examination operations, center administration, and logistical workflows with a commitment to process excellence and precision.",
  },
  {
    name: "Tanisha Pathak",
    designation: "Academic Head",
    initials: "TP",
    image: "/images/tanisha-pathak.jpg",
    description:
      "Oversees academic curriculum design, evaluation benchmarks, and quality assurance across school Olympiads and assessment programs.",
  },
  {
    name: "Disha Singh",
    designation: "Coordinator and Accounts Head",
    initials: "DS",
    image: "/images/disha-singh-srinet.jpg",
    description:
      "Leads institutional coordination, stakeholder communications, and financial governance to ensure seamless operational alignment.",
  },
  {
    name: "Shreesh",
    designation: "Technical Head",
    initials: "S",
    image: "/images/shreesh.jpg",
    description:
      "Drives technological architecture, digital testing platforms, data security protocols, and software infrastructure across all services.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-18 lg:py-22 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            About Exam Sphere
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
            Redefining Excellence in{" "}
            <span className="text-gold-400">Examinations & Student Growth</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We help schools, colleges, and government agencies run fair, secure exams while giving students genuine opportunities to test their knowledge and shine.
          </p>
        </div>
      </section>

      {/* 2. Company Story & Emblem Significance */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-gold-600 tracking-wider uppercase block mb-2">
                Our Story & Purpose
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-5">
                Built to Ensure Every Student Gets a Fair and Honest Test
              </h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Students work hard all year long, and they deserve an exam system they can completely trust. Founded by <strong>Ashwani Kumar</strong> and <strong>Uvesh Ahmad</strong>, Exam Sphere was created to solve common exam problems like paper leaks, poor computer setups, and unverified results.
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Registered Office Address: 529/297, PAC Gate, Raheem Nagar, Mahanagar, Lucknow, Uttar Pradesh – 226006. Exam Sphere provides high-quality exam solutions. We organize school Olympiads, set up modern computer test centers, provide honest exam staff, and supply tamper-proof exam stationery. Our core promise is simple: <em>Redefining Excellence at every step</em>.
              </p>

              {/* Vision and Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-sm mb-2">
                    <Target className="w-5 h-5 text-gold-600" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be the most trusted exam and assessment partner in India, known for honest tests, clean facilities, and genuine student rewards.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-sm mb-2">
                    <Eye className="w-5 h-5 text-gold-600" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To deliver safe test centers, well-trained invigilators, thoughtful Olympiad questions, and secure materials that ensure 100% integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Emblem Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-gradient-to-b from-navy-900 to-navy-950 text-white rounded-3xl p-8 border border-gold-500/40 shadow-2xl relative text-center w-full max-w-md">
                <div className="relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden border-4 border-gold-400 bg-white shadow-xl">
                  <Image
                    src="/images/logo.jpg"
                    alt="Exam Sphere Emblem"
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wider mb-1">
                  The Exam Sphere Emblem
                </h3>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-4">
                  Redefining Excellence
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Our emblem represents our promise to education: the central shield protects fairness; the four quadrants symbolize knowledge, justice, high standards, and merit; while the torch and laurel wreath celebrate student success.
                </p>

                <div className="grid grid-cols-2 gap-2 text-left text-xs pt-4 border-t border-navy-800">
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>Fair Tests</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>Secure Centers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>Verified Staff</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>Online Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (4 Pillars) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Principles"
            title="The Four Pillars of Exam Sphere"
            description="Our core values guide how we build tests, choose staff, and protect student results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-gold-500 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 text-navy-900 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gold-600 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {val.quadrant}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-navy-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                    <span>Guaranteed Practice</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Founders */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Our Founders"
            description="Dedicated to fostering trust, academic transparency, and modern examination infrastructure across India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:border-gold-500 hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gold-400 shadow-md bg-navy-900 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/ashwani-kumar.jpg"
                  alt="Ashwani Kumar - Co-Founder and CEO"
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1">
                Ashwani Kumar
              </h3>
              <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
                Co-Founder and CEO
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated to setting the highest benchmarks in assessment integrity, nationwide examination logistics, and transparent academic testing.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:border-gold-500 hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gold-400 shadow-md bg-navy-900 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/uvesh-ahmad.jpg"
                  alt="Uvesh Ahmad - Co-founder and Managing Partner"
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1">
                Uvesh Ahmad
              </h3>
              <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
                Co-founder and Managing Partner
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Committed to delivering robust digital and physical exam infrastructure, student empowerment, and error-free evaluation systems.
              </p>
            </div>
          </div>

          {/* Core Team Subsection */}
          <div className="mt-16 sm:mt-20 pt-14 sm:pt-16 border-t border-slate-200/80">
            <SectionHeading
              eyebrow="Core Team"
              title="Our Core Team"
              description="The dedicated team driving academic excellence, operational efficiency, and technological innovation."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {coreTeamData.map((member) => (
                <div
                  key={member.name}
                  className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 text-center hover:border-gold-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {member.image ? (
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gold-400 shadow-md bg-navy-900 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.designation}`}
                          fill
                          sizes="(max-width: 640px) 96px, 112px"
                          className="object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-navy-900 text-gold-400 font-serif text-2xl sm:text-3xl font-bold flex items-center justify-center mx-auto mb-4 border-2 border-gold-400 shadow-md group-hover:scale-105 transition-transform duration-300">
                        {member.initials}
                      </div>
                    )}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-3 min-h-[2.5rem] flex items-center justify-center">
                      {member.designation}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {(member.linkedin || member.email) && (
                    <div className="pt-4 mt-4 border-t border-slate-200/80 flex flex-col items-center gap-2">
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn Profile`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-semibold transition-all duration-200 shadow-sm"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                            <span>LinkedIn</span>
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            aria-label={`Email ${member.name}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-navy-900 text-xs font-semibold transition-all duration-200 border border-slate-300 shadow-sm"
                          >
                            <Mail className="w-3.5 h-3.5 text-gold-600" />
                            <span>Email</span>
                          </a>
                        )}
                      </div>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-[11px] text-slate-500 hover:text-navy-900 transition-colors truncate max-w-full"
                        >
                          {member.email}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Institutional Partners */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Network"
            title="Our Partners"
            description="Collaborating with reputed educational institutions, colleges, and examination centers to ensure fair assessments and transparent test administration."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Partner Cards */}
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-gold-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-50 text-gold-700 border border-gold-200">
                      <GraduationCap className="w-3.5 h-3.5 text-gold-600" />
                      {partner.badge || "Academic Partner"}
                    </span>
                    {partner.rating && (
                      <div className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                        <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                        <span>{partner.rating} Rating ({partner.ratingCount || "Claimed"})</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-2">
                    {partner.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4">
                    <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>{partner.location} {partner.established ? `• Est. ${partner.established}` : ""}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 mb-6">
                    <strong className="text-slate-800 block mb-0.5">Address:</strong>
                    {partner.fullAddress}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-850 active:scale-95 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group/btn"
                  >
                    <span>View on Justdial</span>
                    <ExternalLink className="w-4 h-4 text-gold-400 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>

                  <span className="text-xs text-slate-500">
                    Verified Institutional Partner
                  </span>
                </div>
              </div>
            ))}

            {/* Partnership Network Info Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 border border-gold-400/30 flex items-center justify-center mb-5">
                  <Building className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  Partner Your College or School
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Join Exam Sphere&apos;s verified testing network. We collaborate with degree colleges, polytechnics, and schools to conduct secure computer-based and offline examinations.
                </p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>Host National & State Examination Centers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>Conduct School & College Talent Olympiads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>Educational Support Goods & Services</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-navy-800">
                <Link
                  href="/contact?subject=College%20Partnership%20Inquiry"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 active:scale-95 text-navy-950 font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-gold transition-all"
                >
                  <span>Become a Partner</span>
                  <ArrowRight className="w-4 h-4 text-navy-950" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

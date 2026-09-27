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
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | Exam Sphere - Redefining Excellence",
  description:
    "Learn about Exam Sphere, our founding story, vision, core values, leadership team, and our commitment to fair assessments and examination integrity.",
};

const leadershipTeam = [
  {
    name: "Dr. Arvind K. Mishra",
    role: "Founder & Managing Director",
    bio: "Former academic council advisor with over 22 years of leadership in competitive testing frameworks, institutional governance, and youth skill development.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    education: "Ph.D. in Educational Measurement, M.Ed.",
  },
  {
    name: "Rajeshwar Singh Chauhan",
    role: "Director of Examination Operations & CBT Security",
    bio: "Specializes in high-stakes computer-based testing, cyber defense, and anti-leak command control systems across northern India.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    education: "M.Tech in Network Security & Information Systems",
  },
  {
    name: "Dr. Sunita V. Deshmukh",
    role: "Chief Academic Officer & Olympiad Dean",
    bio: "Curates standard-setting question banks, psychometric item designs, and national Olympiad curricula across STEM subjects.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    education: "Ph.D. in Mathematical Sciences & Cognitive Psychology",
  },
  {
    name: "Vikramaditya Pandey",
    role: "Head of Manpower & Workforce Logistics",
    bio: "Directs background verification, recruitment, and field training for 2,000+ verified test invigilators and center proctors.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    education: "MBA in Human Resource Management & Operations",
  },
];

const coreValues = [
  {
    icon: Scale,
    title: "Uncompromising Integrity",
    quadrant: "Emblem Quadrant I",
    desc: "Every assessment, recruitment screening, and certification we conduct is anchored in absolute fairness, strict security, and zero tolerance for malpractices.",
  },
  {
    icon: BookOpen,
    title: "Academic Depth & Rigor",
    quadrant: "Emblem Quadrant II",
    desc: "Our Olympiads and tests move beyond rote memory, testing conceptual clarity, analytical problem solving, and real-world intellectual acumen.",
  },
  {
    icon: Globe,
    title: "National & Global Standards",
    quadrant: "Emblem Quadrant III",
    desc: "Benchmarking our CBT infrastructure, data encryption, and logistics against top international testing standards and ISO protocols.",
  },
  {
    icon: Trophy,
    title: "Celebrating Student Merit",
    quadrant: "Emblem Quadrant IV",
    desc: "Empowering every learner with verifiable recognition, merit awards, and skill development that unlocks lifelong opportunities.",
  },
];

const milestones = [
  { year: "2018", title: "Inception in Shahganj", desc: "Started as a regional educational consulting and talent assessment forum in Jaunpur, UP." },
  { year: "2020", title: "CBT Infrastructure Rollout", desc: "Launched dedicated high-security Computer-Based Test centers with offline LAN capabilities." },
  { year: "2022", title: "Pan-State Manpower Division", desc: "Established verified workforce deployment spanning 25+ districts for major government recruitment drives." },
  { year: "2024", title: "Exam Sphere Olympiads", desc: "Crossed 150,000+ assessed students across North India with tamper-proof digital certification." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Hero Banner */}
      <section className="bg-navy-950 text-white py-20 lg:py-24 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            About Exam Sphere
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Redefining Excellence in{" "}
            <span className="text-gold-400">Examinations & Talent Discovery</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Exam Sphere is an institutional leader founded to eliminate ambiguities in testing, deliver high-security examination infrastructure, and empower ambitious learners with credible national recognition.
          </p>
        </div>
      </section>

      {/* 2. Company Story & Emblem Significance */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-gold-600 tracking-wider uppercase block mb-2">
                Our Genesis & Mission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Built to Restore Absolute Faith in Competitive Examinations
              </h2>

              <p className="text-base text-slate-700 leading-relaxed mb-5">
                The modern examination landscape faces daunting challenges: question leakage concerns, logistics bottlenecks, lack of standardized invigilation, and unverified credentials. Exam Sphere was founded with a singular conviction: that a student’s honest hard work deserves an infallible, transparent evaluation ecosystem.
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                From our strategic headquarters in Shahganj, Jaunpur (Uttar Pradesh), we have grown into a multi-vertical organization spanning school Olympiad assessments, government computer-based testing infrastructure, vetted manpower staffing, recruitment outsourcing, and tamper-proof educational logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-sm mb-1">
                    <Target className="w-4 h-4 text-gold-500" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be India’s most trusted examination agency and assessment benchmark, fostering meritocracy through technology and ethical rigor.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 font-bold text-navy-900 text-sm mb-1">
                    <Eye className="w-4 h-4 text-gold-500" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Delivering zero-defect exam centers, verified invigilation workforce, conceptual Olympiads, and tamper-evident materials that guarantee 100% integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Emblem Breakdown Card */}
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
                  Symbolism of Our Crest
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Every element in our circular emblem symbolizes institutional excellence: the shield represents guardianship of fairness; the four quadrants embody global standards, knowledge, justice, and triumph; while the torch and laurel wreath celebrate enlightened success.
                </p>

                <div className="bg-navy-800/80 rounded-xl p-4 border border-navy-700 text-left text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span className="font-semibold text-slate-200">ISO 9001:2015</span>
                    <span className="text-slate-400">Quality Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span className="font-semibold text-slate-200">ISO 27001</span>
                    <span className="text-slate-400">Information Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (4 Pillars) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ethical Foundation"
            title="Our Four Pillars of Institutional Credibility"
            description="Our values dictate how we design assessments, screen invigilators, and safeguard examination data."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-gold-500 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-13 h-13 p-3 rounded-xl bg-navy-50 border border-navy-100 text-navy-900 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-gold-600 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {val.quadrant}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-navy-900 mb-3">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-navy-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                    <span>Guaranteed SOP</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Governance */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Executive Leadership"
            title="Guided by Assessment Pioneers & Operations Leaders"
            description="Our multidisciplinary board combines decades of expertise in psychometric testing, cyber security, examination logistics, and pedagogy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-500 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 w-full bg-navy-950 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-gold-300 block">
                      {member.education}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-gold-600 mb-3 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Executive Board</span>
                    <span className="text-navy-900 font-semibold flex items-center gap-1">
                      Exam Sphere
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Milestones Timeline */}
      <section className="py-20 bg-navy-900 text-white border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones of Growth & Credibility"
            description="How Exam Sphere has grown from a regional assessment forum to a comprehensive examinations partner."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-navy-950/80 border border-navy-700/80 rounded-2xl p-6 relative hover:border-gold-500 transition-colors"
              >
                <div className="text-2xl font-serif font-black text-gold-400 mb-2">
                  {m.year}
                </div>
                <h4 className="font-bold text-base text-white mb-2">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-16 bg-gold-500 text-navy-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Partner With a Testing Organization Committed to Excellence
          </h2>
          <p className="text-navy-900 text-base max-w-2xl mx-auto mb-8 font-medium">
            Whether you need turnkey exam center infrastructure, invigilation staffing, or talent Olympiads for your students, we are ready to assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-navy-950 hover:bg-navy-900 text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-xl transition-all"
            >
              Contact Our Team
            </Link>
            <Link
              href="/verticals"
              className="bg-white hover:bg-slate-50 text-navy-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-md transition-all border border-navy-950/20"
            >
              Explore All 6 Verticals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

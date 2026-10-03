import React from "react";
import Image from "next/image";
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
                Students work hard all year long, and they deserve an exam system they can completely trust. Founded by <strong>Ashwani Kumar</strong> and <strong>Owesh Ahmad</strong>, Exam Sphere was created to solve common exam problems like paper leaks, poor computer setups, and unverified results.
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
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:border-gold-500 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-navy-900 text-gold-400 font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-4 border-2 border-gold-400 shadow-md">
                AK
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1">
                Ashwani Kumar
              </h3>
              <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
                Founder
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated to setting the highest benchmarks in assessment integrity, nationwide examination logistics, and transparent academic testing.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:border-gold-500 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-navy-900 text-gold-400 font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-4 border-2 border-gold-400 shadow-md">
                OA
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1">
                Owesh Ahmad
              </h3>
              <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-3">
                Founder
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Committed to delivering robust digital and physical exam infrastructure, student empowerment, and error-free evaluation systems.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  ShieldCheck,
  CheckCircle2,
  Download,
  School,
  Send,
  BookOpen,
  Award,
  Users,
} from "lucide-react";
import OlympiadPortalCard from "./OlympiadPortalCard";

const disciplines = [
  {
    title: "National Science Olympiad",
    subject: "science",
    icon: "🔬",
    classes: "Class 1 to 12",
    description:
      "Tests scientific curiosity, experimental reasoning, and understanding of everyday physical and biological phenomena.",
    highlights: ["Physics, Chemistry & Biology", "Reasoning & Daily Science", "Age-appropriate levels"],
  },
  {
    title: "Mathematics & Logic Challenge",
    subject: "mathematics",
    icon: "📐",
    classes: "Class 1 to 12",
    description:
      "Encourages logical problem-solving, pattern identification, and numerical fluency instead of rote formula memorization.",
    highlights: ["Mental Math & Geometry", "Puzzles & Sequences", "Practical Word Problems"],
  },
  {
    title: "Computer & AI Olympiad",
    subject: "computer",
    icon: "💻",
    classes: "Class 3 to 12",
    description:
      "Equips students for the digital world with questions on computational logic, algorithms, internet safety, and AI fundamentals.",
    highlights: ["Logical Algorithms", "Digital Literacy & Coding Basics", "Artificial Intelligence Concepts"],
  },
  {
    title: "English Language Challenge",
    subject: "english",
    icon: "📚",
    classes: "Class 1 to 12",
    description:
      "Develops vocabulary, reading comprehension, grammar accuracy, and analytical comprehension for confident communication.",
    highlights: ["Reading Comprehension", "Vocabulary & Grammar", "Contextual Usage"],
  },
];

const olympiadHighlights = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
    title: "100% Fair & Transparent",
    desc: "Strictly monitored examinations with encrypted evaluation and zero bias.",
  },
  {
    icon: <Award className="w-6 h-6 text-gold-500" />,
    title: "Medals, Trophies & Merit",
    desc: "National, state, and school-level medals with official verifiable certificates.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-gold-500" />,
    title: "Conceptual Skill Reports",
    desc: "Detailed diagnostic scorecards identifying strengths and areas to grow.",
  },
  {
    icon: <Users className="w-6 h-6 text-gold-500" />,
    title: "Hassle-Free School Setup",
    desc: "Exam Sphere provides question papers, OMR sheets, evaluation, and awards.",
  },
];

export default function OlympiadsClient() {
  // Registration Form State
  const [regForm, setRegForm] = useState({
    schoolName: "",
    coordinatorName: "",
    email: "",
    phone: "",
    city: "",
    estimatedStudents: "50-100",
  });
  const [regSubmitted, setRegSubmitted] = useState(false);
  const [isSubmittingReg, setIsSubmittingReg] = useState(false);

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingReg(true);
    setTimeout(() => {
      setIsSubmittingReg(false);
      setRegSubmitted(true);
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* 1. HERO HEADER */}
      <section className="bg-navy-950 text-white pt-18 pb-24 lg:pt-24 lg:pb-32 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <Trophy className="w-3.5 h-3.5 text-gold-400" />
            Exam Sphere Olympiads
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
            Celebrating Real Learning &{" "}
            <span className="text-gold-400">Student Achievement</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            School competitions in Science, Mathematics, Computer & AI, and English. Download certificates directly or view state and national rankings below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <a
              href="#portal"
              className="bg-gold-500 hover:bg-gold-400 active:scale-95 text-navy-950 font-bold px-6 py-3 rounded-full shadow-gold hover:shadow-gold-lg transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Student Portal (Certificates & Ranks)</span>
            </a>
            <a
              href="#subjects"
              className="bg-navy-850 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-full border border-navy-700 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>Explore Subjects</span>
            </a>
            <a
              href="#register-school"
              className="bg-navy-900 hover:bg-navy-800 text-slate-200 font-semibold px-6 py-3 rounded-full border border-navy-700 transition-all flex items-center gap-2"
            >
              <School className="w-4 h-4 text-gold-400" />
              <span>Register School</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. OLYMPIAD STUDENT PORTAL (MATCHING SCREENSHOT IN FULL-PAGE VIEW) */}
      <section id="portal" className="py-12 lg:py-16 -mt-16 sm:-mt-20 relative z-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <OlympiadPortalCard defaultTab="rankings" />
        </div>
      </section>

      {/* 3. WHY PARTICIPATE HIGHLIGHTS */}
      <section className="py-14 lg:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
              Excellence & Integrity
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-3">
              Why Schools & Students Trust Exam Sphere
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We make academic competitions fair, rewarding, and inspiring for every learner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {olympiadHighlights.map((hl, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-gold-400 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {hl.icon}
                </div>
                <h3 className="font-serif font-bold text-navy-950 text-base mb-1.5">
                  {hl.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OLYMPIAD DISCIPLINES & SYLLABUS */}
      <section id="subjects" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
              Four Core Competitions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-3">
              Explore Our Olympiad Subjects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Designed by experienced educators to evaluate understanding, critical logic, and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disciplines.map((d, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{d.icon}</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-navy-900">
                      {d.title}
                    </h3>
                    <span className="text-xs text-gold-700 font-bold">
                      Eligibility: {d.classes}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {d.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                  {d.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-2.5 py-1 rounded-lg bg-navy-50 text-navy-900 text-xs font-medium"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SCHOOL REGISTRATION FORM */}
      <section id="register-school" className="py-16 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 border border-navy-800 shadow-2xl">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block mb-1">
                School Partnerships
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Register Your School for Exam Sphere Olympiads
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Empower your students with national recognition. We provide test papers, guidelines, answer evaluation, medals, and downloadable certificates.
              </p>
            </div>

            {regSubmitted ? (
              <div className="bg-emerald-900/60 border border-emerald-500 rounded-2xl p-6 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  Registration Request Submitted!
                </h3>
                <p className="text-xs sm:text-sm text-slate-200">
                  Thank you. Our school coordinator team will get in touch with your institution within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      School Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={regForm.schoolName}
                      onChange={(e) =>
                        setRegForm({ ...regForm, schoolName: e.target.value })
                      }
                      placeholder="e.g. Delhi Public School"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Coordinator / Principal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={regForm.coordinatorName}
                      onChange={(e) =>
                        setRegForm({
                          ...regForm,
                          coordinatorName: e.target.value,
                        })
                      }
                      placeholder="e.g. Mrs. Sunita Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={regForm.email}
                      onChange={(e) =>
                        setRegForm({ ...regForm, email: e.target.value })
                      }
                      placeholder="school@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regForm.phone}
                      onChange={(e) =>
                        setRegForm({ ...regForm, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      City / District *
                    </label>
                    <input
                      type="text"
                      required
                      value={regForm.city}
                      onChange={(e) =>
                        setRegForm({ ...regForm, city: e.target.value })
                      }
                      placeholder="e.g. Jaunpur, UP"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Expected Student Count
                    </label>
                    <select
                      value={regForm.estimatedStudents}
                      onChange={(e) =>
                        setRegForm({
                          ...regForm,
                          estimatedStudents: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="50-100">50 - 100 Students</option>
                      <option value="100-300">100 - 300 Students</option>
                      <option value="300-500">300 - 500 Students</option>
                      <option value="500+">500+ Students</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 text-center sm:text-left">
                    We will supply detailed syllabus, mock tests, and coordinator guidelines.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmittingReg}
                    className="bg-gold-500 hover:bg-gold-400 active:scale-95 text-navy-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-gold transition-all cursor-pointer disabled:opacity-50 inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    {isSubmittingReg ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Registration</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Return to Verticals Footer */}
      <div className="py-8 bg-slate-100 text-center border-t border-slate-200">
        <Link
          href="/verticals"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
        >
          <span>← Back to All 6 Services</span>
        </Link>
      </div>
    </div>
  );
}

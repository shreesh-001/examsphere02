"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  FileText,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import OlympiadPortalCard from "./OlympiadPortalCard";

interface BrochurePage {
  pageNumber: number;
  title: string;
  tabLabel: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
}

const brochurePages: BrochurePage[] = [
  {
    pageNumber: 1,
    title: "Exam Sphere Olympiads — Beyond Textbooks. Beyond Limits.",
    tabLabel: "1. Cover & Overview",
    category: "Academic Programme",
    description:
      "A learning-first academic challenge for curious minds in Classes I–XII across School, District, State and National levels.",
    highlights: [
      "School students in Classes I–XII eligibility",
      "6 Disciplines: Mathematics, Science, English, Logical Reasoning, Computer & GK",
      "Official Academic Initiative by EXAM SPHERE LLP",
    ],
    image: "/images/brochure/page-1.jpg",
  },
  {
    pageNumber: 2,
    title: "Learning Beyond the Classroom & Our Core Values",
    tabLabel: "2. Vision & Philosophy",
    category: "Pedagogy & Values",
    description:
      "A platform for students to apply what they learn, think logically, and discover their strengths with honest diagnostic feedback.",
    highlights: [
      "Conceptual Learning: understand the 'why' behind the 'what'",
      "Logical Growth: build reasoning and analytical skills early",
      "Detailed 8-Page Student Performance Analysis Report (SPAR)",
      "Strict Code: Fairness First, Academic Integrity & Zero Data Selling",
    ],
    image: "/images/brochure/page-2.jpg",
  },
  {
    pageNumber: 3,
    title: "Four Progressive Levels, Advancement & Awards",
    tabLabel: "3. Levels & Awards",
    category: "Advancement & Prizes",
    description:
      "A transparent progression pathway rewarding students with medals, digital devices, fee waivers, and course sponsorships.",
    highlights: [
      "Level 1 (School): Gold, Silver & Bronze Medals + District Fee Waiver",
      "Level 2 (District): Laptops, Tablets, Mobile Phones + Admission Discounts",
      "Level 3 (State): Partner Institution Course Sponsorships + Special Gifts",
      "Level 4 (National): Highest Academic Honours & Session Recognition",
    ],
    image: "/images/brochure/page-3.jpg",
  },
  {
    pageNumber: 4,
    title: "Subjects, Class Eligibility & Suggested Exam Structure",
    tabLabel: "4. Subjects & Structure",
    category: "Curriculum & Assessment",
    description:
      "Choose from 6 subjects tailored to curriculum syllabi with standard multiple-choice OMR evaluation.",
    highlights: [
      "6 Subjects: ESMO, ESSO, ESEO, ESLRO, ESCO & ESGKO",
      "60 Questions • 60 Minutes • 1 mark each",
      "Bilingual Testing in Hindi and English",
      "Conducted safely on participating school premises",
    ],
    image: "/images/brochure/page-4.jpg",
  },
  {
    pageNumber: 5,
    title: "Participation, Registration & Educator Helplines",
    tabLabel: "5. Registration & Support",
    category: "Operations & Timeline",
    description:
      "End-to-end guidance from school coordination and student registration to rapid 15-day result publication.",
    highlights: [
      "Simple 5-Step Process: Visit → Select → Review → Pay → Save",
      "Admit cards issued 2 days prior to Olympiad session",
      "24×7 Helpdesk and Educator Coordination Support",
      "Direct Support: support@examspheregroup.in | 8881088575",
    ],
    image: "/images/brochure/page-5.jpg",
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
  const [activeBrochurePage, setActiveBrochurePage] = useState(1);

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
            School competitions for Classes I–XII in Mathematics, Science, English, Logical Reasoning, Computer, and General Knowledge. Download certificates, explore rankings, or view the official brochure below.
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
              href="#brochure"
              className="bg-navy-850 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-full border border-navy-700 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-gold-400" />
              <span>Official Brochure</span>
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

      {/* 4. OFFICIAL OLYMPIAD BROCHURE SECTION */}
      <section id="brochure" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-24">
        {/* Anchor for backward compatibility with #subjects */}
        <div id="subjects" className="-top-24 relative" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
              Official Academic Programme
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-3">
              Official Olympiad Brochure
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Explore the official guide for Exam Sphere Olympiads — covering our 6 academic disciplines, 4 progressive competition levels, rewarding prizes, and student evaluation methodology.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/Exam-Sphere-Olympiad-Brochure.pdf"
                download="Exam-Sphere-Olympiad-Brochure.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm shadow-gold transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure (PDF)</span>
              </a>
              <a
                href="/Exam-Sphere-Olympiad-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm border border-navy-700 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4 text-gold-400" />
                <span>Open in New Tab</span>
              </a>
              <a
                href="#register-school"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-navy-900 font-semibold text-xs sm:text-sm border border-slate-300 transition-all duration-200"
              >
                <School className="w-4 h-4 text-gold-600" />
                <span>Register Your School</span>
              </a>
            </div>
          </div>

          {/* Interactive Brochure Viewer */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12">
            {/* Viewer Navigation Tabs Header */}
            <div className="bg-navy-950 px-4 sm:px-6 py-3 border-b border-navy-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-semibold">
                <FileText className="w-4 h-4 text-gold-400" />
                <span>Document Preview</span>
                <span className="hidden sm:inline text-slate-400 font-normal">
                  — Page {activeBrochurePage} of {brochurePages.length}
                </span>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveBrochurePage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={activeBrochurePage === 1}
                  aria-label="Previous Page"
                  className="p-1.5 rounded-lg bg-navy-900 text-slate-300 hover:text-white hover:bg-navy-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-gold-400 px-2">
                  {activeBrochurePage} / {brochurePages.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveBrochurePage((prev) =>
                      Math.min(brochurePages.length, prev + 1)
                    )
                  }
                  disabled={activeBrochurePage === brochurePages.length}
                  aria-label="Next Page"
                  className="p-1.5 rounded-lg bg-navy-900 text-slate-300 hover:text-white hover:bg-navy-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tab Pills for Fast Page Switching */}
            <div className="bg-slate-100 p-2 sm:p-3 border-b border-slate-200 flex overflow-x-auto gap-2 no-scrollbar">
              {brochurePages.map((page) => (
                <button
                  key={page.pageNumber}
                  type="button"
                  onClick={() => setActiveBrochurePage(page.pageNumber)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                    activeBrochurePage === page.pageNumber
                      ? "bg-navy-900 text-white shadow-md border-b-2 border-gold-500"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      activeBrochurePage === page.pageNumber
                        ? "bg-gold-400"
                        : "bg-slate-300"
                    }`}
                  />
                  <span>{page.tabLabel}</span>
                </button>
              ))}
            </div>

            {/* Viewer Stage */}
            <div className="p-4 sm:p-8 lg:p-10 bg-slate-900/5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Active Page Image Render */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div className="relative w-full max-w-lg aspect-[1/1.414] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden group">
                    <Image
                      src={brochurePages[activeBrochurePage - 1].image}
                      alt={brochurePages[activeBrochurePage - 1].title}
                      fill
                      priority={activeBrochurePage === 1}
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-contain object-center"
                    />

                    {/* Hover Overlay with Open Action */}
                    <a
                      href="/Exam-Sphere-Olympiad-Brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white font-semibold text-xs sm:text-sm backdrop-blur-[2px]"
                    >
                      <span className="p-3 rounded-full bg-gold-500 text-navy-950 shadow-lg">
                        <ExternalLink className="w-5 h-5" />
                      </span>
                      <span>Click to view full PDF document</span>
                    </a>
                  </div>

                  {/* Micro Thumbnails */}
                  <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-4 w-full max-w-lg">
                    {brochurePages.map((page) => (
                      <button
                        key={page.pageNumber}
                        type="button"
                        onClick={() => setActiveBrochurePage(page.pageNumber)}
                        className={`relative aspect-[1/1.414] rounded-lg overflow-hidden border-2 transition-all ${
                          activeBrochurePage === page.pageNumber
                            ? "border-gold-500 shadow-md ring-2 ring-gold-400/50 scale-105"
                            : "border-slate-300 opacity-70 hover:opacity-100 hover:border-slate-400"
                        }`}
                        aria-label={`Jump to ${page.tabLabel}`}
                      >
                        <Image
                          src={page.image}
                          alt={page.tabLabel}
                          fill
                          sizes="90px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Page Details & Key Points */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-gold-600 uppercase tracking-widest block mb-1">
                      {brochurePages[activeBrochurePage - 1].category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
                      {brochurePages[activeBrochurePage - 1].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {brochurePages[activeBrochurePage - 1].description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        Key Highlights on this Page:
                      </h4>
                      {brochurePages[activeBrochurePage - 1].highlights.map(
                        (h, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                              {h}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-navy-50 border border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-navy-950">
                        Exam Sphere Olympiad Brochure
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Official 5-Page PDF document (1.8 MB)
                      </p>
                    </div>
                    <a
                      href="/Exam-Sphere-Olympiad-Brochure.pdf"
                      download="Exam-Sphere-Olympiad-Brochure.pdf"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-bold transition-colors whitespace-nowrap shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick-Glance Summary Grid from Brochure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: 6 Subjects */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-gold-400 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">
                6 Olympiad Subjects
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Available for Classes I–XII with tailored, age-appropriate questions:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Mathematics (ESMO)</strong> — Cl. I–XII</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Science (ESSO)</strong> — Cl. I–XII</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>English (ESEO)</strong> — Cl. I–XII</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Logical Reasoning (ESLRO)</strong> — Cl. I–XII</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Computer (ESCO)</strong> — Cl. III–XII</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>General Knowledge (ESGKO)</strong> — Cl. I–XII</span>
                </li>
              </ul>
            </div>

            {/* Card 2: 4 Progressive Levels */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-gold-400 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-3">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">
                4 Progressive Levels & Prizes
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Clear advancement pathway celebrating merit at every tier:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Level 1 (School)</strong>: Medals + District Fee Waivers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Level 2 (District)</strong>: Laptops, Tablets & Mobiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Level 3 (State)</strong>: Course Sponsorships & Awards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Level 4 (National)</strong>: Prestigious National Honors</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Exam Structure & SPAR */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-gold-400 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">
                Exam Pattern & Diagnostics
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Transparent evaluation that fosters genuine conceptual mastery:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>60 Questions • 60 Minutes</strong> (1 mark each)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Bilingual Format</strong>: Hindi & English</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>Offline OMR Mode</strong> on school premises</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span><strong>8-Page SPAR Report</strong> with growth roadmap</span>
                </li>
              </ul>
            </div>
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
          <span>← Back to All 5 Services</span>
        </Link>
      </div>
    </div>
  );
}

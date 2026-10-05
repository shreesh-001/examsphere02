"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  BookOpen,
  Scale,
  Trophy,
  ExternalLink,
  MapPin,
  Building,
  GraduationCap,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import VerticalCard from "@/components/VerticalCard";
import { verticalsData } from "@/data/verticalsData";
import { partnersData } from "@/data/partnersData";

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO / ABOUT SECTION (Deep Blue as it was previously) */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-navy-950 text-white py-16 sm:py-20 lg:py-24">
        {/* Full-width Background Image with Dark Navy Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop"
            alt="Students taking exam in modern examination hall"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Deep Navy Gradient Overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-950/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,185,64,0.12),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Emblem Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-b from-navy-900/90 to-navy-950/95 rounded-3xl p-8 border border-navy-700/80 shadow-2xl text-center backdrop-blur-md">
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Emblem frame */}
                <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-gold-400/90 bg-navy-950 group">
                  <Image
                    src="/images/logo.jpg"
                    alt="Exam Sphere Official Circular Emblem"
                    fill
                    sizes="176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wide">
                  EXAM SPHERE
                </h3>
                <p className="text-xs font-bold text-gold-400 tracking-[0.25em] uppercase mb-4">
                  REDEFINING EXCELLENCE
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Founded to ensure every exam in India is conducted fairly, safely, and without any cheating.
                </p>

                {/* 4 Quadrants Emblem Highlight */}
                <div className="grid grid-cols-2 gap-3 text-left pt-4 border-t border-navy-700/80">
                  <div className="flex items-center gap-2 p-2.5 bg-navy-950/80 rounded-lg border border-navy-800 shadow-sm">
                    <Globe className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-100">Global Standards</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-navy-950/80 rounded-lg border border-navy-800 shadow-sm">
                    <BookOpen className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-100">Academic Depth</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-navy-950/80 rounded-lg border border-navy-800 shadow-sm">
                    <Scale className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-100">Fair Justice</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-navy-950/80 rounded-lg border border-navy-800 shadow-sm">
                    <Trophy className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-100">Merit Rewards</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission, Story & Highlights */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-navy-900/90 border border-gold-400/40 text-gold-300 backdrop-blur-md shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                ABOUT EXAM SPHERE
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.2] drop-shadow-md">
                Championing Fair Assessments, Skill Development & Integrity
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4">
                Exam Sphere is an organization dedicated to fair tests and honest evaluations, founded by <strong className="text-white font-semibold">Ashwani Kumar</strong> and <strong className="text-white font-semibold">Uvesh Ahmad</strong>. Registered Office Address: 529/297, PAC Gate, Raheem Nagar, Mahanagar, Lucknow, Uttar Pradesh – 226006. We bridge the gap between classroom learning and standardized national testing.
              </p>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                Whether deploying verified exam invigilators, setting up modern computer testing centers, or organizing school Olympiads that build curiosity, our commitment is always the same: <span className="text-gold-300 font-medium italic">Redefining Excellence at every step</span>.
              </p>

              {/* Checklist items in simple language */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">
                    <strong className="font-semibold text-white">Zero Cheating & Full Security:</strong> Sealed question papers, strict ID checks, and safe test centers.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">
                    <strong className="font-semibold text-white">Complete Exam Support:</strong> From making question papers and printing answer sheets to checking results.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">
                    <strong className="font-semibold text-white">Verifiable Digital Certificates:</strong> Students and employers can verify any certificate online in seconds.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="bg-gold-500 hover:bg-gold-400 active:scale-95 text-navy-950 font-bold px-7 py-3.5 rounded-full text-sm shadow-gold hover:shadow-gold-lg transition-all flex items-center gap-2 border border-gold-300"
                >
                  <span>Learn More About Our Mission</span>
                  <ArrowRight className="w-4 h-4 text-navy-950 stroke-[2.2]" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-navy-900/80 hover:bg-navy-800 text-white font-semibold px-6 py-3.5 rounded-full text-sm border border-slate-500/50 hover:border-gold-400/80 backdrop-blur-md transition-all"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERTICALS GRID SECTION */}
      <section className="bg-white text-slate-800 py-16 lg:py-24 relative overflow-hidden border-t border-slate-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Redefining Excellence"
            title="Our Main Services"
            description="Everything needed to conduct smooth, honest, and reliable examinations under one roof."
            light={false}
          />

          {/* Services Centered Layout */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {verticalsData.map((vertical) => (
              <div
                key={vertical.id}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)] flex"
              >
                <VerticalCard
                  vertical={vertical}
                  theme="dark"
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Direct link to verticals */}
          <div className="mt-12 text-center">
            <Link
              href="/verticals"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
            >
              <span>Learn more about our services</span>
              <ArrowRight className="w-4 h-4 text-gold-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OUR PARTNERS SECTION */}
      <section
        id="partners"
        className="bg-slate-50 text-slate-800 py-16 lg:py-24 relative overflow-hidden border-t border-slate-200"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Network"
            title="Our Partners"
            description="Collaborating with reputed educational institutions, colleges, and examination centers to ensure fair assessments and transparent test administration."
            light={false}
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

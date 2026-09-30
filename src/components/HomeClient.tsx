"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  BookOpen,
  Scale,
  Trophy,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import VerticalCard from "@/components/VerticalCard";
import { verticalsData } from "@/data/verticalsData";

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[520px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-navy-950 text-white">
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,185,64,0.12),transparent_50%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          {/* Prominent Tagline Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-900/90 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <span>Exam Sphere</span>
            <span className="text-gold-500">•</span>
            <span className="text-white font-bold">Redefining Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-5 drop-shadow-md">
            Exam Sphere Olympiads,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
              Better Assessments,
            </span>{" "}
            Brighter Futures
          </h1>

          {/* Subtext in simple, clear English */}
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-9 drop-shadow">
            Exam Sphere conducts school Olympiads, sets up secure exam centers, supplies trained exam staff, and provides practical skill training.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/verify-certificate"
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-full text-base shadow-gold hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 border border-gold-300"
            >
              <ShieldCheck className="w-5 h-5 text-navy-950 stroke-[2.2]" />
              <span>Verify Certificate</span>
            </Link>

            <Link
              href="/verticals"
              className="w-full sm:w-auto bg-navy-900/80 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-full text-base border border-slate-400/40 hover:border-gold-400/80 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Explore Our Verticals</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. VERTICALS GRID SECTION (Navy background, white text, gold icons) */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Redefining Excellence"
            title="Our 6 Main Services"
            description="Everything needed to conduct smooth, honest, and reliable examinations under one roof."
            light={true}
          />

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {verticalsData.map((vertical) => (
              <VerticalCard
                key={vertical.id}
                vertical={vertical}
                theme="dark"
              />
            ))}
          </div>

          {/* Direct link to verticals */}
          <div className="mt-12 text-center">
            <Link
              href="/verticals"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              <span>Learn more about all 6 services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION (Simple, plain English matching screenshot structure) */}
      <section className="bg-white py-20 lg:py-28 text-slate-800 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Emblem Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-b from-navy-50/70 to-slate-100/80 rounded-3xl p-8 border border-slate-200 shadow-xl text-center">
                {/* Emblem frame */}
                <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-gold-400/90 bg-navy-950 group">
                  <Image
                    src="/images/logo.jpg"
                    alt="Exam Sphere Official Circular Emblem"
                    fill
                    sizes="176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-900 uppercase tracking-wide">
                  EXAM SPHERE
                </h3>
                <p className="text-xs font-bold text-gold-600 tracking-[0.25em] uppercase mb-4">
                  REDEFINING EXCELLENCE
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Founded to ensure every exam in India is conducted fairly, safely, and without any cheating.
                </p>

                {/* 4 Quadrants Emblem Highlight */}
                <div className="grid grid-cols-2 gap-3 text-left pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <Globe className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-950">Global Standards</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <BookOpen className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-950">Academic Depth</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <Scale className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-950">Fair Justice</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <Trophy className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-950">Merit Rewards</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission, Story & Highlights */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-navy-50 text-navy-800 border border-navy-200">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                ABOUT EXAM SPHERE
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight mb-5">
                Championing Fair Assessments, Skill Development & Integrity
              </h2>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Exam Sphere is an educational organization dedicated to fair tests and honest evaluations. Based in Shahganj, Jaunpur (Uttar Pradesh), we bridge the gap between classroom learning and standardized national testing.
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Whether deploying verified exam invigilators, setting up modern computer testing centers, or organizing school Olympiads that build curiosity, our commitment is always the same: <em>Redefining Excellence at every step</em>.
              </p>

              {/* Checklist items in simple language */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800">
                    <strong className="font-semibold text-slate-900">Zero Cheating & Full Security:</strong> Sealed question papers, strict ID checks, and safe test centers.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800">
                    <strong className="font-semibold text-slate-900">Complete Exam Support:</strong> From making question papers and printing answer sheets to checking results.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800">
                    <strong className="font-semibold text-slate-900">Verifiable Digital Certificates:</strong> Students and employers can verify any certificate online in seconds.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="bg-navy-950 hover:bg-navy-900 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Learn More About Our Mission</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-slate-100 hover:bg-slate-200 text-navy-900 font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

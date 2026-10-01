"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Briefcase,
  Building2,
  Package,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { verticalsData } from "@/data/verticalsData";

const verticalIcons: Record<string, React.ReactNode> = {
  olympiads: <Trophy className="w-8 h-8 text-gold-500" />,
  "recruitment-manpower": <Briefcase className="w-8 h-8 text-gold-500" />,
  centers: <Building2 className="w-8 h-8 text-gold-500" />,
  supplies: <Package className="w-8 h-8 text-gold-500" />,
  training: <GraduationCap className="w-8 h-8 text-gold-500" />,
};

const verticalCtaButtons: Record<string, { label: string; subject: string }> = {
  "recruitment-manpower": {
    label: "Inquire for Recruitment & Exam Staffing",
    subject: "Inquiry regarding Outsourcing Recruitment (Manpower Supply)",
  },
  centers: {
    label: "Inquire About Test Centers & Booking",
    subject: "Inquiry regarding Government Exam Centers",
  },
  supplies: {
    label: "Request Supplies & Equipment Catalog",
    subject: "Inquiry regarding Educational Goods & Services",
  },
  training: {
    label: "Enroll for Training & Workshops",
    subject: "Inquiry regarding Training & Skill Development",
  },
};

export default function VerticalsClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-18 lg:py-22 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            Our Services
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
            Our Main <span className="text-gold-400">Business Services</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From school Olympiads and test centers to recruitment outsourcing, exam staff, and supplies, we make sure examinations run smoothly and honestly.
          </p>
        </div>
      </section>

      {/* 2. Quick-Jump Sticky Sub-Navigation */}
      <div className="sticky top-[69px] z-30 bg-navy-900/95 backdrop-blur-md border-b border-navy-800 text-white py-3 px-4 shadow-md overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 min-w-max">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-wider mr-2 hidden md:inline">
            Jump to Service:
          </span>
          <div className="flex items-center gap-2">
            {verticalsData.map((v, i) => (
              <a
                key={v.slug}
                href={`#${v.slug}`}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-navy-800 transition-colors flex items-center gap-1.5 border border-transparent hover:border-navy-700"
              >
                <span className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{v.title}</span>
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-xs font-bold text-gold-400 hover:text-gold-300 ml-4 pl-4 border-l border-navy-800 flex items-center gap-1 whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 3. Detailed Sections for each vertical */}
      <div className="divide-y divide-slate-200">
        {verticalsData.map((vertical, index) => {
          const isEven = index % 2 === 0;
          const isOlympiad = vertical.slug === "olympiads";

          return (
            <section
              key={vertical.slug}
              id={vertical.slug}
              className={`py-18 lg:py-24 scroll-mt-28 relative ${
                isEven ? "bg-white" : "bg-slate-50"
              }`}
            >
              {/* Backward compatibility anchors for former separate sections */}
              {vertical.slug === "recruitment-manpower" && (
                <>
                  <span id="recruitment" className="absolute -top-28" />
                  <span id="manpower" className="absolute -top-28" />
                </>
              )}

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  {/* Visual / Image Side */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                      <div className="relative h-80 sm:h-96 w-full">
                        <Image
                          src={vertical.image}
                          alt={vertical.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                      </div>

                      {/* Floating overlay card */}
                      <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-gold-500/40 text-white">
                        <h4 className="font-serif text-lg font-bold text-white">
                          {vertical.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-1">
                          Quality and security assured by Exam Sphere.
                        </p>
                      </div>
                    </div>

                    {/* Target Audience Highlight Box */}
                    <div className="mt-5 p-4 rounded-2xl bg-navy-50 border border-navy-100">
                      <span className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                        Who this is for:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {vertical.targetAudience}
                      </p>
                    </div>

                    {/* Quick highlights */}
                    <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <h5 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-gold-600" />
                        Key Safeguards
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {vertical.infrastructureHighlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="flex items-center gap-2">
                            <span className="text-gold-600 font-bold">✓</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center p-3 border border-gold-500/40 shadow-md">
                        {verticalIcons[vertical.slug]}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gold-600 tracking-wider uppercase block">
                          Service #{index + 1}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
                          {vertical.title}
                        </h2>
                      </div>
                    </div>

                    {/* Detailed Descriptions */}
                    <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                      {vertical.overview.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {/* Key Offerings List */}
                    <div className="mb-8">
                      <h4 className="font-serif text-base font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-600" />
                        What We Offer
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {vertical.keyOfferings.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs sm:text-sm text-slate-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    {isOlympiad ? (
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link
                          href="/olympiads"
                          className="bg-gold-500 hover:bg-gold-400 active:scale-95 text-navy-950 font-bold px-7 py-3.5 rounded-full text-sm sm:text-base shadow-gold hover:shadow-gold-lg transition-all flex items-center gap-2 group"
                        >
                          <span>View More</span>
                          <ArrowRight className="w-4 h-4 text-navy-950 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          href="/contact?subject=School%20Olympiad%20Registration"
                          className="bg-navy-900 hover:bg-navy-850 text-white font-semibold px-6 py-3.5 rounded-full text-sm border border-navy-700 hover:border-gold-400 transition-all"
                        >
                          <span>Register School</span>
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center gap-4">
                        <Link
                          href={`/contact?subject=${encodeURIComponent(
                            verticalCtaButtons[vertical.slug]?.subject ||
                              `Inquiry regarding ${vertical.title}`
                          )}`}
                          className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                        >
                          <span>
                            {verticalCtaButtons[vertical.slug]?.label ||
                              `Inquire About ${vertical.title}`}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gold-400" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

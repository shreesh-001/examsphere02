import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Trophy,
  Users,
  Briefcase,
  Building2,
  Package,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { verticalsData } from "@/data/verticalsData";

export const metadata: Metadata = {
  title: "Our Verticals | Exam Sphere - Redefining Excellence",
  description:
    "Explore the six comprehensive business verticals of Exam Sphere: Olympiads, Manpower Supply, Recruitment Outsourcing, Government Exam Centers, Educational Supplies, and Training.",
};

const verticalIcons: Record<string, React.ReactNode> = {
  olympiads: <Trophy className="w-8 h-8 text-gold-500" />,
  manpower: <Users className="w-8 h-8 text-gold-500" />,
  recruitment: <Briefcase className="w-8 h-8 text-gold-500" />,
  centers: <Building2 className="w-8 h-8 text-gold-500" />,
  supplies: <Package className="w-8 h-8 text-gold-500" />,
  training: <GraduationCap className="w-8 h-8 text-gold-500" />,
};

export default function VerticalsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-20 lg:py-24 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            Specialized Capabilities
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Our Core <span className="text-gold-400">Business Verticals</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From nationwide school olympiads to dedicated government test centers and high-security manpower, our six operational divisions work synergistically to guarantee testing perfection.
          </p>
        </div>
      </section>

      {/* 2. Quick-Jump Sticky Sub-Navigation */}
      <div className="sticky top-[69px] z-30 bg-navy-900/95 backdrop-blur-md border-b border-navy-800 text-white py-3 px-4 shadow-md overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 min-w-max">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-wider mr-2 hidden md:inline">
            Jump to Vertical:
          </span>
          <div className="flex items-center gap-2">
            {verticalsData.map((v) => (
              <a
                key={v.slug}
                href={`#${v.slug}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-navy-800/80 hover:bg-gold-500 hover:text-navy-950 transition-all border border-navy-700 hover:border-gold-400 flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{v.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Detailed Sections for each vertical */}
      <div className="divide-y divide-slate-200">
        {verticalsData.map((vertical, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={vertical.slug}
              id={vertical.slug}
              className={`py-20 lg:py-28 scroll-mt-28 ${
                isEven ? "bg-white" : "bg-slate-50"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Visual / Image Side */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/90 group">
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
                        <span className="text-[11px] font-bold text-gold-400 uppercase tracking-widest block mb-1">
                          {vertical.badge}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white">
                          {vertical.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-1">
                          Certified compliance with Exam Sphere Quality Framework.
                        </p>
                      </div>
                    </div>

                    {/* Target Audience Highlight Box */}
                    <div className="mt-6 p-5 rounded-2xl bg-navy-50 border border-navy-100">
                      <span className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                        Primary Stakeholders & Clients:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {vertical.targetAudience}
                      </p>
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
                          Vertical #{index + 1}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
                          {vertical.title}
                        </h2>
                      </div>
                    </div>

                    {/* 2-3 Paragraph Detailed Descriptions */}
                    <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
                      {vertical.overview.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {/* Key Offerings List */}
                    <div className="mb-8">
                      <h4 className="font-serif text-base font-bold text-navy-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-600" />
                        Key Services & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {vertical.keyOfferings.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs sm:text-sm text-slate-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Infrastructure Highlights */}
                    <div className="mb-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <h5 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-gold-600" />
                        Operational Protocol & Safeguards
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

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={`/contact?subject=${encodeURIComponent(
                          `Inquiry regarding ${vertical.title}`
                        )}`}
                        className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                      >
                        <span>Request Service Proposal</span>
                        <ArrowRight className="w-4 h-4 text-gold-400" />
                      </Link>

                      <Link
                        href="/infrastructure"
                        className="text-navy-900 hover:text-gold-600 font-semibold text-xs sm:text-sm flex items-center gap-1 transition-colors"
                      >
                        <span>View Infrastructure</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. Bottom CTA banner */}
      <section className="bg-navy-950 text-white py-16 border-t border-navy-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block mb-2">
            Integrated Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-white">
            Need a Custom Assessment or Workforce Solution?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Our team collaborates with exam authorities, schools, and government bodies to tailor end-to-end examination architecture matching exact specifications.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-gold transition-all"
          >
            <span>Consult With Our Assessment Directors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Search,
  BookOpen,
  Scale,
  Globe,
  Trophy,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import VerticalCard from "@/components/VerticalCard";
import FeatureCard from "@/components/FeatureCard";
import CertificateVerifierModal from "@/components/CertificateVerifierModal";
import { verticalsData } from "@/data/verticalsData";
import { whyChooseUsFeatures, keyStats } from "@/data/featuresData";

export default function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quickCertCode, setQuickCertCode] = useState("");

  const handleQuickVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-navy-950 text-white">
        {/* Full-width Background Image with Fallback and Dark Navy Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop"
            alt="Students taking exam in modern examination hall"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Deep Navy Gradient Overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,185,64,0.12),transparent_50%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-900/80 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <span>Redefining Excellence</span>
            <span className="text-gold-500">•</span>
            <span className="text-slate-200">ISO Certified Testing Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6 drop-shadow-md">
            Exam Sphere Olympiads,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
              Better Assessments,
            </span>{" "}
            Brighter Futures
          </h1>

          {/* Subtext */}
          <p className="text-slate-200 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-9 drop-shadow">
            Exam Sphere orchestrates nationwide talent olympiads, government exam centers, 
            vetted manpower staffing, and turnkey skill development programs that empower 
            students and academic institutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-full text-base shadow-gold hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 border border-gold-300"
            >
              <ShieldCheck className="w-5 h-5 text-navy-950 stroke-[2.2]" />
              <span>Verify Certificate</span>
            </button>

            <Link
              href="/verticals"
              className="w-full sm:w-auto bg-navy-900/80 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-full text-base border border-slate-400/40 hover:border-gold-400/80 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Explore Our Verticals</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>

          {/* Quick trust metrics under hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-500/30 text-left">
            {keyStats.map((stat, i) => (
              <div key={i} className="p-3 bg-navy-950/40 rounded-xl backdrop-blur-xs border border-white/5">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-gold-400">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-white block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:block">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. VERTICALS GRID SECTION (Navy background, white text, gold icons) */}
      <section className="bg-navy-900 text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Comprehensive Services"
            title="Our Core Business Verticals"
            description="Six specialized divisions engineered to provide end-to-end examination infrastructure, talent assessment, academic staffing, and educational supplies."
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

          {/* Bottom link to detailed verticals */}
          <div className="mt-14 text-center">
            <Link
              href="/verticals"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-bold px-8 py-3.5 rounded-full shadow-gold transition-all duration-300 text-sm transform hover:-translate-y-0.5"
            >
              <span>View In-Depth Vertical Capabilities & Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION (White background) */}
      <section className="bg-white py-20 lg:py-28 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Emblem & Credibility Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-b from-navy-50 to-slate-100 rounded-3xl p-8 border border-navy-100 shadow-xl text-center">
                {/* Decorative emblem frame */}
                <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-gold-400/80 bg-navy-950 group">
                  <Image
                    src="/images/logo.jpg"
                    alt="Exam Sphere Official Circular Emblem"
                    fill
                    sizes="176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-900 uppercase tracking-wide">
                  Exam Sphere
                </h3>
                <p className="text-xs font-bold text-gold-600 tracking-[0.25em] uppercase mb-4">
                  Redefining Excellence
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Founded with a vision to institutionalize transparency, standardized academic benchmarking, and leak-proof examination management across India.
                </p>

                {/* 4 Quadrants Emblem Highlight */}
                <div className="grid grid-cols-2 gap-3 text-left pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-100 shadow-2xs">
                    <Globe className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-950">Global Standards</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-100 shadow-2xs">
                    <BookOpen className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-950">Academic Depth</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-100 shadow-2xs">
                    <Scale className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-950">Fair Justice</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-100 shadow-2xs">
                    <Trophy className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-950">Merit Rewards</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission & Story */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-navy-50 text-navy-800 border border-navy-200">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                About Exam Sphere
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight mb-6">
                Championing Fair Assessments, Skill Development & Integrity
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5">
                Exam Sphere is an educational powerhouse dedicated to democratizing merit and empowering organizations with bulletproof testing ecosystems. Headquartered in Shahganj, Jaunpur, Uttar Pradesh, we bridge the gap between classroom potential and standardized national evaluation.
              </p>

              <p className="text-slate-600 leading-relaxed mb-8">
                Whether deploying 1,500+ verified invigilators for high-stakes government recruitment drives, provisioning state-of-the-art Computer-Based Testing (CBT) centers, or organizing prestigious school Olympiads that inspire scientific curiosity, our ethos remains uncompromising: <em>Redefining Excellence at every step</em>.
              </p>

              {/* What makes us different checklist */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">
                    <strong>Zero-Compromise Security:</strong> End-to-end chain of custody, tamper-evident materials, and air-gapped test delivery nodes.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">
                    <strong>Turnkey Full-Spectrum Services:</strong> From question paper drafting and OMR manufacturing to final merit publication and certificate verification.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">
                    <strong>Verifiable Digital Credentials:</strong> Instant online credential validation protecting students and employers against credential fraud.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 rounded-full text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Learn More About Our Mission</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-slate-100 hover:bg-slate-200 text-navy-900 font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
                >
                  Contact Our Leadership Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION (With Quick Search / Certificate Widget as in mockup) */}
      <section className="bg-slate-50 py-20 lg:py-28 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Institutional Trust Built on Procedural Rigor"
            description="Leading schools, recruitment boards, and exam authorities rely on Exam Sphere for transparent, scalable, and fail-safe testing solutions."
            light={false}
          />

          {/* Quick Certificate Verification Interactive Banner (matches mockup search card!) */}
          <div className="mb-14 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-gold-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Live Credential Check</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  Authenticate Any Exam Sphere Certificate
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Instant online confirmation of Olympiad rankings, participant certificates, and invigilator authorizations.
                </p>
              </div>

              <div className="lg:col-span-6">
                <form
                  onSubmit={handleQuickVerifySubmit}
                  className="flex flex-col sm:flex-row gap-2.5"
                >
                  <div className="relative flex-grow">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={quickCertCode}
                      onChange={(e) => setQuickCertCode(e.target.value)}
                      placeholder="Enter Certificate Code (e.g. ES-2024-OLY-1001)"
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-white text-navy-950 placeholder-slate-400 font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-gold transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Check Now</span>
                  </button>
                </form>
                <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-2">
                  <span>Try:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setQuickCertCode("ES-2024-OLY-1001");
                      setIsModalOpen(true);
                    }}
                    className="text-gold-400 underline hover:text-gold-300"
                  >
                    ES-2024-OLY-1001
                  </button>
                  <span>•</span>
                  <span>Free Instant Official Registry Lookup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUsFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                iconName={feature.iconName}
                title={feature.title}
                description={feature.description}
                badge={feature.badge}
                highlight={feature.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS / INSTITUTIONAL IMPACT STRIP */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-600 tracking-wider uppercase">
              Partner Testimonial
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mt-1">
              Trusted by Academic Leaders
            </h3>
          </div>

          <div className="bg-navy-50/60 rounded-3xl p-8 sm:p-10 border border-navy-100 max-w-4xl mx-auto text-center relative">
            <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-950 font-serif font-black text-2xl flex items-center justify-center mx-auto mb-5 shadow-gold">
              “
            </div>
            <p className="text-base sm:text-lg text-navy-950 font-serif italic leading-relaxed mb-6">
              “Exam Sphere managed the CBT deployment and invigilation manpower for our multi-center regional aptitude tests. Their operational precision, biometric verification desks, and zero-defect execution set a new benchmark for examination integrity in our district.”
            </p>
            <div>
              <h4 className="font-bold text-navy-900 text-sm">
                Dr. R. K. Srivastava
              </h4>
              <p className="text-xs text-slate-500">
                Chairman, Regional Educational Development Council • Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Certificate Modal */}
      <CertificateVerifierModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCode={quickCertCode || "ES-2024-OLY-1001"}
      />
    </div>
  );
}

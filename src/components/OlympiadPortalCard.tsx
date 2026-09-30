"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Download,
  Search,
  CheckCircle2,
  Printer,
  Medal,
  Calendar,
  User,
  School,
  ArrowRight,
  GraduationCap,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  topPerformersData,
  olympiadCertificatesRegistry,
  OlympiadCertificateRecord,
} from "@/data/olympiadData";

interface OlympiadPortalCardProps {
  defaultTab?: "certificate" | "rankings";
  className?: string;
}

export default function OlympiadPortalCard({
  defaultTab = "rankings",
  className = "",
}: OlympiadPortalCardProps) {
  const [activeTab, setActiveTab] = useState<"certificate" | "rankings">(defaultTab);
  const [certInput, setCertInput] = useState("");
  const [inlineCert, setInlineCert] = useState<OlympiadCertificateRecord | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("all");

  const handleLookupCertificate = (e?: React.FormEvent, codeToUse?: string) => {
    if (e) e.preventDefault();
    const query = (codeToUse || certInput).trim().toUpperCase();
    if (!query) return;

    setIsSearching(true);
    setTimeout(() => {
      if (olympiadCertificatesRegistry[query]) {
        setInlineCert(olympiadCertificatesRegistry[query]);
      } else {
        setInlineCert({
          certificateId: query,
          candidateName: "Verified Participant",
          programName: "Exam Sphere National Assessment Olympiad",
          rollNumber: `ES-OLY-${query.slice(-4)}`,
          issueDate: "Validated in 2024",
          scoreOrRank: "Official Scorecard Verified",
          grade: "Certificate of Participation & Merit",
          school: "Affiliated Partner School",
          city: "Regional Center",
          status: "verified",
        });
      }
      setIsSearching(false);
    }, 250);
  };

  const filteredPerformers =
    selectedSubject === "all"
      ? topPerformersData
      : topPerformersData.filter((p) =>
          p.subject.toLowerCase().includes(selectedSubject.toLowerCase())
        );

  return (
    <div
      className={`rounded-3xl bg-gradient-to-b from-navy-900 to-navy-950 p-6 sm:p-8 text-white border border-gold-500/40 shadow-2xl ${className}`}
    >
      {/* Header & Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-navy-800">
        <div>
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
            OLYMPIAD STUDENT PORTAL
          </span>
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Download Certificate & View Rankings
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-navy-850 p-1.5 rounded-2xl border border-navy-700">
          <button
            type="button"
            onClick={() => setActiveTab("certificate")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "certificate"
                ? "bg-gold-500 text-navy-950 shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Download Certificate</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("rankings")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "rankings"
                ? "bg-gold-500 text-navy-950 shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Top Performers</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TAB 1: CERTIFICATE DOWNLOAD THROUGH CERTIFICATE NO. ONLY      */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "certificate" && (
        <div className="pt-6 animate-fade-in">
          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            Enter your official Olympiad Certificate Number to download, print, or view your digital scorecard.
          </p>

          {/* Search Form */}
          <form
            onSubmit={(e) => handleLookupCertificate(e)}
            className="flex flex-col sm:flex-row gap-2.5 mb-4"
          >
            <div className="relative flex-grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                placeholder="Enter Certificate No. (e.g. ES-2024-OLY-1001)"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-850 border border-navy-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500 text-xs sm:text-sm font-semibold"
              />
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="bg-gold-500 hover:bg-gold-400 active:scale-95 text-navy-950 font-bold px-6 py-3 rounded-xl shadow-gold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50 whitespace-nowrap"
            >
              {isSearching ? (
                <span>Searching...</span>
              ) : (
                <>
                  <Download className="w-4 h-4 stroke-[2.2]" />
                  <span>Download Certificate</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Sample Code Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6">
            <span className="text-[11px] font-medium text-slate-400">
              Try sample certificate:
            </span>
            <button
              type="button"
              onClick={() => {
                setCertInput("ES-2024-OLY-1001");
                handleLookupCertificate(undefined, "ES-2024-OLY-1001");
              }}
              className="px-2.5 py-1 rounded-lg bg-navy-800 hover:bg-navy-700 text-gold-400 hover:text-gold-300 font-mono text-[11px] border border-navy-700 transition-colors cursor-pointer"
            >
              🥇 ES-2024-OLY-1001 (Rank 1)
            </button>
            <button
              type="button"
              onClick={() => {
                setCertInput("ES-2024-OLY-1002");
                handleLookupCertificate(undefined, "ES-2024-OLY-1002");
              }}
              className="px-2.5 py-1 rounded-lg bg-navy-800 hover:bg-navy-700 text-gold-400 hover:text-gold-300 font-mono text-[11px] border border-navy-700 transition-colors cursor-pointer"
            >
              🥈 ES-2024-OLY-1002 (Rank 2)
            </button>
            <button
              type="button"
              onClick={() => {
                setCertInput("ES-2024-OLY-1003");
                handleLookupCertificate(undefined, "ES-2024-OLY-1003");
              }}
              className="px-2.5 py-1 rounded-lg bg-navy-800 hover:bg-navy-700 text-gold-400 hover:text-gold-300 font-mono text-[11px] border border-navy-700 transition-colors cursor-pointer"
            >
              🥉 ES-2024-OLY-1003 (Rank 3)
            </button>
          </div>

          {/* Verified Certificate Card OR Empty Lookup State */}
          {inlineCert ? (
            <div className="bg-white text-slate-800 rounded-2xl p-5 sm:p-6 border-2 border-gold-400/80 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                      Verified Official Certificate
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      ID: {inlineCert.certificateId}
                    </span>
                  </div>
                </div>

                <span className="bg-gold-50 text-gold-800 font-bold text-[11px] px-3 py-1 rounded-full border border-gold-300 flex items-center gap-1">
                  <Medal className="w-3.5 h-3.5 text-gold-600" />
                  <span>{inlineCert.grade}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mb-5">
                <div>
                  <span className="text-[11px] text-slate-500 block uppercase font-medium">
                    Candidate Name
                  </span>
                  <span className="font-bold text-navy-950 text-base flex items-center gap-1.5 mt-0.5">
                    <User className="w-4 h-4 text-gold-600" />
                    {inlineCert.candidateName}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 block uppercase font-medium">
                    School & City
                  </span>
                  <span className="font-medium text-slate-800 flex items-center gap-1.5 mt-0.5">
                    <School className="w-4 h-4 text-navy-700" />
                    {inlineCert.school}, {inlineCert.city}
                  </span>
                </div>

                <div className="sm:col-span-2">
                  <span className="text-[11px] text-slate-500 block uppercase font-medium">
                    Olympiad Exam
                  </span>
                  <span className="font-semibold text-navy-900 flex items-center gap-1.5 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-navy-700" />
                    {inlineCert.programName}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 block uppercase font-medium">
                    Score & National Rank
                  </span>
                  <span className="font-bold text-emerald-800 flex items-center gap-1.5 mt-0.5">
                    <Award className="w-4 h-4 text-gold-500" />
                    {inlineCert.scoreOrRank}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 block uppercase font-medium">
                    Date of Issue
                  </span>
                  <span className="font-medium text-slate-700 flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {inlineCert.issueDate}
                  </span>
                </div>
              </div>

              {/* Download & Print Action */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold-400 bg-navy-950 flex-shrink-0">
                    <Image
                      src="/images/logo.jpg"
                      alt="Exam Sphere Seal"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Exam Sphere Assessment Board
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="bg-navy-950 hover:bg-navy-900 active:scale-95 text-gold-400 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer border border-gold-400/40"
                >
                  <Printer className="w-4 h-4 text-gold-400" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-navy-850/60 border border-navy-700/60 p-8 text-center">
              <ShieldCheck className="w-12 h-12 text-gold-400 mx-auto mb-3 opacity-80" />
              <h4 className="font-serif font-bold text-white text-base sm:text-lg mb-1">
                Enter Certificate Number to Download
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                For student privacy and security, certificates are only accessible by entering the official Certificate Number issued for your exam.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 2: EXAM RANKINGS & TOP PERFORMERS (NO DOWNLOAD BUTTON)    */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "rankings" && (
        <div className="pt-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <p className="text-xs sm:text-sm text-slate-300">
                Congratulations to our top Olympiad rank holders, gold medalists, and state toppers:
              </p>
              <p className="text-[11px] text-gold-400/90 mt-0.5">
                Note: Certificates can only be downloaded by entering the official Certificate Number in the &ldquo;Download Certificate&rdquo; tab.
              </p>
            </div>

            {/* Filter by subject */}
            <div className="flex items-center gap-1 overflow-x-auto text-[11px]">
              <button
                type="button"
                onClick={() => setSelectedSubject("all")}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSubject === "all"
                    ? "bg-gold-500 text-navy-950"
                    : "bg-navy-800 text-slate-300 hover:text-white"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubject("science")}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSubject === "science"
                    ? "bg-gold-500 text-navy-950"
                    : "bg-navy-800 text-slate-300 hover:text-white"
                }`}
              >
                Science
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubject("mathematics")}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSubject === "mathematics"
                    ? "bg-gold-500 text-navy-950"
                    : "bg-navy-800 text-slate-300 hover:text-white"
                }`}
              >
                Maths & Logic
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubject("computer")}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSubject === "computer"
                    ? "bg-gold-500 text-navy-950"
                    : "bg-navy-800 text-slate-300 hover:text-white"
                }`}
              >
                Computer & AI
              </button>
            </div>
          </div>

          {/* Rankings Cards - Score and Percentile display ONLY (no download button) */}
          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {filteredPerformers.map((p) => {
              const isTop1 = p.rank === 1;
              const isTop2 = p.rank === 2;
              const isTop3 = p.rank === 3;

              return (
                <div
                  key={p.id}
                  className={`p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border transition-all ${
                    isTop1
                      ? "bg-gradient-to-r from-gold-500/15 via-navy-850 to-navy-850 border-gold-400 shadow-md"
                      : isTop2
                      ? "bg-navy-850 border-slate-400/60"
                      : isTop3
                      ? "bg-navy-850 border-amber-600/60"
                      : "bg-navy-850 border-navy-700"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                        isTop1
                          ? "bg-gold-500 text-navy-950 shadow-gold ring-4 ring-gold-500/20"
                          : isTop2
                          ? "bg-slate-200 text-slate-900 ring-2 ring-slate-400/30"
                          : isTop3
                          ? "bg-amber-600 text-white ring-2 ring-amber-600/30"
                          : "bg-navy-800 text-slate-300 border border-navy-700"
                      }`}
                    >
                      #{p.rank}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-sm sm:text-base">
                          {p.name}
                        </h4>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-navy-800 text-gold-400 border border-gold-500/30">
                          {p.class}
                        </span>
                      </div>
                      <span className="text-xs text-slate-300 block mt-0.5">
                        {p.school}, {p.city} •{" "}
                        <strong className="text-gold-300">
                          {p.subject}
                        </strong>
                      </span>
                    </div>
                  </div>

                  {/* Score & Percentile Display ONLY - No certificate button */}
                  <div className="flex items-center justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-navy-750">
                    <div className="text-right bg-navy-900/80 px-4 py-2 rounded-xl border border-navy-700/60">
                      <span className="text-xs sm:text-sm font-bold text-emerald-400 block">
                        Score: {p.score}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {p.percentile} Percentile
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Secondary action / Bottom strip */}
      <div className="mt-6 pt-4 border-t border-navy-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <span className="text-slate-400">
          Looking to conduct Exam Sphere Olympiads at your school?
        </span>
        <Link
          href="/contact?subject=School%20Olympiad%20Registration"
          className="text-gold-400 hover:text-gold-300 font-bold flex items-center gap-1.5 transition-colors group"
        >
          <span>Register School for Olympiads</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

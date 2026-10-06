"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Trophy, Download, ArrowRight } from "lucide-react";

interface OlympiadPortalCardProps {
  defaultTab?: "certificate" | "rankings";
  className?: string;
}

export default function OlympiadPortalCard({
  defaultTab = "rankings",
  className = "",
}: OlympiadPortalCardProps) {
  const [activeTab, setActiveTab] = useState<"certificate" | "rankings">(defaultTab);

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
      {/* TAB 1: CERTIFICATE DOWNLOAD                                   */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "certificate" && (
        <div className="py-12 sm:py-16 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center mx-auto mb-4 text-gold-400 shadow-inner">
            <Download className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wide">
            This service will soon start
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Online certificate download and digital scorecards will be available once the upcoming Olympiad examination results are declared.
          </p>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 2: EXAM RANKINGS & TOP PERFORMERS                         */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "rankings" && (
        <div className="py-12 sm:py-16 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center mx-auto mb-4 text-gold-400 shadow-inner">
            <Trophy className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wide">
            This service will soon start
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Official Olympiad rankings, state toppers, and merit lists will be published here once examination results are announced.
          </p>
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

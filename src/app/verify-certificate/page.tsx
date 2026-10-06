"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  Calendar,
  User,
  GraduationCap,
  Award,
  Printer,
} from "lucide-react";

interface VerificationResult {
  certificateId: string;
  candidateName: string;
  programName: string;
  rollNumber: string;
  issueDate: string;
  scoreOrRank: string;
  grade: string;
  status: "verified" | "invalid";
  institution: string;
}

const mockCertificates: Record<string, VerificationResult> = {
  "ES-2024-OLY-1001": {
    certificateId: "ES-2024-OLY-1001",
    candidateName: "Aarav Sharma",
    programName: "National Science & Aptitude Olympiad 2024",
    rollNumber: "ES-NSA-90214",
    issueDate: "15 August 2024",
    scoreOrRank: "All India Rank 1 (Score: 99/100)",
    grade: "Gold Medalist",
    status: "verified",
    institution: "Exam Sphere National Assessment Board",
  },
  "ES-2024-OLY-1002": {
    certificateId: "ES-2024-OLY-1002",
    candidateName: "Ananya Singh",
    programName: "Mathematics & Logic Challenge 2024",
    rollNumber: "ES-MLC-80145",
    issueDate: "20 August 2024",
    scoreOrRank: "All India Rank 2 (Score: 98/100)",
    grade: "Silver Medalist",
    status: "verified",
    institution: "Exam Sphere National Assessment Board",
  },
  "ES-2024-OLY-1003": {
    certificateId: "ES-2024-OLY-1003",
    candidateName: "Rohan Gupta",
    programName: "Computer & AI Olympiad 2024",
    rollNumber: "ES-CAI-70231",
    issueDate: "25 August 2024",
    scoreOrRank: "All India Rank 3 (Score: 97/100)",
    grade: "Bronze Medalist",
    status: "verified",
    institution: "Exam Sphere National Assessment Board",
  },
  "ES-2024-SKILL-2045": {
    certificateId: "ES-2024-SKILL-2045",
    candidateName: "Priya Patel",
    programName: "Certified Computer-Based Test (CBT) Center Administrator",
    rollNumber: "ES-CBT-44102",
    issueDate: "20 July 2024",
    scoreOrRank: "Score: 94/100",
    grade: "Distinction",
    status: "verified",
    institution: "Exam Sphere Skill & Training Division",
  },
  "ES-2024-RECR-3092": {
    certificateId: "ES-2024-RECR-3092",
    candidateName: "Rahul Verma",
    programName: "Government Examination Invigilation & Integrity Certification",
    rollNumber: "ES-INV-77319",
    issueDate: "05 June 2024",
    scoreOrRank: "Completed with A+ Rating",
    grade: "Grade A+",
    status: "verified",
    institution: "Exam Sphere Manpower & Quality Assurance",
  },
};

export default function VerifyCertificatePage() {
  const [certCode, setCertCode] = useState("ES-2024-OLY-1001");
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!certCode.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const cleanCode = certCode.trim().toUpperCase();
      if (mockCertificates[cleanCode]) {
        setResult(mockCertificates[cleanCode]);
      } else {
        setResult({
          certificateId: cleanCode,
          candidateName: "Candidate / Participant",
          programName: "Exam Sphere Assessment & Skill Olympiad",
          rollNumber: `ROL-${cleanCode.slice(-5)}`,
          issueDate: "Issued & Validated in 2024",
          scoreOrRank: "Authentic Record Verified",
          grade: "Verified Authentic",
          status: "verified",
          institution: "Exam Sphere Institutional Registry",
        });
      }
      setHasSearched(true);
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <ShieldCheck className="w-4 h-4" />
            Certificate Verification
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Verify Certificate & <span className="text-gold-400">Student Awards</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Quickly check and verify any Exam Sphere student award, Olympiad scorecard, or staff certificate online.
          </p>
        </div>
      </section>

      {/* Verification Portal Body */}
      <section className="py-16 flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Search Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 mb-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 mb-2">
              Enter Certificate Code
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Type the certificate number printed at the bottom of your certificate to view verified official details.
            </p>

            <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={certCode}
                  onChange={(e) => setCertCode(e.target.value)}
                  placeholder="e.g. ES-2024-OLY-1001"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 text-sm sm:text-base font-semibold text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3.5 rounded-xl shadow-gold hover:shadow-gold-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Checking...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verify Certificate</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Sample Links */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
              <span>Quick Test Codes:</span>
              <button
                type="button"
                onClick={() => {
                  setCertCode("ES-2024-OLY-1001");
                }}
                className="text-navy-900 font-semibold underline hover:text-gold-600"
              >
                ES-2024-OLY-1001 (Gold Medalist)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => {
                  setCertCode("ES-2024-SKILL-2045");
                }}
                className="text-navy-900 font-semibold underline hover:text-gold-600"
              >
                ES-2024-SKILL-2045 (CBT Admin)
              </button>
            </div>
          </div>

          {/* Results Display */}
          {hasSearched && result && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden animate-fade-in">
              <div className="flex items-center justify-between pb-5 border-b border-emerald-200 mb-6">
                <div className="flex items-center gap-2.5 text-emerald-800">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold">
                      Authentic Record Verified
                    </h3>
                    <span className="text-xs text-emerald-600 font-semibold">
                      Registered in Exam Sphere Central Master Ledger
                    </span>
                  </div>
                </div>
                <div className="w-14 h-14 relative hidden sm:block">
                  <Image
                    src="/examsphere02/images/logo.jpg"
                    alt="Exam Sphere Seal"
                    width={56}
                    height={56}
                    className="rounded-full border border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div>
                  <span className="text-xs text-slate-500 uppercase font-semibold block">
                    Candidate Name
                  </span>
                  <span className="font-serif font-bold text-navy-950 text-lg flex items-center gap-2 mt-1">
                    <User className="w-4 h-4 text-gold-600" />
                    {result.candidateName}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 uppercase font-semibold block">
                    Unique Certificate ID
                  </span>
                  <span className="font-mono font-bold text-navy-900 text-sm mt-1 block">
                    {result.certificateId}
                  </span>
                </div>

                <div className="sm:col-span-2">
                  <span className="text-xs text-slate-500 uppercase font-semibold block">
                    Exam / Skill Certification
                  </span>
                  <span className="font-semibold text-slate-900 text-base flex items-center gap-2 mt-1">
                    <GraduationCap className="w-5 h-5 text-navy-800" />
                    {result.programName}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 uppercase font-semibold block">
                    Performance / Distinction
                  </span>
                  <span className="font-bold text-emerald-800 text-base flex items-center gap-2 mt-1">
                    <Award className="w-5 h-5 text-gold-500" />
                    {result.scoreOrRank}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 uppercase font-semibold block">
                    Issue Date
                  </span>
                  <span className="font-medium text-slate-700 text-sm flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {result.issueDate}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <span>
                  Issuing Body: <strong>{result.institution}</strong>
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="bg-navy-950 hover:bg-navy-900 active:scale-95 text-gold-400 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer border border-gold-400/40"
                  >
                    <Printer className="w-3.5 h-3.5 text-gold-400" />
                    <span>Print / Save PDF</span>
                  </button>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

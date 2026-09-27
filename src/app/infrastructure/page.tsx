import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Server,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Infrastructure & Testing Facilities | Exam Sphere",
  description:
    "Explore Exam Sphere's state-of-the-art Computer-Based Test (CBT) labs, offline exam halls, CCTV command centers, and power redundancy systems.",
};

const infrastructureFacilities = [
  {
    id: "cbt-labs",
    title: "High-Capacity Computer-Based Testing (CBT) Labs",
    tagline: "Air-Gapped, High-Speed, Zero-Latency Examination Nodes",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    desc: "Our CBT auditoriums are purpose-built for high-volume recruitment exams and competitive entrance tests. Every terminal is housed in individual anti-glare partitioned cubicles to prevent side-viewing.",
    features: [
      "Latest Core-i5/i7 workstations with 16GB RAM and fast NVMe solid-state storage",
      "Air-gapped local server architecture isolated from public internet during test delivery",
      "Lockdown browser software preventing screen recording, shortcuts, or external process launching",
      "Ergonomic seating engineered for long-duration candidate comfort",
    ],
    specs: {
      capacity: "1,500+ Terminals per Regional Cluster",
      network: "Gigabit Cat6 LAN with Redundant Switches",
      display: "21.5-inch Anti-Glare Full HD Displays",
    },
  },
  {
    id: "offline-halls",
    title: "Standardized Offline Examination Halls",
    tagline: "Well-Lit, Ergonomically Spaced Pen-and-Paper Venues",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    desc: "Engineered to satisfy stringent staff selection and university criteria, our paper-and-pen centers provide climate-controlled, noise-dampened environments.",
    features: [
      "Pre-numbered seating with minimum 1.5-meter candidate separation",
      "Uniform high-lumen flicker-free LED illumination across all examination bays",
      "Clear acoustic public address (PA) systems for timed bell notifications and instructions",
      "Strict perimeter control preventing unauthorized visitor approach",
    ],
    specs: {
      capacity: "3,000+ Candidates per Shift Across Halls",
      spacing: "1.5m Minimum Desk Isolation",
      ventilation: "Full HVAC and Climate Control",
    },
  },
  {
    id: "command-center",
    title: "Centralized CCTV Command & Surveillance Room",
    tagline: "24/7 Multi-Angle HD Monitoring & Video Wall Logging",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    desc: "A centralized surveillance room equipped with high-resolution IP dome and bullet cameras covering every entry point, corridor, frisking enclosure, and examination row.",
    features: [
      "360-degree pan-tilt-zoom (PTZ) cameras with infrared night vision capability",
      "Multi-screen central video wall streaming live feeds to external government observers",
      "Tamper-proof localized NVR storage with cloud backup retaining 90-day forensic footage",
      "AI-driven automated anomaly alerts for unauthorized movement or suspicious gathering",
    ],
    specs: {
      coverage: "100% Blindspot-Free Surveillance",
      resolution: "4K HD Optical Zoom Cameras",
      retention: "90 Days Encrypted Archival Storage",
    },
  },
  {
    id: "biometric-frisking",
    title: "Biometric Verification & Dual Frisking Enclosures",
    tagline: "Foolproof Candidate Identity Matching & Metal Detection",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    desc: "Rigorous entry filtration ensuring zero impersonation and preventing prohibited electronic gadgets (smartphones, Bluetooth devices, smartwatches) from entering the perimeter.",
    features: [
      "Biometric fingerprint match against national candidate database records",
      "High-accuracy optical iris scanners and facial recognition attendance kiosks",
      "Segregated male and female frisking enclosures with trained security personnel",
      "Door-frame metal detectors (DFMD) paired with multi-zone handheld metal detectors (HHMD)",
    ],
    specs: {
      speed: "15 Seconds Average Verification per Candidate",
      accuracy: "99.99% Biometric Authentication Match",
      privacy: "Strictly Private Female Frisking Booths",
    },
  },
  {
    id: "power-backup",
    title: "Industrial Power Station & UPS Redundancy",
    tagline: "Triple-Tier Electrical Protection for Zero-Downtime Tests",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    desc: "Unpredictable municipal power disruptions never jeopardize test takers at Exam Sphere centers. Our facilities feature industrial power redundancy architectures.",
    features: [
      "Online double-conversion UPS arrays with zero millisecond transfer latency",
      "Dual heavy-duty silent diesel generators (GenSets) with auto-mains failure (AMF) panels",
      "Dedicated server room power circuitry isolated from lighting and peripheral loads",
      "Regular scheduled load testing prior to every high-stakes examination day",
    ],
    specs: {
      switchTime: "0 Milliseconds (True Online UPS)",
      duration: "12+ Hours Autonomous Generator Run Time",
      surgeProtection: "Class-1 Transient Voltage Suppressors",
    },
  },
  {
    id: "strong-room",
    title: "Confidential Strong Room & Vault",
    tagline: "Bank-Grade Custody for Question Papers and OMR Trunks",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    desc: "Confidential examination papers, question booklets, and sealed OMR answer trunks are secured in double-locked, surveillance-guarded strong rooms.",
    features: [
      "Dual-custody lock protocol requiring two authorized key-holders for entry",
      "24/7 dedicated CCTV camera directed at vault entrance with live remote monitoring",
      "Fire-resistant safes, moisture-proof storage, and heavy metal trunk locks",
      "Meticulous manual logbook and biometric access register recording every entry/exit",
    ],
    specs: {
      locks: "Dual Key Electronic + Mechanical Safe Locks",
      guarding: "Round-the-Clock Armed Security Guards",
      fireSafety: "FM-200 Clean Agent Fire Suppression",
    },
  },
];

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-20 lg:py-24 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            Testing Infrastructure
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            World-Class <span className="text-gold-400">Exam Center Facilities</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Engineered for high-stakes government, banking, and academic examinations with zero tolerance for hardware failures, power interruptions, or security compromises.
          </p>
        </div>
      </section>

      {/* 2. Key Metrics Strip */}
      <section className="bg-navy-900 text-white py-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-navy-950/60 border border-navy-800">
              <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">
                1,500+
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                CBT Terminals per Cluster
              </span>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/60 border border-navy-800">
              <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">
                100%
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                CCTV Video Wall Coverage
              </span>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/60 border border-navy-800">
              <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">
                0 ms
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                Online UPS Switchover
              </span>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/60 border border-navy-800">
              <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">
                ISO 27001
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                Data Security Standard
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Facility Showcase */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Facilities Overview"
            title="Comprehensive Examination Architecture"
            description="Inspect our audited examination halls, control centers, and security checkpoints built to conduct flawless assessments."
          />

          <div className="space-y-16">
            {infrastructureFacilities.map((fac, idx) => (
              <div
                key={fac.id}
                className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Image */}
                  <div className="lg:col-span-6">
                    <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md group">
                      <Image
                        src={fac.image}
                        alt={fac.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider block">
                          Facility Spec #{idx + 1}
                        </span>
                        <h4 className="font-serif text-base font-bold text-white">
                          {fac.tagline}
                        </h4>
                      </div>
                    </div>

                    {/* Quick Specs Pill Box */}
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                      {Object.entries(fac.specs).map(([key, val]) => (
                        <div
                          key={key}
                          className="p-2.5 rounded-xl bg-white border border-slate-200"
                        >
                          <span className="text-[10px] text-slate-400 uppercase block font-semibold">
                            {key}
                          </span>
                          <span className="font-bold text-navy-950 mt-0.5 block leading-tight">
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-6">
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                      {fac.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                      {fac.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {fac.desc}
                    </p>

                    <h5 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                      Key Capabilities & Safeguards:
                    </h5>
                    <ul className="space-y-2 mb-6">
                      {fac.features.map((item, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      <span>Inquire About Booking this Facility</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compliance & Audit Checklist */}
      <section className="py-16 bg-navy-950 text-white border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block mb-2">
              Statutory Audits
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Fully Compliant With National Testing Body Guidelines
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Every Exam Sphere center satisfies rigorous compliance requirements before hosting a single candidate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
              <ShieldCheck className="w-8 h-8 text-gold-400 mb-3" />
              <h4 className="font-serif text-base font-bold text-white mb-2">
                Physical Security & Access
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Perimeter fencing, armed guards, separate frisking cabins, DFMD gates, and biometric candidate entry verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
              <Server className="w-8 h-8 text-gold-400 mb-3" />
              <h4 className="font-serif text-base font-bold text-white mb-2">
                Network & Cyber Hardening
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Air-gapped server racks, restricted USB ports, disablement of external internet during exams, and zero wireless interference.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
              <Zap className="w-8 h-8 text-gold-400 mb-3" />
              <h4 className="font-serif text-base font-bold text-white mb-2">
                Safety & Evacuation Standards
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Certified fire safety equipment, illuminated emergency exits, disability-friendly ramps, and on-premise medical first-aid kits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 bg-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
            Schedule an Infrastructure Inspection or Center Audit
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Examination boards and institutional coordinators are invited to inspect our test centers, command rooms, and security systems firsthand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-850 text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-navy transition-all"
          >
            <span>Book Center Audit & Visit</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}

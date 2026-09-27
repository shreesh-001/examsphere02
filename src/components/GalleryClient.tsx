"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Camera,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "olympiad" | "center" | "training" | "awards" | "manpower";
  categoryLabel: string;
  caption: string;
  image: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "National Science & Aptitude Olympiad Examination",
    category: "olympiad",
    categoryLabel: "Olympiads & Students",
    caption:
      "School students solving high-level problem solving and analytical reasoning questions under strict proctored conditions.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    date: "August 2024",
  },
  {
    id: "g2",
    title: "High-Density Computer-Based Test (CBT) Center",
    category: "center",
    categoryLabel: "Testing Centers & CBT",
    caption:
      "Audited CBT auditorium featuring anti-glare partitioned cubicles, isolated Cat6 LAN, and uninterrupted online UPS power backup.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    date: "July 2024",
  },
  {
    id: "g3",
    title: "Annual Merit Felicitation & Scholarship Ceremony",
    category: "awards",
    categoryLabel: "Awards & Recognition",
    caption:
      "Recognizing top Olympiad rank holders, medalists, and school coordinators with official Exam Sphere crest trophies.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    date: "September 2024",
  },
  {
    id: "g4",
    title: "Exam Invigilator Ethics & Standard Operating Briefing",
    category: "training",
    categoryLabel: "Training & Workshops",
    caption:
      "Pre-exam tactical workshop ensuring zero-malpractice invigilation, biometric verification compliance, and crisis response.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    date: "June 2024",
  },
  {
    id: "g5",
    title: "Candidate Biometric Registration & Verification Enclosure",
    category: "manpower",
    categoryLabel: "Manpower & Security",
    caption:
      "Trained technicians verifying candidate fingerprints and checking photo IDs before granting hall admission.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    date: "May 2024",
  },
  {
    id: "g6",
    title: "Standardized Pen-and-Paper Examination Hall",
    category: "center",
    categoryLabel: "Testing Centers & CBT",
    caption:
      "Spacious offline hall with fixed distance numbering, uniform LED illumination, and acoustic clock notification.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    date: "April 2024",
  },
  {
    id: "g7",
    title: "Interactive Classroom Aptitude Prep Session",
    category: "training",
    categoryLabel: "Training & Workshops",
    caption:
      "Students mastering mental math, speed calculation, and non-verbal reasoning techniques under master trainers.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    date: "March 2024",
  },
  {
    id: "g8",
    title: "Centralized IT Server Room & CCTV Surveillance Desk",
    category: "center",
    categoryLabel: "Testing Centers & CBT",
    caption:
      "Real-time monitoring of live camera feeds from exam halls, corridors, and strong room perimeters.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    date: "February 2024",
  },
  {
    id: "g9",
    title: "School Students Engaged in Interactive STEM Learning",
    category: "olympiad",
    categoryLabel: "Olympiads & Students",
    caption:
      "Inspiring scientific inquiry and practical experimentation among young minds through Exam Sphere learning kits.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    date: "January 2024",
  },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "olympiad", label: "Olympiads & Students" },
  { id: "center", label: "Testing Centers & CBT" },
  { id: "training", label: "Training & Workshops" },
  { id: "awards", label: "Awards & Recognition" },
  { id: "manpower", label: "Manpower & Security" },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-20 lg:py-24 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <Camera className="w-3.5 h-3.5" />
            Visual Documentation
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Exam Sphere <span className="text-gold-400">Media Gallery</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A photographic showcase of our Olympiad examinations, computer testing facilities, invigilator training programs, and student felicitation ceremonies.
          </p>
        </div>
      </section>

      {/* 2. Filter Navigation Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 sticky top-[69px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-navy-900 text-gold-400 shadow-md border border-gold-500/40"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-navy-900 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Responsive Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-gold-500 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-navy-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-navy-900/90 text-gold-400 border border-gold-400/40 backdrop-blur-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Zoom indicator hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-gold-500/90 text-navy-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <ZoomIn className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] text-slate-300 block mb-0.5">
                      {item.date}
                    </span>
                    <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Subtext info */}
                <div className="p-4 bg-white flex-grow flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-gold-600 font-semibold">
                    <span>Click to view enlarged</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <Camera className="w-12 h-12 mx-auto text-slate-300 mb-3" />
              <p className="font-serif text-lg font-bold text-navy-900">
                No photos found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-3 text-sm text-gold-600 underline font-semibold"
              >
                View all photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Interactive Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/95 backdrop-blur-md animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-60 p-2.5 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white transition-all cursor-pointer border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white transition-all cursor-pointer border border-white/20"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white transition-all cursor-pointer border border-white/20"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Card */}
          <div className="relative w-full max-w-4xl bg-navy-900 rounded-3xl overflow-hidden border border-gold-500/40 shadow-2xl flex flex-col">
            {/* Enlarged Image Area */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-navy-950">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain"
              />
            </div>

            {/* Lightbox Details Strip */}
            <div className="p-6 bg-navy-900 text-white border-t border-navy-800">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-400/30">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <span className="text-xs text-slate-400">
                  {lightboxIndex + 1} of {filteredItems.length} • {filteredItems[lightboxIndex].date}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

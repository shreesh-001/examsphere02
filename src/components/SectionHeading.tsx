import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            light
              ? "bg-gold-500/20 text-gold-300 border border-gold-400/30"
              : "bg-navy-50 text-navy-800 border border-navy-200"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-4 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

import React from "react";
import {
  LucideIcon,
  ShieldCheck,
  Award,
  Users2,
  Building,
  CheckCircle2,
  FileCheck2,
  Sparkles,
  Lock,
} from "lucide-react";

interface FeatureCardProps {
  iconName: string;
  title: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

const featureIconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  award: Award,
  users: Users2,
  building: Building,
  check: CheckCircle2,
  fileCheck: FileCheck2,
  sparkles: Sparkles,
  lock: Lock,
};

export default function FeatureCard({
  iconName,
  title,
  description,
  badge,
  highlight = false,
}: FeatureCardProps) {
  const Icon = featureIconMap[iconName] || ShieldCheck;

  return (
    <div
      className={`group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
        highlight
          ? "bg-gradient-to-br from-navy-900 to-navy-950 text-white border-2 border-gold-500/60 shadow-xl shadow-gold/10"
          : "bg-white text-slate-800 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-gold-400"
      }`}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className={`w-13 h-13 p-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
            highlight
              ? "bg-gold-500 text-navy-950 shadow-gold"
              : "bg-gold-50 border border-gold-200 text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950"
          }`}
        >
          <Icon className="w-6 h-6 stroke-[2]" />
        </div>
        {badge && (
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${
              highlight
                ? "bg-white/10 text-gold-300 border border-white/20"
                : "bg-navy-50 text-navy-800 border border-navy-100"
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      <h3
        className={`font-serif text-xl font-bold mb-2.5 ${
          highlight ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-sm leading-relaxed ${
          highlight ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

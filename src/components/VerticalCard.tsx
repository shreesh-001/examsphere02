import React from "react";
import Link from "next/link";
import {
  LucideIcon,
  ArrowRight,
  Trophy,
  Users,
  Briefcase,
  Building2,
  Package,
  GraduationCap,
} from "lucide-react";

export interface VerticalItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  link: string;
  badge?: string;
}

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  users: Users,
  briefcase: Briefcase,
  building: Building2,
  package: Package,
  graduation: GraduationCap,
};

interface VerticalCardProps {
  vertical: VerticalItem;
  theme?: "dark" | "light";
}

export default function VerticalCard({
  vertical,
  theme = "dark",
}: VerticalCardProps) {
  const Icon = iconMap[vertical.iconName] || Trophy;

  if (theme === "dark") {
    return (
      <div className="group relative rounded-2xl bg-gradient-to-b from-navy-800/90 to-navy-950/90 border border-navy-700/80 p-7 hover:border-gold-500/80 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-gold/10 flex flex-col justify-between">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/15 transition-all duration-300 pointer-events-none" />

        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="w-14 h-14 rounded-xl bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:text-gold-300 group-hover:scale-110 group-hover:border-gold-400 transition-all duration-300 shadow-inner">
              <Icon className="w-7 h-7 stroke-[1.8]" />
            </div>
            {vertical.badge && (
              <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
                {vertical.badge}
              </span>
            )}
          </div>

          <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-gold-300 transition-colors">
            {vertical.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {vertical.shortDesc}
          </p>
        </div>

        <Link
          href={vertical.link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors pt-2 border-t border-navy-700/60 group-hover:border-gold-500/30"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="group relative rounded-2xl bg-white border border-slate-200 p-7 hover:border-gold-500 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <Icon className="w-7 h-7 stroke-[1.8]" />
          </div>
          {vertical.badge && (
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-navy-50 text-navy-800 border border-navy-200">
              {vertical.badge}
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl font-bold text-navy-900 mb-2.5 group-hover:text-navy-700 transition-colors">
          {vertical.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {vertical.shortDesc}
        </p>
      </div>

      <Link
        href={vertical.link}
        className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors pt-2 border-t border-slate-100 group-hover:border-gold-200"
      >
        <span>Explore Details</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
      </Link>
    </div>
  );
}

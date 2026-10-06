"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Verticals", href: "/verticals" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/98 backdrop-blur-md shadow-xl py-3 border-b border-navy-800"
          : "bg-navy-900 py-4 border-b border-navy-800/80"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg pr-2"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-400/80 bg-navy-950 shadow-md group-hover:border-gold-300 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
              <Image
                src="/examsphere02/images/logo.jpg"
                alt="Exam Sphere Emblem Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-extrabold tracking-wider text-white group-hover:text-gold-300 transition-colors uppercase leading-none">
                EXAM SPHERE
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gold-400 tracking-[0.2em] uppercase mt-1 leading-none">
                REDEFINING EXCELLENCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-gold-400 font-semibold bg-navy-800/80"
                      : "text-slate-100 hover:text-gold-300 hover:bg-navy-800/50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gold-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gold-400" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-navy-800 animate-fade-in px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "bg-navy-800 text-gold-400 font-bold border-l-4 border-gold-400"
                      : "text-slate-200 hover:bg-navy-850 hover:text-gold-300"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-400">→</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 text-center text-xs text-slate-400 border-t border-navy-800/60 mt-3">
            <span>Exam Sphere • Redefining Excellence</span>
          </div>
        </div>
      )}
    </header>
  );
}

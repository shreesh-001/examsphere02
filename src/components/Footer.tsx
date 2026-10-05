import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Top Banner / Call to Action Strip */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-b border-navy-700/60 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-gold-400 font-semibold tracking-wider text-xs uppercase block mb-1">
              Partner With Exam Sphere
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to Organize Fair, Honest Exams?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              From school Olympiads to modern computer exam centers and honest test staff, we help make every test easy and secure.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-full text-sm shadow-gold transition-all duration-200"
            >
              Get In Touch
            </Link>
            <Link
              href="/verticals"
              className="bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded-full text-sm border border-navy-600 transition-all duration-200"
            >
              View All Verticals
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400/80 bg-navy-900 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Exam Sphere Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-wider block">
                  EXAM SPHERE
                </span>
                <span className="text-[11px] font-semibold text-gold-400 tracking-widest block uppercase">
                  REDEFINING EXCELLENCE
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Exam Sphere helps schools, colleges, and government bodies run fair, honest exams. We provide talent Olympiads, trained test staff, modern computer labs, and quality school supplies.
            </p>

            {/* Corporate Identification Info */}
            <div className="pt-3 border-t border-navy-800/80 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center justify-between py-0.5 border-b border-navy-800/50">
                <span className="text-slate-400">Founders:</span>
                <span className="text-white font-medium">Ashwani Kumar, Owesh Ahmad</span>
              </div>
              <div className="flex items-center justify-between py-0.5 border-b border-navy-800/50">
                <span className="text-slate-400">LLPIN:</span>
                <span className="text-gold-400 font-mono font-semibold">ADB-3886</span>
              </div>
              <div className="flex items-center justify-between py-0.5 border-b border-navy-800/50">
                <span className="text-slate-400">Incorporation Date:</span>
                <span className="text-slate-200 font-medium">19/08/2026</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span className="text-slate-400">Udyam Reg. No.:</span>
                <span className="text-gold-400 font-mono font-semibold">UDYAM-UP-50-0297898</span>
              </div>
            </div>

            {/* Social Icons (SVGs) */}
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Our Verticals</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#partners"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  <span>Our Partners</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/verticals#olympiads"
                  className="hover:text-gold-400 transition-colors block"
                >
                  Exam Sphere Olympiads
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals#recruitment-manpower"
                  className="hover:text-gold-400 transition-colors block"
                >
                  Outsourcing Recruitment (Manpower Supply)
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals#centers"
                  className="hover:text-gold-400 transition-colors block"
                >
                  Government Exam Management
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals#supplies"
                  className="hover:text-gold-400 transition-colors block"
                >
                  Educational Support Goods & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals#training"
                  className="hover:text-gold-400 transition-colors block"
                >
                  Training & Skill Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contact Info */}
          <div>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              Registered Office
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Exam Sphere LLP</strong>
                  <span className="text-slate-300 text-xs sm:text-sm leading-relaxed block">
                    529/297, PAC Gate, Raheem Nagar, Mahanagar, Lucknow, Uttar Pradesh – 226006
                  </span>
                  <span className="text-gold-400 text-xs block mt-1">
                    Founders: Ashwani Kumar, Owesh Ahmad
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Contact Numbers:</strong>
                  <div className="text-xs sm:text-sm text-slate-300 space-y-1">
                    <a
                      href="tel:+918881088575"
                      className="hover:text-gold-300 block transition-colors"
                    >
                      +91 88810 88575
                    </a>
                    <a
                      href="tel:+918005147115"
                      className="hover:text-gold-300 block transition-colors"
                    >
                      +91 80051 47115
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Public Email:</strong>
                  <a
                    href="mailto:examsphereindia12@gmail.com"
                    className="hover:text-gold-300 text-xs sm:text-sm text-slate-300 block transition-colors break-all"
                  >
                    examsphereindia12@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">Exam Sphere LLP</strong>. All rights reserved. Redefining Excellence.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span>LLPIN: <strong className="text-slate-300 font-mono">ADB-3886</strong></span>
            <span className="text-slate-600">•</span>
            <span>Udyam: <strong className="text-slate-300 font-mono">UDYAM-UP-50-0297898</strong></span>
            <span className="text-slate-600">•</span>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

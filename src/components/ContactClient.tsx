"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ChevronDown,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    q: "How can schools register their students for Exam Sphere Olympiads?",
    a: "Schools can register directly through our institutional portal or by submitting an inquiry here. We provide printed or digital registration kits, student diagnostic guides, sample papers, and dispatch question materials straight to your school premises.",
  },
  {
    q: "What is the turnaround time for deploying examination invigilators and center manpower?",
    a: "For scheduled competitive exams, we require 7 to 14 days notice to conduct center-specific briefing and SOP alignment. However, for emergency observer or invigilator reinforcements, our reserve flying squads can mobilize within 24 to 48 hours across North India.",
  },
  {
    q: "Are Exam Sphere Computer-Based Testing (CBT) centers audited for government exams?",
    a: "Yes. All our testing hubs adhere strictly to state and central testing commission guidelines. They feature air-gapped local server environments, biometric attendance, uninterrupted double-conversion online UPS systems, silent diesel generators, and 100% CCTV video-wall surveillance.",
  },
  {
    q: "How do employers or academic institutions verify student certificates?",
    a: "Every certificate issued by Exam Sphere features a unique cryptographic serial ID and verifiable QR seal. You can verify any credential in seconds by clicking the 'Verify Certificate' button in our navbar or on the home page.",
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vertical: "General Inquiry",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-20 lg:py-24 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            Reach Out to Us
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Contact <span className="text-gold-400">Exam Sphere</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions about conducting Olympiads, booking our CBT facilities, or staffing your examination centers? Our administrative coordinators are ready to assist.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Grid & Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Address Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-gold-600 tracking-wider uppercase block mb-1">
                  Institutional Headquarters
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                  We Are Always Here to Assist You
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Headquartered in Shahganj, Jaunpur, with operational coordinators deploying testing services across Uttar Pradesh and North India.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-gold-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-900 mb-1">
                      Registered Main Office
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Shahganj, Jaunpur, Uttar Pradesh - 222197, India
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                      Regional Command Hub
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone & Hotline */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-gold-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-900 mb-1">
                      Telephone & WhatsApp
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Main Desk:{" "}
                      <a
                        href="tel:+919876543210"
                        className="text-navy-950 font-semibold hover:text-gold-600"
                      >
                        +91 98765 43210
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Support:{" "}
                      <a
                        href="tel:+918765432109"
                        className="text-navy-950 font-semibold hover:text-gold-600"
                      >
                        +91 87654 32109
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-gold-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-900 mb-1">
                      Official Electronic Mail
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      General:{" "}
                      <a
                        href="mailto:info@examsphere.in"
                        className="text-navy-950 font-semibold hover:text-gold-600"
                      >
                        info@examsphere.in
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Assessments:{" "}
                      <a
                        href="mailto:support@examsphere.in"
                        className="text-navy-950 font-semibold hover:text-gold-600"
                      >
                        support@examsphere.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-gold-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-900 mb-1">
                      Working Timings
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Monday to Saturday: 9:00 AM – 6:00 PM IST
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      *Emergency Examination War-Room active 24/7 during live testing days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900" />

                <div className="mb-8">
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                    Send Us a Message
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Fill out the form below and an Exam Sphere coordinator will connect with you within 4 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-navy-950 mb-2">
                      Inquiry Successfully Received!
                    </h4>
                    <p className="text-slate-700 text-sm max-w-md mx-auto mb-4">
                      Thank you for contacting Exam Sphere. Your reference ticket number is{" "}
                      <strong className="text-navy-900 font-mono">
                        ES-INQ-{Math.floor(100000 + Math.random() * 900000)}
                      </strong>
                      . Our desk officer will respond to your provided email or phone promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          vertical: "General Inquiry",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-full transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@organization.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium"
                        />
                      </div>
                    </div>

                    {/* Phone & Vertical Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Phone / WhatsApp Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 00000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Vertical of Interest
                        </label>
                        <select
                          value={formData.vertical}
                          onChange={(e) =>
                            setFormData({ ...formData, vertical: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium bg-white"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Exam Sphere Olympiads">Exam Sphere Olympiads</option>
                          <option value="Manpower Supply">Manpower Supply</option>
                          <option value="Outsourcing Recruitment">Outsourcing Recruitment</option>
                          <option value="Government Exam Centers">Government Exam Centers (CBT & Offline)</option>
                          <option value="Educational Support Goods">Educational Support Goods & Services</option>
                          <option value="Training & Skill Development">Training & Skill Development</option>
                          <option value="Certificate Verification">Certificate Verification Help</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Subject / Proposal Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Request for 500-Candidate CBT Lab Center Booking"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Detailed Message / Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Please provide specifics: number of candidates, tentative exam dates, school name or testing authority requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 px-6 rounded-xl shadow-gold hover:shadow-gold-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Transmission...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Official Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Embedded Google Map Placeholder */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-600 tracking-wider uppercase block mb-1">
              Geographical Location
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
              Exam Sphere Headquarters Map
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Shahganj, Jaunpur, Uttar Pradesh - 222197, India
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200/90 relative h-96 sm:h-[420px] bg-slate-200">
            {/* Live embedded Google Map */}
            <iframe
              title="Exam Sphere Shahganj Jaunpur Location"
              src="https://maps.google.com/maps?q=Shahganj,+Jaunpur,+Uttar+Pradesh,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105"
            />
            {/* Map Info Overlay Card */}
            <div className="absolute top-4 left-4 p-4 rounded-xl bg-navy-950/90 backdrop-blur-md border border-gold-400/40 text-white shadow-lg hidden sm:block max-w-xs">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase mb-1">
                <Building className="w-4 h-4" />
                <span>Exam Sphere Main Office</span>
              </div>
              <p className="text-xs text-slate-300">
                Shahganj, Jaunpur, UP 222197
              </p>
              <span className="inline-block mt-1 text-[10px] text-gold-300 font-medium">
                Redefining Excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Clarifications on Testing Protocols"
            description="Find answers to common inquiries regarding examination procedures, center accreditation, and Olympiad registration."
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-4 font-serif text-base font-bold text-navy-900 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-600 transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

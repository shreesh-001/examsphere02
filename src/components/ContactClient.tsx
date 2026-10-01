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
    q: "How can schools register for Exam Sphere Olympiads?",
    a: "Schools can register by contacting us directly through this form or calling our helpline. We send printed question papers, study materials, and certificates straight to your school premises.",
  },
  {
    q: "How quickly can you provide exam invigilators and supervisors?",
    a: "For scheduled exams, we usually need 1 to 2 weeks to prepare and brief our staff. For urgent needs, our standby teams can assist within 24 to 48 hours.",
  },
  {
    q: "Are your computer centers approved for government exams?",
    a: "Yes. All our computer testing centers follow national test guidelines. They have fast computers, isolated local networks without internet distractions, battery backup, and CCTV cameras.",
  },
  {
    q: "How can students or parents verify certificates?",
    a: "Every certificate has a unique serial number. You can verify it online in seconds by clicking 'Verify Certificate' at the top of the website.",
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
      <section className="bg-navy-950 text-white py-18 lg:py-22 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-500/20 text-gold-300 border border-gold-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            Reach Out to Us
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
            Contact <span className="text-gold-400">Exam Sphere</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our Olympiads, booking an exam center, or hiring exam staff? We are always here to help.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Grid & Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Address Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-gold-600 tracking-wider uppercase block mb-1">
                  Our Office
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
                  We Are Here to Help
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Headquartered in Lucknow, Uttar Pradesh, Exam Sphere LLP provides comprehensive exam and educational management services across India.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-gold-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-900 mb-1">
                      Registered Office Address
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      529/297, PAC Gate, Raheem Nagar, Mahanagar, Lucknow, Uttar Pradesh – 226006
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-[11px] font-semibold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                        Exam Sphere LLP
                      </span>
                      <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                        LLPIN: ADB-3886
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone & Hotline */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-gold-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-900 mb-1">
                      Phone & Support
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Primary:{" "}
                      <a
                        href="tel:+918881088575"
                        className="text-navy-950 font-semibold hover:text-gold-600"
                      >
                        +91 88810 88575
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Secondary:{" "}
                      <a
                        href="tel:+918005147115"
                        className="text-navy-950 font-semibold hover:text-gold-600"
                      >
                        +91 80051 47115
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-gold-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Public Email:{" "}
                      <a
                        href="mailto:examsphereindia12@gmail.com"
                        className="text-navy-950 font-semibold hover:text-gold-600 break-all"
                      >
                        examsphereindia12@gmail.com
                      </a>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Udyam: UDYAM-UP-50-0297898
                    </p>
                  </div>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-gold-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-900 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Monday to Saturday: 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      *Emergency support available during live exam days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900" />

                <div className="mb-7">
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                    Send a Message
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                    How Can We Help You?
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Fill in the form below and our team will get back to you within 4 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-fade-in">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-navy-950 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-slate-700 text-sm max-w-md mx-auto mb-4">
                      Thank you for contacting Exam Sphere. We have received your inquiry and will reach out to you shortly by phone or email.
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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Your Name <span className="text-red-500">*</span>
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
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@school.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium"
                        />
                      </div>
                    </div>

                    {/* Phone & Service Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
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
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Service Needed
                        </label>
                        <select
                          value={formData.vertical}
                          onChange={(e) =>
                            setFormData({ ...formData, vertical: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium bg-white"
                        >
                          <option value="General Inquiry">General Question</option>
                          <option value="Exam Sphere Olympiads">School Olympiads</option>
                          <option value="Outsourcing Recruitment (Manpower Supply)">Outsourcing Recruitment (Manpower Supply)</option>
                          <option value="Government Exam Management">Government Exam Management</option>
                          <option value="Educational Support Goods">Exam Stationery & School Supplies</option>
                          <option value="Training & Skill Development">Training & Workshops</option>
                          <option value="Certificate Verification">Certificate Verification Help</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Booking 300 Computer Desks for an Entrance Test"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Please tell us about your requirements, such as number of students, exam dates, or school name..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 px-6 rounded-xl shadow-gold hover:shadow-gold-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
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

      {/* 3. Embedded Google Map */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-gold-600 tracking-wider uppercase block mb-1">
              Find Us on Map
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
              Exam Sphere Registered Office
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              529/297, PAC Gate, Raheem Nagar, Mahanagar, Lucknow, Uttar Pradesh – 226006
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative h-80 sm:h-96 bg-slate-200">
            <iframe
              title="Exam Sphere Lucknow Location"
              src="https://maps.google.com/maps?q=529/297,+PAC+Gate,+Raheem+Nagar,+Mahanagar,+Lucknow,+Uttar+Pradesh,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
                <span>Exam Sphere LLP</span>
              </div>
              <p className="text-xs text-slate-300">
                Mahanagar, Lucknow, UP 226006
              </p>
              <span className="inline-block mt-1 text-[10px] text-gold-300 font-medium">
                Redefining Excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Help & Answers"
            title="Common Questions"
            description="Quick answers about our exams, test centers, and student certificates."
          />

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-4 font-serif text-base font-bold text-navy-900 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-600 transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

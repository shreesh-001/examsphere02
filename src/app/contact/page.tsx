import ContactClient from "@/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Exam Sphere - Redefining Excellence",
  description:
    "Contact Exam Sphere in Shahganj, Jaunpur, Uttar Pradesh. Get in touch for Olympiad inquiries, exam center bookings, and manpower solutions.",
};

export default function ContactPage() {
  return <ContactClient />;
}

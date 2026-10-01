import React from "react";
import { Metadata } from "next";
import VerticalsClient from "@/components/VerticalsClient";

export const metadata: Metadata = {
  title: "Our Verticals | Exam Sphere - Redefining Excellence",
  description:
    "Explore the comprehensive business verticals of Exam Sphere: Olympiads, Outsourcing Recruitment (Manpower Supply), Government Exam Management, Educational Supplies, and Training.",
};

export default function VerticalsPage() {
  return <VerticalsClient />;
}

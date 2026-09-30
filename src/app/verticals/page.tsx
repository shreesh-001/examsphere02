import React from "react";
import { Metadata } from "next";
import VerticalsClient from "@/components/VerticalsClient";

export const metadata: Metadata = {
  title: "Our Verticals | Exam Sphere - Redefining Excellence",
  description:
    "Explore the six comprehensive business verticals of Exam Sphere: Olympiads, Manpower Supply, Recruitment Outsourcing, Government Exam Centers, Educational Supplies, and Training.",
};

export default function VerticalsPage() {
  return <VerticalsClient />;
}

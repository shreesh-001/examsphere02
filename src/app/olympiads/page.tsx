import React from "react";
import { Metadata } from "next";
import OlympiadsClient from "@/components/OlympiadsClient";

export const metadata: Metadata = {
  title: "Exam Sphere Olympiads | Certificate Download & Top Performers Rankings",
  description:
    "Official Exam Sphere Olympiads portal: Download certificates through certificate number, view state and national rank holders, explore Science, Math, AI, and English competitions.",
};

export default function OlympiadsPage() {
  return <OlympiadsClient />;
}

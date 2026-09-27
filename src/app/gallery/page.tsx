import GalleryClient from "@/components/GalleryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Event Gallery | Exam Sphere",
  description:
    "View photographs of Exam Sphere Olympiad exams, computer-based testing centers, invigilator training workshops, and award ceremonies.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}

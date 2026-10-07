"use client";

import React from "react";
import Image from "next/image";

export default function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-30 overflow-hidden flex items-center justify-center"
    >
      <div className="relative w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] lg:w-[660px] lg:h-[660px] rounded-full overflow-hidden opacity-[0.045] mix-blend-multiply">
        <Image
          src="/images/logo.jpg"
          alt="Exam Sphere Background Watermark"
          fill
          sizes="(max-width: 768px) 460px, 660px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

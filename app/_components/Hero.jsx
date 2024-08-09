"use client";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";

function Hero() {
  const words = [
    {
      text: "Transform",
    },
    {
      text: "your",
    },
    {
      text: "ideas into",
    },
    {
      text: "reality with",
    },
    {
      text: "NeuroForms.",
      className: "text-green-600 dark:text-green-600",
    },
  ];

  return (
    <div
      className="flex flex-col items-center mt-0 h-screen bg-black"

    >
      <p className="mt-40 text-neutral-400 dark:text-neutral-200 text-xs sm:text-base">
        Create Dynamic, Customizable Forms Effortlessly Using AI-Powered
        Recommendations and Beautiful Designs
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="mt-8 flex flex-wrap justify-center">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-800 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
          href="/dashboard"
        >
          Create AI Form
        </a>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"></div>
    </div>
  );
}

export default Hero;

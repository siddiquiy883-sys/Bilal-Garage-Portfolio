"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone } from "lucide-react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter text-white uppercase flex flex-col leading-tight">
          CAR GARAGE{" "}
          <span className="text-red-600 text-sm sm:text-base md:text-lg tracking-wider">
            AUTO SERVICE
          </span>
        </div>

        {/* Call CTA Button */}
        <a
          href="tel:+971567201119"
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full bg-red-600 text-white font-bold text-xs sm:text-sm hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-600/30"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </motion.header>
  );
}

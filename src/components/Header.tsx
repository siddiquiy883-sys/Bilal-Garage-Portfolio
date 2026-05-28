"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
        isScrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase flex flex-col leading-tight">
          CAR GARAGE <span className="text-[#25D366]">AUTO SERVICE</span>
        </div>
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-semibold tracking-widest text-white/70">
          <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
          <a href="#why-us" className="hover:text-white transition-colors">WHY US</a>
          <a href="#expert" className="hover:text-white transition-colors">THE EXPERT</a>
          <a href="#reviews" className="hover:text-white transition-colors">REVIEWS</a>
        </nav>
        <a 
          href="tel:+971547014902" 
          className="hidden sm:inline-block px-6 py-2.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors"
        >
          Call +971 54 701 4902
        </a>
      </div>
    </motion.header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
          <div className="relative pointer-events-auto flex w-full max-w-sm sm:w-auto">
            <a
              href="tel:+971567201119"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              Call Now
            </a>
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 bg-[#1a1a1a] text-white/60 hover:text-white p-1 rounded-full border border-white/10"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

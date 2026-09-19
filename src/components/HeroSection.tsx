"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80"
          alt="Professional car garage service"
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-16 md:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs sm:text-sm font-medium mb-6"
        >
          <span className="animate-pulse">🔥</span> Flat 30% Off — Mon to Thu | Till Oct 30
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight max-w-4xl mb-4"
        >
          YOUR CAR DESERVES THE BEST CARE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-xl text-white/80 max-w-2xl mb-8"
        >
          Trusted Car Service Experts in Al Quoz, Dubai
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="tel:+971567201119"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-2xl transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-xs sm:text-sm text-white/40 flex flex-wrap justify-center gap-x-2 gap-y-1"
        >
          <span>Available 24/7</span>
          <span className="hidden sm:inline">•</span>
          <span>20+ Years Experience</span>
          <span className="hidden sm:inline">•</span>
          <span>All Makes & Models</span>
        </motion.div>
      </div>
    </section>
  );
}

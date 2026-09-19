"use client";
import React from 'react';
import Image from 'next/image';
import { Phone, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative bg-[#050505] py-16 md:py-24 overflow-hidden border-t border-white/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
          alt="Car repair bay"
          fill
          className="object-cover object-center opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase"
        >
          YOUR CAR NEEDS ATTENTION.<br className="hidden md:block" /> LET&apos;S FIX IT TODAY.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto"
        >
          Whether it&apos;s a routine service or an urgent repair — our expert team is ready.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a 
            href="tel:+971567201119"
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=25.1461415,55.2354267&destination_place_id=ChIJwaKikYRp5T4RliO2C5r5T2g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-bold py-4 px-8 rounded-full transition-all text-lg w-full sm:w-auto hover:scale-105"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-base text-white/50 font-medium"
        >
          <span>24/7 Available</span>
          <span className="hidden sm:inline">•</span>
          <span>Al Quoz, Dubai</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-amber-500/80">20+ Years Trusted</span>
        </motion.div>
      </div>
    </section>
  );
}

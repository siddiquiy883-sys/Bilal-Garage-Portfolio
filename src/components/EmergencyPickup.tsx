"use client";
import React from 'react';
import Image from 'next/image';
import { Phone, Clock, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmergencyPickup() {
  return (
    <section className="relative bg-[#0a0a0a] py-10 md:py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80"
          alt="Dark Garage Scene"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
          
          {/* Left Column: 24/7 Emergency */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                24/7 EMERGENCY SERVICE
                <span className="relative flex h-3 w-3 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </h3>
            </div>
            <p className="text-white/80 font-medium text-lg mb-2">
              Car broke down at 2 AM? We answer when others don&apos;t.
            </p>
            <p className="text-white/60 text-sm md:text-base">
              No matter the time or place in Dubai, our emergency response team is ready to dispatch help immediately.
            </p>
          </motion.div>

          {/* Right Column: Free Pickup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#111]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                FREE PICKUP & DELIVERY
              </h3>
            </div>
            <p className="text-white/80 font-medium text-lg mb-2">
              Too busy? We pick up from your home or office, fix it, and deliver back.
            </p>
            <p className="text-white/60 text-sm md:text-base">
              Don&apos;t let car troubles interrupt your day. We handle the logistics completely free of charge.
            </p>
          </motion.div>
          
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <a 
            href="tel:+971567201119"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-base md:text-lg w-full md:w-auto shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            <Phone className="w-5 h-5" />
            Call Now — We&apos;re Available Right Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

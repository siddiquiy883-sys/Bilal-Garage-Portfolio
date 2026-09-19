"use client";
import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LocationMap() {
  return (
    <section className="bg-[#050505] py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-2">
            <MapPin className="text-amber-500 w-6 h-6 md:w-8 md:h-8" />
            VISIT US IN AL QUOZ
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full bg-[#111] p-2 md:p-3 rounded-2xl border border-white/10 shadow-xl mb-6"
        >
          <iframe
            src="https://www.google.com/maps?q=25.1461415,55.2354267&z=15&output=embed"
            className="w-full h-[250px] md:h-[350px] rounded-xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Car Garage Auto Service Location"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between bg-[#111] border border-white/5 rounded-2xl p-5 md:p-6 gap-6"
        >
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/30 uppercase tracking-wide">
                Open 24/7
              </span>
            </div>
            <p className="text-white/90 font-medium text-lg md:text-xl">
              Al Quoz Industrial Area 1, First Al Khail Street, Street 5b, Dubai
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=25.1461415,55.2354267&destination_place_id=ChIJwaKikYRp5T4RliO2C5r5T2g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold py-3 px-6 rounded-full transition-colors w-full sm:w-auto"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
            <a 
              href="tel:+971567201119"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

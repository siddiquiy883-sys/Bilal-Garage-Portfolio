'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Major Car Service',
    desc: 'Complete bumper-to-bumper inspection, oil & filter change, brake check, fluid top-up, and multi-point safety check.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80',
  },
  {
    title: 'Minor Car Service',
    desc: 'Quick oil change, filter check, tire pressure, fluid levels, and basic diagnostic scan.',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80',
  },
  {
    title: 'Engine Repair & Diagnostics',
    desc: 'From check-engine lights to complete engine rebuilds — advanced diagnostics and precision repairs.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80',
  },
  {
    title: 'Brake Service',
    desc: 'Brake pad replacement, disc machining, brake fluid flush, and ABS system repair.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
  },
  {
    title: 'AC Repair & Service',
    desc: 'Gas refill, compressor repair, condenser cleaning, and full AC system diagnostics.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
  },
  {
    title: 'Suspension & Steering',
    desc: 'Shock absorbers, struts, wheel alignment, power steering repair, and ride quality restoration.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80',
  }
];

export default function MechanicalServices() {
  return (
    <section className="py-12 md:py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight"
          >
            What We <span className="text-red-600">Do Best</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Expert care for every make and model — from routine maintenance to complex repairs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative min-h-[200px] md:min-h-[240px] rounded-2xl overflow-hidden group border border-white/5"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-white/80 line-clamp-2 mb-4">{service.desc}</p>
                <a 
                  href="tel:+971567201119"
                  className="inline-flex items-center text-red-500 font-semibold text-sm hover:text-red-400 transition-colors"
                >
                  Book Now &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="tel:+971567201119"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            Call Now to Book Your Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}

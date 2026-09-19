'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AlertTriangle, Thermometer, Volume2, Gauge, Droplets, Car } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: "Dashboard warning lights won't go away",
    desc: "We use advanced OBD-II diagnostics to read every fault code, trace the root cause, and fix it — not just reset the light.",
  },
  {
    icon: Thermometer,
    title: "Car overheating in Dubai's summer heat",
    desc: "Radiator leaks, thermostat failures, coolant issues — we diagnose and repair your cooling system so you don't get stranded.",
  },
  {
    icon: Volume2,
    title: "Strange noises when braking or turning",
    desc: "Grinding brakes, squealing belts, knocking suspension — these are signs of worn parts. We inspect, replace, and test everything.",
  },
  {
    icon: Gauge,
    title: "Car feels sluggish or burns too much fuel",
    desc: "Clogged filters, worn spark plugs, or sensor issues kill performance. Our engine tune-up restores power and fuel efficiency.",
  },
  {
    icon: Droplets,
    title: "Oil or fluid leaking under the car",
    desc: "Whether it's engine oil, coolant, brake fluid, or transmission fluid — we find the leak and fix it before it causes damage.",
  },
  {
    icon: Car,
    title: "Car due for service but dreading the dealer price",
    desc: "We provide dealer-level service quality at independent garage prices. Same parts, same standards, half the cost.",
  }
];

export default function SolutionsSection() {
  return (
    <section className="py-12 md:py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight"
          >
            Common Car Problems <span className="text-red-600">We Fix Every Day</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            If any of these sound familiar, you&apos;re in the right place.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block w-full md:w-5/12 h-[600px] lg:h-[700px] relative rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80"
              alt="Mechanic inspecting car engine"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </motion.div>

          <div className="w-full md:w-7/12 flex flex-col gap-4 md:gap-5">
            {problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111] p-5 rounded-2xl flex gap-4 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="shrink-0 mt-1">
                  <prob.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{prob.title}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            Talk to an Expert — Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

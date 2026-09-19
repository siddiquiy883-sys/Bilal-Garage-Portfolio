'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Receipt, Wrench, Truck, Moon, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: "Same-Day Service, No Appointments Needed",
    desc: "Walk in or call anytime — we start working on your car immediately. Most repairs are done same-day so you're not stuck waiting."
  },
  {
    icon: Receipt,
    title: "You Approve the Price Before We Start",
    desc: "We inspect your car, send you a detailed cost breakdown with photos, and only begin work after you say yes. No surprises on your bill."
  },
  {
    icon: Wrench,
    title: "20 Years of Fixing Cars in Dubai",
    desc: "We've been in Al Quoz since day one. Our mechanics have seen and fixed every problem you can imagine — from Nissan Sunny to Range Rover."
  },
  {
    icon: Truck,
    title: "We Pick Up and Deliver Your Car",
    desc: "Can't make it to the garage? We collect your car from your home or office, fix it, and bring it back. No extra charge."
  },
  {
    icon: Moon,
    title: "Open 24/7 — Even at 3 AM",
    desc: "Car broke down late at night? Other garages are closed. We're not. Call us anytime and our team will be ready."
  },
  {
    icon: ShieldCheck,
    title: "Genuine Parts with Warranty",
    desc: "We use OEM and premium aftermarket parts only. Every replacement comes with a warranty because we stand behind our work."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-24 bg-[#111] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight"
          >
            Why 500+ Car Owners <span className="text-red-600">Choose Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Real reasons, not marketing talk
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1a1a1a] p-5 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col"
            >
              <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0">
                <reason.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                {reason.desc}
              </p>
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
            Experience the Difference — Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

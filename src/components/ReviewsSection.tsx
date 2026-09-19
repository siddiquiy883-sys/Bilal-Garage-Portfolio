"use client";
import React from 'react';
import { Star, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const reviewsRow1 = [
  { name: 'Ahmed K.', car: 'BMW 5 Series', quote: 'Bilal and his team diagnosed an engine issue that two other garages missed. Fixed it the same day at half the price.' },
  { name: 'Sarah M.', car: 'Toyota Land Cruiser', quote: 'They picked up my car from JBR, fixed the AC and brakes, and delivered it back the next morning.' },
  { name: 'Rashid A.', car: 'Mercedes C-Class', quote: 'Transparent pricing and the owner personally checked my car before handover. This is real customer care.' },
  { name: 'Fatima H.', car: 'Nissan Patrol', quote: 'Been coming here for 5 years. They never try to upsell unnecessary services. Completely trustworthy.' },
];

const reviewsRow2 = [
  { name: 'Omar S.', car: 'Audi A6', quote: 'Had an emergency at midnight — flat tire and engine overheating. They answered immediately and fixed everything by morning.' },
  { name: 'Priya D.', car: 'Honda Accord', quote: 'Best garage in Al Quoz. Fair prices, fast service, and they actually explain what they are doing.' },
  { name: 'Khalid M.', car: 'Range Rover Sport', quote: 'Dealer quoted me 8,000 AED for suspension work. These guys did it for 3,500 with genuine parts. Incredible.' },
  { name: 'Nadia R.', car: 'Lexus ES', quote: 'Finally found a garage I can trust in Dubai. Professional, honest, and they treat your car like their own.' },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#050505] py-8 md:py-12 overflow-hidden flex flex-col justify-center min-h-[350px]">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .hover-pause:hover { animation-play-state: paused; }
      `}} />

      <div className="text-center mb-6 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          TRUSTED BY HUNDREDS OF CAR OWNERS
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-amber-500 font-semibold"
        >
          <span>5.0</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
          </div>
          <span className="text-white/80 font-normal">on Google</span>
        </motion.div>
      </div>

      {/* Row 1: Scrolls Left */}
      <div className="relative w-full flex overflow-hidden mb-3">
        <div className="flex animate-scroll-left hover-pause w-[max-content]">
          {/* Duplicate content for seamless infinite scroll */}
          {[...reviewsRow1, ...reviewsRow1].map((review, i) => (
            <div key={i} className="min-w-[300px] max-w-[350px] bg-[#111] p-4 rounded-xl mx-2 flex flex-col justify-between shrink-0 border border-white/5">
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-white/80 text-sm italic mb-3 line-clamp-3">&ldquo;{review.quote}&rdquo;</p>
              <div className="text-xs text-white/60">
                <span className="text-white font-medium">{review.name}</span> • {review.car}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Scrolls Right */}
      <div className="relative w-full flex overflow-hidden mb-8">
        <div className="flex animate-scroll-right hover-pause w-[max-content]">
          {/* Duplicate content for seamless infinite scroll */}
          {[...reviewsRow2, ...reviewsRow2].map((review, i) => (
            <div key={i} className="min-w-[300px] max-w-[350px] bg-[#111] p-4 rounded-xl mx-2 flex flex-col justify-between shrink-0 border border-white/5">
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-white/80 text-sm italic mb-3 line-clamp-3">&ldquo;{review.quote}&rdquo;</p>
              <div className="text-xs text-white/60">
                <span className="text-white font-medium">{review.name}</span> • {review.car}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center px-4">
        <a 
          href="tel:+971567201119"
          className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-sm md:text-base w-full sm:w-auto"
        >
          <Phone className="w-4 h-4" />
          Join 500+ Happy Customers — Call Now
        </a>
      </div>
    </section>
  );
}

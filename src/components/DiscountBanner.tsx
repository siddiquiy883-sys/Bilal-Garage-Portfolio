"use client";

import { Phone } from "lucide-react";

export default function DiscountBanner() {
  return (
    <div className="bg-gradient-to-r from-[#111] via-red-900/20 to-[#111] border-b border-red-500/10 py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
        <p className="text-sm sm:text-base font-medium text-white/90">
          <span className="text-red-500 font-bold">Special Offer:</span> Flat 30% Off on All Services — Mon to Thu, Till Oct 30
        </p>
        <a
          href="tel:+971567201119"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </div>
  );
}

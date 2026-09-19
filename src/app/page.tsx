"use client";

import Header from "@/components/Header";
import FloatingCallButton from "@/components/FloatingCallButton";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import DiscountBanner from "@/components/DiscountBanner";
import SolutionsSection from "@/components/SolutionsSection";
import MechanicalServices from "@/components/MechanicalServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import EmergencyPickup from "@/components/EmergencyPickup";
import LocationMap from "@/components/LocationMap";
import FinalCTA from "@/components/FinalCTA";
import { MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Header />
      <FloatingCallButton />

      {/* Hero — First impression for ad traffic */}
      <HeroSection />

      {/* Trust signals — instant credibility */}
      <TrustBar />

      {/* Compact discount strip — one-liner, not screaming */}
      <DiscountBanner />

      {/* What We Do Best — services with images */}
      <MechanicalServices />

      {/* Real problems we solve daily */}
      <SolutionsSection />

      {/* Why car owners trust us */}
      <WhyChooseUs />

      {/* Customer reviews — auto-scrolling slider */}
      <ReviewsSection />

      {/* 24/7 Emergency + Pickup & Delivery */}
      <EmergencyPickup />

      {/* Location map with correct directions */}
      <LocationMap />

      {/* Final CTA — strong closer */}
      <FinalCTA />

      {/* ═══ MINIMAL FOOTER ═══ */}
      <footer className="bg-black py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-black tracking-tight uppercase">
                Car Garage <span className="text-red-600">Auto Service</span>
              </h3>
              <p className="text-white/40 text-xs mt-1">
                Professional car repair &amp; service in Al Quoz, Dubai
              </p>
            </div>

            <div className="flex items-center gap-3 text-white/50 text-xs">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Al Quoz Industrial Area 1, Dubai</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 font-semibold">24/7</span>
            </div>

            <a
              href="tel:+971567201119"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              +971 56 720 1119
            </a>
          </div>

          <div className="border-t border-white/5 mt-6 pt-4 text-center text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Car Garage Auto Service. All
            rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

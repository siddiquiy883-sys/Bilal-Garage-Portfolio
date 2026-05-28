"use client";

import CinematicCanvas from "@/components/CinematicCanvas";
import ServiceGrid from "@/components/ServiceGrid";
import FloatingLeadWidget from "@/components/FloatingLeadWidget";
import Header from "@/components/Header";
import {
  Star,
  CheckCircle,
  ShieldCheck,
  Clock,
  Settings,
  ArrowRight,
  MapPin,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

/* Simple fade-in block that appears as the user scrolls into it */
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const whatsappUrl =
    "https://wa.me/971547014902?text=Hello%20Bilal,%20I%20need%20assistance%20with%20my%20car...";

  return (
    /* NO overflow-x-hidden here — it breaks position:sticky */
    <main className="bg-[#050505] min-h-screen text-white">
      <Header />
      <FloatingLeadWidget />

      {/* ══════════════════════════════════════
          SECTION A — CAR SCROLLYTELLING (5 beats)
      ══════════════════════════════════════ */}
      <CinematicCanvas
        pathPrefix="/sequence/car/ezgif-frame-"
        frameCount={300}
        padLength={3}
        heightMultiplier={5}
      >
        {/* Beat 1 — The Authority Introduction */}
        <div className="h-screen w-full flex flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-white drop-shadow-[0_4px_60px_rgba(0,0,0,0.9)] uppercase leading-[0.9]">
              Quality. Trust.
              <br />
              <span className="text-[#25D366]">Performance.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 max-w-3xl font-medium mx-auto mb-8 drop-shadow-lg">
              Professional Car Repair &amp; Maintenance for All Makes &amp;
              Models — Open 24/7 in Al Quoz, Dubai.
            </p>
            <span className="inline-flex items-center gap-2 text-yellow-400 font-bold bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl text-lg">
              <Star className="w-6 h-6 fill-current" />
              5.0 Google Rated
            </span>
          </Reveal>
        </div>

        {/* Beat 2 — The Expertise */}
        <div className="h-screen w-full flex flex-col items-start justify-center px-6 md:px-20">
          <Reveal>
            <div className="max-w-xl bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5 uppercase leading-tight">
                Expert Care For
                <br />
                Every Make &amp; Model.
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                From a simple oil change to a complete engine rebuild — our
                certified technicians handle it all with advanced diagnostic
                tools.
              </p>
              <ul className="space-y-3">
                {[
                  "Engine Diagnostics & Repair",
                  "Car AC Repair & Servicing",
                  "Brake Repair & Replacement",
                  "Suspension & Steering",
                  "Electrical & Battery Services",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/90 font-medium"
                  >
                    <CheckCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Beat 3 — The Convenience Promise */}
        <div className="h-screen w-full flex flex-col items-end justify-center px-6 md:px-20 text-right">
          <Reveal>
            <div className="max-w-xl bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5 uppercase leading-tight">
                We Tow. We Repair.
                <br />
                <span className="text-[#25D366]">We Deliver.</span>
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                You stay at home or work. We tow your vehicle, restore it with
                genuine parts &amp; premium oils, and deliver it right back to
                your doorstep.
              </p>
              <div className="flex flex-wrap gap-3 justify-end">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#25D366]" /> Free Towing
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#25D366]" /> Genuine
                  Parts
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Beat 4 — Transparent Pricing */}
        <div className="h-screen w-full flex flex-col items-start justify-center px-6 md:px-20">
          <Reveal>
            <div className="max-w-xl bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5 uppercase leading-tight">
                Transparent Pricing.
                <br />
                <span className="text-[#25D366]">No Hidden Fees.</span>
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                Before we touch your car, you get a detailed breakdown of every
                cost. No surprises, no upsells — just honest work at fair
                prices.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Beat 5 — The CTA */}
        <div className="h-screen w-full flex flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase drop-shadow-2xl leading-[0.9]">
              Get Your Car
              <br />
              Fixed <span className="text-[#25D366]">Today.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-medium">
              Don&apos;t wait for the problem to get worse. Contact us now —
              we&apos;re available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pointer-events-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3"
              >
                Chat on WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+971547014902"
                className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center justify-center"
              >
                Call +971 54 701 4902
              </a>
            </div>
          </Reveal>
        </div>
      </CinematicCanvas>

      {/* ══════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section
        id="why-us"
        className="py-20 bg-[#0a0a0a] relative z-20 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase">
              Why <span className="text-[#25D366]">Choose Us</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We go beyond standard repairs to deliver a premium customer
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Certified Techs",
                desc: "Highly qualified experts with years of dealership-level experience.",
              },
              {
                icon: Settings,
                title: "Genuine Parts",
                desc: "We only use premium oils and authentic manufacturer parts.",
              },
              {
                icon: Clock,
                title: "Quick Turnaround",
                desc: "Efficient workflows so you get your car back faster.",
              },
              {
                icon: Star,
                title: "Customer First",
                desc: "Transparent pricing with no hidden fees. Total peace of mind.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-[#111] p-8 rounded-3xl border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <f.icon className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <ServiceGrid />

      {/* ══════════════════════════════════════
          MEET THE EXPERT — HEADER
      ══════════════════════════════════════ */}
      <div
        id="expert"
        className="bg-[#050505] pt-20 pb-6 border-t border-white/10 relative z-20"
      >
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-4 uppercase">
            Meet The <span className="text-[#25D366]">Expert</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Bilal Hassan — A certified automotive specialist dedicated to
            perfection.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION B — BILAL SCROLLYTELLING (4 beats)
      ══════════════════════════════════════ */}
      <CinematicCanvas
        pathPrefix="/sequence/bilal/bilalezgif-frame-"
        frameCount={300}
        padLength={3}
        heightMultiplier={4}
      >
        {/* Beat 1 */}
        <div className="h-screen w-full flex flex-col items-start justify-center px-6 md:px-20">
          <Reveal>
            <div className="max-w-md bg-black/70 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-[#25D366] uppercase">
                Hands-On Leadership
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
                I don&apos;t just manage the garage — I&apos;m on the floor
                every single day. I personally oversee the diagnostics and
                repair of every vehicle.
              </p>
              <p className="text-white/50 italic text-sm">
                &quot;When you bring your car here, it&apos;s treated as if it
                were my own.&quot;
              </p>
            </div>
          </Reveal>
        </div>

        {/* Beat 2 */}
        <div className="h-screen w-full flex flex-col items-end justify-center px-6 md:px-20 text-right">
          <Reveal>
            <div className="max-w-md bg-black/70 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-[#25D366] uppercase">
                Advanced Diagnostics
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Modern cars are complex computers on wheels. We invest in
                state-of-the-art diagnostic software and tools to pinpoint exact
                issues quickly — saving you time, money, and unnecessary parts.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Beat 3 */}
        <div className="h-screen w-full flex flex-col items-start justify-center px-6 md:px-20">
          <Reveal>
            <div className="max-w-md bg-black/70 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-[#25D366] uppercase">
                Your Car, Our Passion
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
                From luxury sedans to family SUVs and work trucks — every
                vehicle gets the same meticulous attention and premium care.
              </p>
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-white/60 ml-2">5.0 on Google</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Beat 4 — Trust CTA */}
        <div className="h-screen w-full flex flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <div className="max-w-2xl bg-black/80 backdrop-blur-2xl p-10 md:p-14 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto">
              <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase">
                Trusted By Hundreds
              </h3>
              <div className="flex justify-center gap-2 mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-8 h-8 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-white/80 mb-10 italic leading-relaxed">
                &quot;Car Garage Auto Service is the only place I trust with my
                car in Dubai. Honest pricing, fast turnarounds, and phenomenal
                service.&quot;
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,211,102,0.4)]"
              >
                Message Bilal Directly <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </CinematicCanvas>

      {/* ══════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════ */}
      <section
        id="reviews"
        className="py-20 bg-[#0a0a0a] relative z-20 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase">
              What Our <span className="text-[#25D366]">Customers Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ahmed K.",
                car: "BMW 5 Series",
                text: "Bilal and his team diagnosed an engine issue that two other garages missed. Fixed it the same day at half the price. Highly recommended!",
              },
              {
                name: "Sarah M.",
                car: "Toyota Land Cruiser",
                text: "They towed my car from JBR, fixed the AC and brakes, and delivered it back the next morning. Incredible 24/7 service!",
              },
              {
                name: "Rashid A.",
                car: "Mercedes C-Class",
                text: "Transparent pricing, genuine parts, and Bilal personally checked my car before handover. This is real customer care.",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-[#111] p-8 rounded-3xl border border-white/5"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6 italic">
                  &quot;{r.text}&quot;
                </p>
                <p className="font-bold text-white">{r.name}</p>
                <p className="text-white/40 text-sm">{r.car}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#050505] relative z-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
            Ready to Experience
            <br />
            <span className="text-[#25D366]">Premium Auto Care?</span>
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a routine oil change or a full engine rebuild, we
            guarantee quality work, genuine parts, and a quick turnaround.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3"
            >
              Chat on WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+971547014902"
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center justify-center"
            >
              Call +971 54 701 4902
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-black py-14 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mb-10">
          <div>
            <h3 className="text-2xl font-black tracking-tight mb-3 uppercase">
              Car Garage{" "}
              <span className="text-[#25D366]">Auto Service</span>
            </h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Professional car repair and maintenance for all makes and models.
              Quality, Trust, and Performance.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3 uppercase tracking-widest text-white/80">
              Location
            </h4>
            <p className="text-white/60 text-sm flex items-start gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              Al Quoz Industrial Area 1, Dubai, UAE
            </p>
            <div className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full font-bold text-xs mt-3">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              OPEN 24/7
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3 uppercase tracking-widest text-white/80">
              Contact
            </h4>
            <a
              href="tel:+971547014902"
              className="block text-white/60 hover:text-white transition-colors mb-2 text-sm"
            >
              +971 54 701 4902
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:text-white transition-colors text-sm"
            >
              WhatsApp Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Car Garage Auto Service. All rights
          reserved.
        </div>
      </footer>
    </main>
  );
}

"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingLeadWidget() {
  const whatsappUrl = "https://wa.me/971547014902?text=Hello%20Bilal,%20I%20need%20assistance%20with%20my%20car...";
  const phoneUrl = "tel:+971547014902";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <motion.a
        href={phoneUrl}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow group self-end"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 fill-current group-hover:animate-pulse" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all self-end"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="font-bold text-lg tracking-wide hidden sm:block">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}

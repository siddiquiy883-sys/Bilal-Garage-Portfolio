"use client";

import { Award, Star, Clock, MapPin } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: <Award className="w-5 h-5 text-white/60" />,
      text: "20+ Years",
    },
    {
      icon: <Star className="w-5 h-5 text-amber-500" />,
      text: "5.0★ Rated",
    },
    {
      icon: <Clock className="w-5 h-5 text-green-500" />,
      text: "Open 24/7",
    },
    {
      icon: <MapPin className="w-5 h-5 text-white/60" />,
      text: "Al Quoz, Dubai",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] border-y border-white/5 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-center justify-between gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center md:justify-start gap-2"
            >
              {item.icon}
              <span className="text-sm font-medium text-white/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

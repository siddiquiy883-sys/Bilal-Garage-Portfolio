import { 
  Wrench, 
  ThermometerSnowflake, 
  Disc, 
  Navigation, 
  Droplet, 
  BatteryCharging 
} from "lucide-react";

const services = [
  {
    title: "Engine Diagnostics & Repair",
    description: "Advanced computerized diagnostics and complete engine overhauls.",
    icon: Wrench,
  },
  {
    title: "Car AC Repair & Service",
    description: "Keep cool with complete AC system flushing, gas refill, and leak fixes.",
    icon: ThermometerSnowflake,
  },
  {
    title: "Brake Repair & Replacement",
    description: "Premium brake pads, discs machining, and safety inspections.",
    icon: Disc,
  },
  {
    title: "Suspension & Steering",
    description: "Shocks, struts, wheel alignment, and full steering repairs.",
    icon: Navigation,
  },
  {
    title: "Oil Change & Maintenance",
    description: "Synthetic oil changes, filters, and comprehensive preventative maintenance.",
    icon: Droplet,
  },
  {
    title: "Electrical & Battery",
    description: "Battery testing, replacement, wiring, and electrical fault finding.",
    icon: BatteryCharging,
  },
];

export default function ServiceGrid() {
  const whatsappUrl = "https://wa.me/971547014902?text=Hello%20Bilal,%20I%20would%20like%20to%20book%20a%20service...";

  return (
    <section id="services" className="py-32 bg-[#050505] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            OUR <span className="text-[#25D366]">SERVICES</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Complete auto care solutions delivered by certified technicians using advanced tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#25D366]/20 transition-colors" />
                
                <Icon className="w-12 h-12 text-[#25D366] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {svc.description}
                </p>
                
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-white tracking-widest hover:text-[#25D366] transition-colors"
                >
                  BOOK THIS SERVICE 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

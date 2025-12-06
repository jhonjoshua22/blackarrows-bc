import { useEffect, useRef } from "react";

const sponsors = [
  { name: "Magic Worlds", tier: "platinum" },
  { name: "Sport Inspired", tier: "platinum" },
  { name: "Active Newham", tier: "gold" },
  { name: "UEL Sports", tier: "gold" },
  { name: "Hackney", tier: "silver" },
  { name: "Badminton England", tier: "silver" },
  { name: "GLL", tier: "silver" },
  { name: "Arsenal", tier: "silver" },
];

const Sponsors = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector(".scroll-animate")?.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <span className="font-orbitron text-secondary text-sm tracking-widest mb-4 block">
            PARTNERS
          </span>
          <h2 className="section-title">
            OUR <span className="text-primary">SPONSORS</span>
          </h2>
          <p className="section-subtitle">
            Proudly supported by industry-leading brands
          </p>
        </div>

        {/* Auto-scrolling Sponsor Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* First Row - Left to Right */}
          <div className="ticker-wrap mb-8">
            <div className="ticker-content">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={index}
                  className="mx-6 glass-card p-6 w-48 h-24 flex items-center justify-center hover-lift group cursor-pointer"
                >
                  <div className="text-center">
                    <span className={`font-orbitron font-bold ${
                      sponsor.tier === "platinum" ? "text-foreground" :
                      sponsor.tier === "gold" ? "text-primary" : "text-muted-foreground"
                    } group-hover:text-secondary transition-colors`}>
                      {sponsor.name}
                    </span>
                    <span className={`block text-xs font-rajdhani mt-1 ${
                      sponsor.tier === "platinum" ? "text-secondary" :
                      sponsor.tier === "gold" ? "text-primary/70" : "text-muted-foreground/70"
                    }`}>
                      {sponsor.tier.toUpperCase()} PARTNER
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="ticker-wrap" style={{ direction: "rtl" }}>
            <div className="ticker-content" style={{ animationDirection: "reverse" }}>
              {[...sponsors.reverse(), ...sponsors].map((sponsor, index) => (
                <div
                  key={index}
                  className="mx-6 glass-card p-6 w-48 h-24 flex items-center justify-center hover-lift group cursor-pointer"
                  style={{ direction: "ltr" }}
                >
                  <div className="text-center">
                    <span className={`font-orbitron font-bold ${
                      sponsor.tier === "platinum" ? "text-foreground" :
                      sponsor.tier === "gold" ? "text-primary" : "text-muted-foreground"
                    } group-hover:text-secondary transition-colors`}>
                      {sponsor.name}
                    </span>
                    <span className={`block text-xs font-rajdhani mt-1 ${
                      sponsor.tier === "platinum" ? "text-secondary" :
                      sponsor.tier === "gold" ? "text-primary/70" : "text-muted-foreground/70"
                    }`}>
                      {sponsor.tier.toUpperCase()} PARTNER
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-12">
          <button className="btn-outline-neon">
            BECOME A SPONSOR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

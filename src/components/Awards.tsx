import { useEffect, useRef } from "react";
import { Trophy, Medal, Award, Crown } from "lucide-react";

const awards = [
  {
    title: "Queen’s Jubilee Baton Bearer",
    year: "2022",
    category: "National Recognition",
    icon: Trophy,
    color: "primary",
  },
  {
    title: "UK Para Badminton Triple Champion",
    year: "2021",
    category: "National Championship",
    icon: Crown,
    color: "secondary",
  },
  {
    title: "Corporate Games Badminton – Division 1 Runners-Up",
    year: "2019",
    category: "National Multi-Medal Team Achievement",
    icon: Award,
    color: "primary",
  },
  {
    title: "British Empire Medal (BEM) – Services to Community Sport",
    year: "2021",
    category: "National Honour & Lifetime Achievement",
    icon: Medal,
    color: "secondary",
  },
  {
    title: "Special Recognition Award – Muslimah Sports Association",
    year: "2022",
    category: "Community & Inclusion",
    icon: Trophy,
    color: "primary",
  },
  {
    title: "Partner of the Year – University of East London",
    year: "2022",
    category: "Sports Partnership",
    icon: Medal,
    color: "secondary",
  },
];

const Awards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".award-card").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-secondary text-sm tracking-widest mb-4 block">
            ACHIEVEMENTS
          </span>
          <h2 className="section-title">
            AWARDS & <span className="text-primary">RECOGNITION</span>
          </h2>
          <p className="section-subtitle">
            A legacy of excellence and championship victories
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className="award-card scroll-animate group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card p-6 hover-lift h-full">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-4 rounded-xl ${
                      award.color === "primary" 
                        ? "bg-primary/20 neon-border-red" 
                        : "bg-secondary/20 neon-border-green"
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent 
                        size={32} 
                        className={award.color === "primary" ? "text-primary" : "text-secondary"} 
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <span className={`font-orbitron text-xs ${
                        award.color === "primary" ? "text-primary" : "text-secondary"
                      }`}>
                        {award.year}
                      </span>
                      <h3 className="font-orbitron font-bold text-foreground mt-1 mb-2">
                        {award.title}
                      </h3>
                      <p className="font-rajdhani text-muted-foreground text-sm">
                        {award.category}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`h-1 mt-4 rounded-full ${
                    award.color === "primary" ? "bg-primary/30" : "bg-secondary/30"
                  } overflow-hidden`}>
                    <div className={`h-full w-0 group-hover:w-full transition-all duration-500 ${
                      award.color === "primary" ? "bg-primary" : "bg-secondary"
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card p-6 text-center hover-lift">
            <span className="font-orbitron text-4xl font-bold text-primary block">25+</span>
            <span className="font-rajdhani text-muted-foreground">Championships Won</span>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <span className="font-orbitron text-4xl font-bold text-secondary block">100+</span>
            <span className="font-rajdhani text-muted-foreground">Medals Earned</span>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <span className="font-orbitron text-4xl font-bold text-primary block">15</span>
            <span className="font-rajdhani text-muted-foreground">National Players</span>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <span className="font-orbitron text-4xl font-bold text-secondary block">50+</span>
            <span className="font-rajdhani text-muted-foreground">Junior Champions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

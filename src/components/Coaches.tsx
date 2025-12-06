import { useEffect, useRef } from "react";
import { Award, Medal, Trophy } from "lucide-react";
import HTG2 from "@/assets/HTG2.jpg";
import akp1 from "@/assets/aKP1-2.jpg";
import Anthony from "@/assets/Anthony.jpg";
import George from "@/assets/George-6.jpg";
import Wayne from "@/assets/wayne.jpg";
import Harpor from "@/assets/harpor.jpg";
import Norman from "@/assets/norman.jpg";
import Reynolds from "@/assets/reynolds.jpg";
import Sharon from "@/assets/Sharon.jpg";
import Shirley from "@/assets/Shirley.jpg";
import Ben from "@/assets/Ben.jpg";

const coaches = [
  {
    name: "Henry T. Gaspard",
    role: "Chairman, Coach",
    specialty: "Technique & Skills",
    experience: "30+ years",
    achievements: ["World Championships Medalist", "BWF Certified"],
    image: HTG2,
  },
  {
    name: "Amardeep Panesar",
    role: "Coach, Junior Development",
    specialty: "Fitness Training",
    experience: "20+ years",
    achievements: ["Olympic Team Coach", "National Champion 2010"],
    image: akp1,
  },
  {
    name: "JAnthony Henry",
    role: "Coach, Treasurer",
    specialty: "Jump Smashing",
    experience: "30+ years",
    achievements: ["Junior National Team Coach", "Sports Science Degree"],
    image: Anthony,
  },
  {
    name: "George Joseph",
    role: "Fitness Coach",
    specialty: "Deceptive Training",
    experience: "20+ years",
    achievements: ["Professional Athlete Trainer", "Strength & Conditioning Specialist"],
    image: George,
  },
  {
    name: "Wayne Bridgeman",
    role: "Coach",
    specialty: "Disability Badminton",
    experience: "25+ years",
    achievements: ["Professional Athlete Trainer", "Strength & Conditioning Specialist"],
    image: Wayne,
  },
  {
    name: "Harpour Williams",
    role: "Coach",
    specialty: "Skills & Knowledge",
    experience: "30+ years",
    achievements: ["Professional Athlete Trainer", "Strength & Conditioning Specialist"],
    image: Harpor,
  },
  {
    name: "Norman Beckford",
    role: "Coach",
    specialty: "Skills & Knowledge",
    experience: "10+ years",
    achievements: ["Professional Athlete Trainer", "Strength & Conditioning Specialist"],
    image: Norman,
  },
  {
    name: "Ashley Reynolds",
    role: "Coach",
    specialty: "Social Badminton",
    experience: "10+ years",
    achievements: ["Professional Athlete Trainer", "Strength & Conditioning Specialist"],
    image: Reynolds,
  },
  {
    name: "Sharon Jones-Barnes",
    role: "Coach",
    specialty: "Para Badminton",
    experience: "15+ years",
    achievements: ["Professional Athlete Trainer", "Strength & Conditioning Specialist"],
    image: Sharon,
  },
  {
    name: "Shirley Louis-Onyebuashi",
    role: "Coach",
    specialty: "Fitness Coach",
    experience: "30+ years",
    achievements: ["Professional Athlete Trainer", "Strength & Conditioning Specialist"],
    image: Shirley,
  },
  {
    name: "Ben Oladunjoye",
    role: "Coach",
    specialty: "On-Court Ability",
    experience: "10+ years",
    achievements: ["Professional Athlete Trainer", "Strength & Conditioning Specialist"],
    image: Ben,
  },
];

const Coaches = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".coach-card").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 150);
            });
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
    <section id="coaches" ref={sectionRef} className="py-24 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-secondary text-sm tracking-widest mb-4 block">
            EXPERT GUIDANCE
          </span>
          <h2 className="section-title">
            MEET OUR <span className="text-primary">COACHES</span>
          </h2>
          <p className="section-subtitle">
            World-class coaches dedicated to bringing out the champion in every player
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={coach.name}
              className="coach-card scroll-animate group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card overflow-hidden hover-lift">
                {/* Image Area */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-card to-secondary/10 flex items-center justify-center">
                    {coach.image ? (
                      <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                          <span className="font-orbitron text-3xl text-primary">
                            {coach.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <p className="font-rajdhani text-sm text-muted-foreground">
                          [Coach Photo]
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="space-y-2">
                      {coach.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          {i === 0 ? <Trophy size={14} className="text-primary" /> : <Medal size={14} className="text-secondary" />}
                          <span className="font-rajdhani">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-orbitron font-bold text-lg text-foreground mb-1">
                    {coach.name}
                  </h3>
                  <p className="font-rajdhani text-primary font-semibold mb-2">
                    {coach.role}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Award size={14} className="text-secondary" />
                      {coach.specialty}
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <span className="font-rajdhani text-sm text-muted-foreground">
                      {coach.experience} experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;

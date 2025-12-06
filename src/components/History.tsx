import { useEffect, useRef } from "react";
import facilityImage from "@/assets/facility.png";
import history from "@/assets/history.jpg";

const History = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right").forEach((el) => {
              el.classList.add("visible");
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
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="scroll-animate-left">
            <span className="font-orbitron text-secondary text-sm tracking-widest mb-4 block">
              OUR STORY
            </span>
            <h2 className="section-title">
              A LEGACY OF <span className="text-primary">EXCELLENCE</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-rajdhani text-lg">
              <p>
                We provide coaching to Schools, Colleges, Universities and work in partnership with Hackney Council, Greenwich Leisure Ltd, Active Newham, LB of Redbridge, Badminton England, Arsenal FC and other partners (see sessions).
              </p>
              <p>
                Black Arrows Badminton Club was formed in 1984 and after many years of successful competitions and a tremendous history of achievement, club founder, Henry Gaspard now places a large emphasis on coaching and providing the young people of Hackney and the surrounding boroughs, an opportunity to participate in the sport of Badminton.
              </p>
              <p>
                The aim of Black Arrows is to put fun into learning the sport and caters for all playing standards, whether a beginner or of county standard. Black Arrows will certainly have something for you.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="glass-card p-4 text-center hover-lift">
                <span className="font-orbitron text-3xl font-bold text-primary block">500+</span>
                <span className="font-rajdhani text-muted-foreground text-sm">Active Members</span>
              </div>
              <div className="glass-card p-4 text-center hover-lift">
                <span className="font-orbitron text-3xl font-bold text-secondary block">50+</span>
                <span className="font-rajdhani text-muted-foreground text-sm">Championships</span>
              </div>
              <div className="glass-card p-4 text-center hover-lift">
                <span className="font-orbitron text-3xl font-bold text-primary block">41</span>
                <span className="font-rajdhani text-muted-foreground text-sm">Years Strong</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="scroll-animate-right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-card">
                <img 
                  src={history} 
                  alt="Black Arrows Training Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-secondary/20 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

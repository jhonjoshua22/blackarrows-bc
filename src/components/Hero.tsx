import { ChevronDown } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.png";
import clubLogo from "@/assets/v1logo.png";
import mwLogo from "@/assets/mwlogo.jpg";
import mwbot from "@/assets/mwbot.jpg";


const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid mt-[10vh]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent h-[200%] animate-scan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Left Logo */}
          <div className="hidden lg:flex flex-col items-center gap-4 animate-slide-in-left">
            <div className="w-32 h-32 glass-card p-2 neon-border-red hover:scale-110 transition-transform duration-500 overflow-hidden rounded-xl">
              <a href="https://www.themagicworlds.com/" target="_blank"><img src={mwLogo} alt="Black Arrows Logo" className="w-full h-full object-contain" /></a>
            </div>
            <span className="font-orbitron text-sm text-muted-foreground tracking-widest">Magic Worlds</span>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center max-w-3xl">
            {/* Avatar */}
            <div className="relative mb-8 animate-float">
              <div className="w-68 h-68 md:w-68 md:h-68 bg-gradient-to-br from-primary/30 to-secondary/20 p-1">
                <div className="w-full h-full bg-card flex items-center justify-center overflow-hidden">
                  <img src={mwbot} alt="Cyber Badminton Player" className="w-full h-full object-cover scale-110" />
                </div>
              </div>
              {/* Glow Ring */}
              <div className="absolute inset-0 border-2 border-primary/30 animate-spin-slow" />
              <div className="absolute -inset-2 border border-secondary/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            </div>

            {/* Headline */}
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black mb-4 animate-fade-in-up">
              <span className="text-foreground">BLACK </span>
              <span className="text-primary neon-red">ARROWS</span>
            </h1>
            
            {/* Subtitle */}
            <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              BADMINTON CLUB
            </p>
            
            {/* Tagline */}
            <p className="font-rajdhani text-lg text-muted-foreground/80 max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Black Arrows Badminton Club provides group and individual coaching for juniors and adults across London. 
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <button className="btn-neon-red">
                <span className="relative z-10">JOIN THE CLUB</span>
              </button>
              <button className="btn-outline-neon">
                <span>WATCH HIGHLIGHTS</span>
              </button>
            </div>
          </div>

          {/* Right Logo */}
          <div className="hidden lg:flex flex-col items-center gap-4 animate-slide-in-right">
            <div className="w-32 h-32 glass-card p-4 neon-border-green hover:scale-110 transition-transform duration-500 flex items-center justify-center">
              <img src={clubLogo} alt="Black Arrows Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-orbitron text-sm text-muted-foreground tracking-widest">Black Arrows Badminton Club</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;

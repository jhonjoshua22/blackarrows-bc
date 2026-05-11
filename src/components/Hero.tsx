import { useState } from "react";
import { ChevronDown, Send, Loader2 } from "lucide-react";
import clubLogo from "@/assets/v1logo.png";
import mwLogo from "@/assets/mwlogo.jpg";
import mwbot from "@/assets/mwbot.jpg";

const Hero = () => {
  const [input, setInput] = useState("");
  const [chatMessage, setChatMessage] = useState("Hello! I'm the Black Arrows AI. Ask me anything about the club!");
  const [isLoading, setIsLoading] = useState(false);

  const handleChat = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    
    // Using your provided API Key
    const API_KEY = "AIzaSyCAnU9qetouypVNQu5g8AvBSUwpNcWbRTI"; 

    try {
      // Updated to v1 and gemini-1.5-flash-latest for better stability
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: `You are the AI assistant for Black Arrows Badminton Club. Keep responses very short (under 15 words). User asks: ${input}` }]
            }]
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Gemini Error:", data);
        throw new Error(data.error?.message || "Connection issue");
      }
      
      if (data.candidates && data.candidates[0].content.parts[0].text) {
        setChatMessage(data.candidates[0].content.parts[0].text.trim());
      } else {
        setChatMessage("I'm not sure how to answer that. Try asking about our coaching!");
      }
      
      setInput("");
    } catch (error) {
      console.error("Full Error:", error);
      setChatMessage("My circuits are a bit busy! Try again in a second.");
    } finally {
      setIsLoading(false);
    }
  };

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

      <div className="container mx-auto px-4 relative z-10 mt-[20vh]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Left Logo */}
          <div className="hidden lg:flex flex-col items-center gap-4 animate-slide-in-left">
            <div className="w-32 h-32 glass-card p-2 neon-border-red hover:scale-110 transition-transform duration-500 overflow-hidden rounded-xl">
              <a href="https://www.themagicworlds.com/" target="_blank">
                <img src={mwLogo} alt="Black Arrows Logo" className="w-full h-full object-contain" />
              </a>
            </div>
            <span className="font-orbitron text-sm text-muted-foreground tracking-widest">Magic Worlds</span>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center max-w-3xl">
            {/* Avatar & Chat Bubble */}
            <div className="relative mb-8 animate-float">
              {/* Chat Bubble Popup */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 glass-card p-3 rounded-xl border-primary/50 text-xs font-rajdhani animate-fade-in shadow-2xl">
                <p className="text-foreground">{chatMessage}</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-r border-b border-primary/50 rotate-45"></div>
              </div>

              <div className="w-68 h-68 md:w-68 md:h-68 bg-gradient-to-br from-primary/30 to-secondary/20 p-1">
                <div className="w-full h-full bg-card flex items-center justify-center overflow-hidden">
                  <img src={mwbot} alt="Cyber Badminton Player" className="w-full h-full object-cover scale-110" />
                </div>
              </div>
              {/* Glow Ring */}
              <div className="absolute inset-0 border-2 border-primary/30 animate-spin-slow" />
              <div className="absolute -inset-2 border border-secondary/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            </div>

            {/* AI Input Field */}
            <form onSubmit={handleChat} className="relative w-full max-w-md mb-8 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the bot..."
                className="w-full bg-black/40 border border-primary/30 rounded-lg px-4 py-2 font-rajdhani focus:outline-none focus:border-primary neon-shadow-sm text-white"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="bg-primary p-2 rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin h-5 w-5 text-black" /> : <Send className="h-5 w-5 text-black" />}
              </button>
            </form>

            {/* Headline */}
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black mb-4 animate-fade-in-up">
              <span className="text-foreground">BLACK </span>
              <span className="text-primary neon-red">ARROWS</span>
            </h1>
            
            <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              BADMINTON CLUB
            </p>
            
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
    </section>
  );
};

export default Hero;

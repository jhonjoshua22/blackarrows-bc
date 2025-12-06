import { useState, useEffect } from "react";

const NewsTicker = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const tickerElement = document.getElementById("ticker");
      if (tickerElement) {
        const rect = tickerElement.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Editable news items - modify these to change ticker content
  const newsItems = [
    "🏆 BLACK ARROWS WIN REGIONAL CHAMPIONSHIP 2024",
    "📢 NEW MEMBERS REGISTRATION NOW OPEN",
    "🎯 COACHING SESSIONS EVERY SATURDAY 9AM",
    "⭐ CONGRATULATIONS TO OUR JUNIOR CHAMPIONS",
    "🏸 INTER-CLUB TOURNAMENT - MARCH 15TH",
    "💪 SUMMER TRAINING CAMP REGISTRATIONS OPEN",
    "🎉 CELEBRATING 10 YEARS OF EXCELLENCE",
    "📅 ANNUAL GALA DINNER - BOOK YOUR TICKETS NOW",
  ];

  return (
    <div
      id="ticker"
      className={`transition-all duration-500 ${
        isSticky
          ? "fixed top-20 left-0 right-0 z-40"
          : "relative"
      }`}
    >
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary py-3 border-y border-primary/50 shadow-lg shadow-primary/20">
        <div className="ticker-wrap">
          <div className="ticker-content">
            {/* Duplicate content for seamless loop */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <span
                key={index}
                className="mx-8 font-rajdhani font-semibold text-primary-foreground text-sm md:text-base tracking-wide whitespace-nowrap"
              >
                {item}
                <span className="mx-8 text-secondary">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Spacer when sticky */}
      {isSticky && <div className="h-12" />}
    </div>
  );
};

export default NewsTicker;

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import BE from "@/assets/be.png";
import CU from "@/assets/CU.png";
import SI from "@/assets/SportInspired.png";
import UEL from "@/assets/UEL.jpg";


const reviews = [
  {
    name: "Lynette Obika",
    role: "Badminton England",
    rating: 5,
    text: "Black Arrows are well respected, inclusive Badminton England affiliated club. Their opens doors and community focused approached along with enjoyable developmental sessions makes players of every level feel part of the club. The club continue to proactively seek new opportunities to promote Badminton and increase provision in Islington, Hackney and the surrounding areas. I personally have found it a pleasure to work with the club and hope it may long continue",
    avatar: BE,
  },
  {
    name: "Bill Thompson",
    role: "City University London",
    rating: 5,
    text: "Our Sports and Leisure Services team have worked with the Black Arrows Badminton Club for over six years. This partnership has provided  support and guidance in both the provision of the sport and a real commitment towards developing our Badminton offer. During the last six years, Black Arrows have helped City secure NGB funding for coaching and helped guide the development of CitySport, our new University Sports Centre. Having the expertise and experience of the Black Arrows Club has definitely helped provide a major boost in our programming.",
    avatar: CU,
  },
  {
    name: "Kat Hodge",
    role: "Sportinspired",
    rating: 5,
    text: "The Black Arrows badminton club has been a consistent and treasured partner of ours over the past few years in the Hackney and Islington areas. Of the festivals we’ve run with Black Arrows, hundreds of kids have tried badminton, maybe even for the first time, and left knowing they want to play it again thanks to the inspirational effect Black Arrows has had on them. As a result of this hard work and inspiration we’ve recently seen two new badminton clubs set up in primary schools in the Islington area — Sacred Heart Catholic and Clerkenwell Primary Schools – so the kids can continue playing the sport they love. With results like that from people like these, it’s no wonder our relationship is so strong and we thank Black Arrows, because we could not achieve what we do at SportInspired without the outstanding dedication of community clubs like this.",
    avatar: SI,
  },
  {
    name: "James Kilden",
    role: "UEL Sportsdock",
    rating: 5,
    text: "At UEL SportsDock we are very fortunate to have hosted Black Arrows at our facility for 10 years since our opening. As a £21 million multi sport facility it is vital that we provide a venue to enable the development of sport in the local community and Black Arrows have provided a great conduit for the development of Badminton. The club has grown in stature and success since 2012, and seeks to establish itself as one of the top clubs in East London. The club has been very proactive with supporting sport at the University of East London through provision of coaching and events. We look forward to the next chapter in the life of SportsDock aligned with Black Arrows as a vital partner.",
    avatar: UEL,
  },
];

const Reviews = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const navigate = (direction: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return reviews.length - 1;
      if (newIndex >= reviews.length) return 0;
      return newIndex;
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? "star-filled fill-current" : "star-empty"}
      />
    ));
  };

  return (
    <section id="news" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <span className="font-orbitron text-secondary text-sm tracking-widest mb-4 block">
            TESTIMONIALS
          </span>
          <h2 className="section-title">
            WHAT MEMBERS <span className="text-primary">SAY</span>
          </h2>
          <p className="section-subtitle">
            Hear from our community of champions
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 text-primary/20" size={64} />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {renderStars(reviews[currentSlide].rating)}
              </div>

              {/* Review Text */}
              <p className="font-rajdhani text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{reviews[currentSlide].text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-primary bg-muted">
                  <img
                    src={reviews[currentSlide].avatar}
                    alt={reviews[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-orbitron font-semibold text-foreground">
                    {reviews[currentSlide].name}
                  </h4>
                  <p className="font-rajdhani text-muted-foreground">
                    {reviews[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="p-3 glass-card text-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentSlide(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-3 glass-card text-foreground hover:text-primary transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Gallery2 from "@/assets/Gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import Gallery4 from "@/assets/Gallery4.jpg";
import Gallery5 from "@/assets/Gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";
import Sharon from "@/assets/Sharon-3.jpg";

const galleryImages = [
  { id: 1, title: "UK Para Badminton Championship 2021 – Sheffield", category: "Events", image: Gallery2 },
  { id: 2, title: "Queen’s Jubilee Baton Bearer", category: "Training", image: gallery3 },
  { id: 3, title: "UEL 2022 Sports Awards", category: "Awards", image: Gallery4 },
  { id: 4, title: "Black Arrows New Junior Club Session @ Britannia Leisure Centre", category: "Youth", image: Gallery5 },
  { id: 5, title: "Europe Corporate Games – Coventry", category: "Matches", image: gallery6 },
  { id: 6, title: "Europe Corporate Games – Coventry", category: "Facilities", image: gallery7 },
  { id: 7, title: "Arsenal PL4S | Black Arrows Badminton Club", category: "Team", image: gallery8 },
  { id: 8, title: "UK Para Badminton Championship 2021 – Sheffield", category: "Awards", image: Sharon },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".gallery-item").forEach((el, index) => {
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

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const navigate = (direction: number) => {
    setCurrentImage((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return galleryImages.length - 1;
      if (newIndex >= galleryImages.length) return 0;
      return newIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-secondary text-sm tracking-widest mb-4 block">
            MEMORIES
          </span>
          <h2 className="section-title">
            CLUB <span className="text-primary">GALLERY</span>
          </h2>
          <p className="section-subtitle">
            Capturing moments of triumph, training, and togetherness
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item scroll-animate cursor-pointer group"
              style={{ transitionDelay: `${index * 0.05}s` }}
              onClick={() => openLightbox(index)}
            >
            <div className="relative aspect-square overflow-hidden rounded-xl glass-card">
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <div>
                    <span className="font-orbitron text-sm text-primary">{image.category}</span>
                    <h4 className="font-rajdhani font-semibold text-foreground">{image.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`lightbox-overlay ${lightboxOpen ? "active" : ""}`}
        onClick={closeLightbox}
      >
        <button
          className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors z-50"
          onClick={closeLightbox}
        >
          <X size={32} />
        </button>

        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 glass-card text-foreground hover:text-primary transition-colors z-50"
          onClick={(e) => {
            e.stopPropagation();
            navigate(-1);
          }}
        >
          <ChevronLeft size={32} />
        </button>

        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 glass-card text-foreground hover:text-primary transition-colors z-50"
          onClick={(e) => {
            e.stopPropagation();
            navigate(1);
          }}
        >
          <ChevronRight size={32} />
        </button>

        <div
          className="max-w-4xl max-h-[80vh] glass-card p-2 rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="aspect-video rounded-xl overflow-hidden relative">
            <img 
              src={galleryImages[currentImage]?.image} 
              alt={galleryImages[currentImage]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
              <p className="font-orbitron text-lg text-foreground">
                {galleryImages[currentImage]?.title}
              </p>
              <p className="font-rajdhani text-muted-foreground">
                {galleryImages[currentImage]?.category}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-orbitron text-sm text-muted-foreground">
          {currentImage + 1} / {galleryImages.length}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

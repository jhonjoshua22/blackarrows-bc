import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import History from "@/components/History";
import Coaches from "@/components/Coaches";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Reviews from "@/components/Reviews";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Black Arrows Badminton Club | Where Champions Train";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Black Arrows Badminton Club - Premier badminton training facility with world-class coaches, state-of-the-art facilities, and programs for all skill levels. Join the champions today!");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <NewsTicker />
      <History />
      <Coaches />
      <Gallery />
      <Sponsors />
      <Reviews />
      <Awards />
      <Footer />
    </div>
  );
};

export default Index;

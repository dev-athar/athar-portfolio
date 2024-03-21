import Header from "@/components/Header";

import "../app/globals.css";
import HeroSection from "@/components/HeroSection";
import SkillLevelSection from "@/components/SkillLevelSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import WorkPhilosophySection from "@/components/WorkPhilosophySection";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="min-h-full w-full">
        <div className="home-background overflow-hidden w-full">
          <div className="bg-image-1 flex items-end justify-end lg:mx-64">
            <img src="./design-elements/golden-meta-sphere.png" />
          </div>
          <div className="bg-image-2 lg:max-w-6xl lg:mx-auto lg: scale-125">
            <img src="./design-elements/disk-rough-black.png" />
          </div>
        </div>
        <HeroSection />
        <SkillLevelSection />
        <PortfolioSection />
        <WorkPhilosophySection />
        <ContactSection />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

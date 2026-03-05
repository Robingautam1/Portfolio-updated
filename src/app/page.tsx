import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import ToolkitSection from "@/components/ToolkitSection";
import AgencyBar from "@/components/AgencyBar";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <ToolkitSection />
      <AgencyBar />
      <ContactFooter />
    </main>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Divider } from "@/components/ui/Divider";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StackSection } from "@/components/sections/StackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { RemoteSection } from "@/components/sections/RemoteSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <StackSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <RemoteSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

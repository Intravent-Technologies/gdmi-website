import { HeroSection } from "@/components/sections/HeroSection";
import { MissionStrip } from "@/components/sections/MissionStrip";
import { EventsSection } from "@/components/sections/EventsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SermonSection } from "@/components/sections/SermonSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative">
        <MissionStrip />
      </div>
      <EventsSection />
      <ProjectsSection />
      <SermonSection />
      <NewsletterSection />
    </>
  );
}

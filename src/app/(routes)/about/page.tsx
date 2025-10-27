import teamSections from "@/lib/team";
import { HeroAbout } from "../../../components/About/HeroAbout";
import { TeamStructure } from "../../../components/About/TeamStructure";
import SupervisorSection from "@/components/About/SupervisorSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroAbout />
      <SupervisorSection />
      <div className="space-y-0">
        {teamSections.map((section, index) => (
          <TeamStructure key={section.id} section={section} index={index} />
        ))}
      </div>
    </main>
  );
}

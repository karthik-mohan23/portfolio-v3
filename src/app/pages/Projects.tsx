import { HeroHighlightBackground } from "../components/ui/HeroHighlight";
import { ProjectBentoGrid } from "../components/ui/ProjectGrid";

function Projects() {
  return (
    <div>
      <HeroHighlightBackground>
        <h2 className="text-white text-center text-7xl pt-20">Projects</h2>
        <div className="max-w-4xl mx-auto w-[95%] py-20">
          <ProjectBentoGrid />
        </div>
      </HeroHighlightBackground>
    </div>
  );
}
export default Projects;

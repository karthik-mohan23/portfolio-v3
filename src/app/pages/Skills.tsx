import { BackgroundGradientDemo } from "../components/ui/GlowingCard";
import { HeroHighlightBackground } from "../components/ui/HeroHighlight";
import { skillsData } from "../utils/constants";
function Skills() {
  return (
    <div>
      <HeroHighlightBackground>
        <h2 className="text-white text-center text-7xl pt-20">Skills</h2>
        <div className="max-w-4xl mx-auto w-[95%] py-20">
          <div className="flex flex-wrap gap-4">
            {skillsData.map(({ label, image }) => (
              <BackgroundGradientDemo label={label} image={image} key={label} />
            ))}
          </div>
        </div>
      </HeroHighlightBackground>
    </div>
  );
}
export default Skills;

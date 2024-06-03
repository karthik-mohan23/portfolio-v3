import { HeroHighlightBackground } from "../components/ui/HeroHighlight";
import { TextEffect } from "../components/ui/TextEffect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

function About() {
  return (
    <div>
      <HeroHighlightBackground>
        <h2 className="text-white text-center text-7xl pt-20">About</h2>
        <div className="max-w-4xl mx-auto w-[95%] pt-20">
          <TextEffect words={words} />
        </div>
      </HeroHighlightBackground>
    </div>
  );
}
export default About;

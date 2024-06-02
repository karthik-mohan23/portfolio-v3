import { AuroraBackground } from "../components/ui/aurora-background";
import { GradientButton } from "../components/ui/GradientButton";
import { FloatingNavbar } from "../components/ui/Navbar";

function Hero() {
  return (
    <AuroraBackground>
      <FloatingNavbar />
      <div className="">
        <h1 className="text-white font-bold text-7xl max-w-3xl text-center">
          Hi, my name is KARTHIK MOHAN.
        </h1>
        <p className="text-white text-center text-2xl py-5">
          Full Stack Developer
        </p>
        <div className="flex justify-center">
          <GradientButton />
        </div>
      </div>
      <p>And this, is chemical burn.</p>
    </AuroraBackground>
  );
}
export default Hero;

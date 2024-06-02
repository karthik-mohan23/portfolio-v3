import { AuroraBackground } from "../components/ui/aurora-background";
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
          <button className="bg-white px-4 py-2 rounded-full hover:cursor-pointer">
            Contact
          </button>
        </div>
      </div>
      <p>And this, is chemical burn.</p>
    </AuroraBackground>
  );
}
export default Hero;

import { HeroHighlightBackground } from "../components/ui/HeroHighlight";

function Contact() {
  return (
    <div>
      <HeroHighlightBackground>
        <h2 className="text-white text-center text-7xl ">Contact</h2>
        <p className="text-white text-center pt-5 ">
          Please contact me directly at{" "}
          <a
            href="mailto:karthikmohan2310@gmail.com"
            target="_blank"
            className="text-yellow-500">
            karthikmohan2310@gmail.com
          </a>{" "}
          or through this form
        </p>
        <div className="max-w-4xl mx-auto w-[95%]">Contact details</div>
      </HeroHighlightBackground>
    </div>
  );
}
export default Contact;

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Features from "@/components/sections/features";
import Steps from "@/components/sections/steps";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Features />
      <Steps />
      <Contact />
    </div>
  );
}


import Hero from "@/components/hero/page";
import Skills from "@/components/skills/page";
import About from "@/components/about/page";
import Projects from "@/components/projects/page";
import Contact from "@/components/contact/page";


export default function Home() {
  return(
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>

  );
}
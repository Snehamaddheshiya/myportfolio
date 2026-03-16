import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Profiles from "@/components/Profiles";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="flex flex-col min-h-screen">
          <Hero />
          <About />
          <Education />
          <Profiles />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </div>
      </main>
    </>
  );
}

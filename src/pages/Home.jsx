import  Nav  from "../components/Nav";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import  Footer  from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* <Nav /> */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

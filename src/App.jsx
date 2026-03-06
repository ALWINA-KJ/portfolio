import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen text-primary relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">

      {/* Background and Global Effects */}
      <ParticleBackground />
      <CustomCursor />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>

    </div>
  );
}

export default App;
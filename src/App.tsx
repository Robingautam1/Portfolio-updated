import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Venture from "./sections/Venture";
import Skills from "./sections/Skills";
import CTA from "./sections/CTA";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-bg text-fg min-h-screen selection:bg-brand selection:text-fg">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Venture />
      <Skills />
      <CTA />
    </main>
  );
}

export default App;

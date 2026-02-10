import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Philosophy from "./sections/Philosophy";
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
      <Skills />
      <Services />
      <Philosophy />
      {/* Ticker was optional in new plan, keeping it minimal or omitting if not in new copy list. Copy list didn't mention Ticker explicitly, but plan did initially. 
          Given strict adherence to copy provided, I am skipping Ticker unless user asked for it. 
          The user provided exact section list: Hero, About, Experience, Work, Skills, Services, Philosophy, CTA. 
          So Ticker is omitted. */}
      <CTA />
    </main>
  );
}

export default App;

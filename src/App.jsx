import Home from "./pages/Home";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from "motion/react";
import { useEffect } from "react";
import bgImage from "./assets/webtree-bg.jpg";

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    // return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div
        className="relative min-h-screen w-full bg-neutral-900 mx-auto flex justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Subtle dark overlay to ensure readability of text and UI */}
        <div
          className="absolute inset-0 bg-neutral-950/40 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full flex justify-center">
          <Home />
        </div>

        {/* Smooth centered mouse follower */}
        <motion.div
          aria-hidden="true"
          className="hidden md:block pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-white/40 backdrop-blur-sm mix-blend-difference"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>
    </>
  );
}

export default App;

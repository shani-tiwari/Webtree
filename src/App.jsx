import Home from "./pages/Home";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from "motion/react";
import { useEffect } from "react";

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
      <div className="relative h-full w-full bg-linear-to-b from-neutral-900 to-neutral-800 mx-auto flex justify-center overflow-hidden">
        <Home />

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

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-20 md:bottom-16 right-6 md:right-12 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md",
            "border border-white/20 text-white shadow-lg hover:bg-white/20 hover:border-white/40",
            "transition-colors duration-300 group",
          )}
          aria-label="Scroll to top"
        >
          <HugeiconsIcon
            icon={ArrowUp01Icon}
            className={cn(
              "w-6 h-6 group-hover:text-neutral-400 transition-colors",
            )}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

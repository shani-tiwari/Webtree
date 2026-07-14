/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../../utils/utils.js";

const Categories = React.memo(
  ({ name, index, isActive, setActiveCategory }) => {
    const handleClick = () => {
      setActiveCategory(name);
    };

    return (
      <motion.button
        layout
        initial={{ opacity: 0, y: -8, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.80, y: -8, transition: { duration: 0.26, delay: 0, ease: "easeInOut" } }}
        whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.03, delay: 0 } }}
        transition={{
          // duration: 0.22, -- with layout, duration(feels weird)
          delay: index * 0.03,
          ease: "easeOut",
          layout: { duration: 0.23, ease: "easeOut" },
        }}
        onClick={handleClick}
        aria-pressed={isActive}
        aria-label={`Select ${name.split("_").join(" ")} category`}
        className={cn(
          "relative w-fit group border-[1.6px] border-white/30 py-[3px] px-3 md:py-[5px] md:px-4 mb-2 rounded-[12px] md:rounded-[14px]",
          "backdrop-blur-md cursor-pointer select-none hover:shadow-[0_4px_15px_rgba(0,0,0,0.9)]  ",
          isActive
            ? "bg-linear-to-b from-amber-800/50 border-2 to-amber-950/50 "
            : "bg-linear-to-br from-zinc-800/60 to-zinc-950 hover:bg-zinc-800/40",
        )}
      >
        <span
          className={cn("font-light tracking-wide drop-shadow-sm flex items-center justify-center text-shadow-2xs text-[12px] md:text-[14px]")}
        >
          {
            name.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
          }
          {/* blur glow */}
          {/* { isActive && (
              <span
                className="absolute mx-auto -bottom-[5px] md:-bottom-[7px] rounded-full blur-xs left-0 w-full h-[2px] bg-linear-to-l from-zinc-400 via-zinc-200 to-zinc-400 "
              />
          )} */}
          {/* line */}
          {/* { isActive && (
              <span
                className="absolute mx-auto -bottom-[6px] md:-bottom-[6.5px] xl:-bottom-[7.5px] left-0 w-[95%] h-[1.3px] bg-linear-to-l from-transparent via-zinc-200 to-transparent "
              />
          )} */}
        </span>
      </motion.button>
    );
  },
);
export default Categories;

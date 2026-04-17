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
        initial={{ opacity: 0, y: 8, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.88, y: 6, transition: { duration: 0.15, delay: 0, ease: "easeInOut" } }}
        whileHover={{ y: -4, transition: { duration: 0.13, ease: "easeInOut" } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.08, delay: 0 } }}
        transition={{
          // duration: 0.22, -- with layout duration(feels weird)
          delay: index * 0.03,
          ease: "easeOut",
          layout: { duration: 0.26, ease: "easeOut" },
        }}
        onClick={handleClick}
        aria-pressed={isActive}
        aria-label={`Select ${name.split("_").join(" ")} category`}
        className={cn(
          "relative w-fit group border-[1.6px] border-white/30 py-[3px] px-3 md:py-1.5 md:px-4 mb-2 rounded-[12px] md:rounded-[14px]",
          "backdrop-blur-md cursor-pointer select-none shadow-xs shadow-white/8 hover:shadow-[0_4px_15px_rgba(0,0,0,0.9)]  ",
          isActive
            ? "bg-linear-to-b from-amber-800/50 border-2 to-amber-950/50 shadow-[inset_0_4px_6px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.8)]"
            : "bg-linear-to-br from-zinc-800/60 to-zinc-950 hover:bg-zinc-800/40 shadow-[inset_0_3px_0_rgba(255,255,255,0.5),0_1px_3px_rgba(0,0,0,0.4)]",
        )}
      >
        <span
          className={cn("font-light tracking-wide drop-shadow-sm text-shadow-2xs text-[12px] md:text-[13px]")}
        >
          {
            name.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
          }
          {/* blur glow */}
          { isActive && (
              <span
                className="absolute mx-auto -bottom-[5px] md:-bottom-[9.2px] rounded-full blur-xs left-0 w-[95%] h-[2px] bg-linear-to-l from-transparent via-zinc-200 to-transparent "
              />
          )}
          {/* line */}
          { isActive && (
              <span
                className="absolute mx-auto -bottom-[7.5px] md:-bottom-[9px] xl:-bottom-[9.5px] left-0 w-[95%] h-[1.5px] bg-linear-to-l from-transparent via-zinc-200 to-transparent "
              />
          )}
        </span>
      </motion.button>
    );
  },
);
export default Categories;

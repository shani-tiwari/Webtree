/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const Categories = React.memo(
  ({ name, setcardData, data, isActive, setActiveCategory }) => {
    const handleClick = () => {
      setcardData(data[name]);
      setActiveCategory(name);
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleClick}
        aria-pressed={isActive}
        aria-label={`Select ${name.split("_").join(" ")} category`}
        className={cn(
          "relative w-fit md:text-start group border border-white/30 py-[3px] px-3 md:py-1.5 md:px-4 mb-2 rounded-[12px] md:rounded-[14px]",
          "backdrop-blur-md cursor-pointer transition-colors duration-200 ease-out select-none shadow-xs shadow-white/8 hover:shadow-[0_4px_15px_rgba(0,0,0,0.6)]",
          isActive
            ? "bg-linear-to-bl from-amber-600/30 to-amber-700/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)]"
            : "bg-zinc-800/20 hover:bg-zinc-800/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_3px_rgba(0,0,0,0.4)]",
        )}
      >
        <span
          className={cn("font-light tracking-wide drop-shadow-sm text-shadow-2xs text-sm")}
        >
          {name
            .split("_")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")}
        </span>
        {/* {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 rounded-lg border-2 border-amber-500/50 pointer-events-none"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )} */}
      </motion.button>
    );
  },
);
export default Categories;

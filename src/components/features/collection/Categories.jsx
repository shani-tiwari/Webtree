/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../../utils/utils.js";

const Categories = React.memo(
  ({ name, data, isActive, setActiveCategory }) => {
    const handleClick = () => {
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
          "relative w-fit group border border-white/30 py-[3px] px-3 md:py-1.5 md:px-4 mb-2 rounded-[12px] md:rounded-[14px]",
          "backdrop-blur-md cursor-pointer hover:transition-colors transition-all duration-50 ease-out select-none shadow-xs shadow-white/8 hover:shadow-[0_4px_15px_rgba(0,0,0,0.6)]",
          isActive
            ? "bg-linear-to-br from-amber-600-op30 to-amber-700-op30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.8)]"
            : "bg-zinc-800/20 hover:bg-zinc-800/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_3px_rgba(0,0,0,0.4)]",
        )}
      >
        <span
          className={cn("font-light tracking-wide drop-shadow-sm text-shadow-2xs text-sm")}
        >
          {/* {
            isActive && (
              <span
                className="absolute -top-[9px] left-0 w-[90%] h-[0.5px] bg-linear-to-l from-transparent  via-zinc-200 to-transparent "
              />
            )
          } */}
          {name
            .split("_")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")}
            {/* blur glow */}
          {
            isActive && (
              <span
                className="absolute -bottom-[5px] md:-bottom-[9px] rounded-full blur-xs left-0 w-[95%] h-[2px] bg-linear-to-l from-transparent via-zinc-300 to-transparent "
              />
            )
          }
          {/* line */}
          {
            isActive && (
              <span
                className="absolute -bottom-[7px] md:-bottom-[10.5px] xl:-bottom-[9.5px] left-0 w-[95%] h-[0.9px] bg-linear-to-l from-transparent via-zinc-300 to-transparent "
              />
            )
          }
        </span>
      </motion.button>
    );
  },
);
export default Categories;

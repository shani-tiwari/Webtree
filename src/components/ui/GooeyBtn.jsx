
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react"

export default function GooeyBtn({text, icon, isSuggestAddonOpen, setIsSuggestAddonOpen }) {
    const [isHovered, setIsHovered] = useState(false);

    const buttonVariants = {
      collapsed:{ width: 220, x: 0 },
      expanded:{ width: 190, x: -15 }
    };

    const bubbleVariants = {
      hidden: { scale: 0, opacity: 0, x: 0 },
      visible:{ scale: 1, opacity: 1, x: 40 }
    };

    const Transition = { transition: { duration: 0.5, type: "spring", bounce: 0.25 } }

  return (
    <div
      onClick={() => setIsSuggestAddonOpen(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center cursor-pointer w-fit mx-auto mt-4 py-2">

      {/* gooey effect component */}
      <SVGFilter />

        <div className="relative flex justify-center h-12 w-fit items-center" style={{ filter: "url(#gooeyEffect)" }}>
            
            <motion.div 
             variants={buttonVariants}
             initial='collapsed'
             animate={isHovered ? 'expanded' : 'collapsed'}
             transition={Transition}
             className="h-[44px] z-40 relative flex items-center justify-between px-5 gap-2 shadow-xs shadow-white/60 border-2 border-gray-700/40 bg-zinc-800 rounded-xl">
                <p className="text-center whitespace-nowrap text-white/90 text-lg font-mono">{text}</p>
                
                <motion.div 
                  animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.5 : 1, x: isHovered ? 20 : 2 }}
                  transition={{ duration: 0.3 }}
                  className="h-10 w-10 text-white flex items-center justify-center font-medium rounded-xl">
                  <HugeiconsIcon icon={icon} size={24}/>
                </motion.div>
                
            </motion.div>

            <motion.button 
              variants={bubbleVariants}
              initial='hidden'
              animate={isHovered ? 'visible' : 'hidden'}
              transition={Transition}
              className="h-13 w-13 z-30 absolute right-0 text-white/80 shadow-sm shadow-black/60 border-2 border-zinc-600 bg-zinc-800 flex items-center justify-center font-medium cursor-pointer rounded-full"
            >
              <HugeiconsIcon icon={icon} size={26} className={isHovered ? "rotate-90 hover:rotate-180 transition-transform duration-300" : ""} />
            </motion.button>

        </div>
    </div>
  )
};

const SVGFilter = () => {
  return (
    <svg className="absolute hidden h-0 w-0">
      <defs>
        <filter id="gooeyEffect" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="
            1  0  0  0   0
            0  1  0  0   0
            0  0  1  0   0
            0  0  0 20 -7
          " result="gooey" />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}
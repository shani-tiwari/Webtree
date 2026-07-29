// eslint-disable-next-line no-unused-vars
import {AnimatePresence, motion} from 'motion/react';


export default function CustomSVG() {
  return (

    <AnimatePresence mode='svgDivider'>
        <motion.div 
          layout
          transition={{ layout: { duration: 0.3, ease: "easeIn" } }}
          className=" relative mx-auto w-[90vw] lg:w-[80vw] xl:w-[55vw] -mt-9 pointer-events-none">
            <svg 
                className=" absolute top-2 -left-[0.2px] rotate-180 "  
                viewBox="0 0 300 70" 
                preserveAspectRatio="xMidYMid meet"
                fill="none">
                    <motion.path 
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}}
                        transition={{duration:0.75, delay: 0.4}}
                        d="
                            M10 70  
                        Q10 60 50 60
                        Q140 60 150 40
                    " 
                    stroke="var(--color-white)"
                    strokeWidth="0.3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"

                    />
            </svg>

            <svg
                className=" absolute top-2 left-[0.3px] rotate-y-360 rotate-x-180 "
                viewBox="0 0 300 70"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
            >
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.75, delay: 0.4 }}
                    d="
                        M10 70
                        Q10 60 50 60
                        Q140 60 150 40
                    "
                    stroke="var(--color-white)"
                    strokeWidth="0.3" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="scaling-stroke" 
                />
            </svg>

        </motion.div>
    </AnimatePresence>
  )
}
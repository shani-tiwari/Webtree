// eslint-disable-next-line no-unused-vars
import {motion} from 'motion/react';


export default function CustomSVG() {
  return (

    // my design and animation 
    <div className=" relative z-50 mx-auto w-[85vw] lg:w-[80vw] xl:w-[58vw] -mt-10 pointer-events-none">
        <svg 
         className=" absolute top-2 -left-[0.2px] rotate-180 "  
         viewBox="0 0 300 70" 
         preserveAspectRatio="xMidYMid meet"
         fill="none">
            <motion.path 
             initial={{pathLength: 0}}
             animate={{pathLength: 1}}
             transition={{duration:0.6, delay: 0.4}}
             d="
                M10 70  
                Q10 60 50 60
                Q140 60 150 40
            " 
            stroke="var(--color-white)"
            strokeWidth="0.2"
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
                transition={{ duration: 0.5, delay: 0.4 }}
                d="
                    M10 70
                    Q10 60 50 60
                    Q140 60 150 40
                "
                stroke="var(--color-white)"
                strokeWidth="0.2" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="scaling-stroke" 
            />
        </svg>

    </div>
  )
}
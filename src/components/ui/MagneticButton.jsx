import { useRef, useState } from "react";
import { cn } from "../../utils/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";


/**
 * @param {string} icon       - The icon to display on the button.
 * @param {string} className  - The class to apply to the button.
 */
export default function MagneticButton({ icon, size='22', className = ''}) {
    
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    function handleMoseMove(e){
        if(!ref.current) return ;

        const {width, height, left, top} = ref.current.getBoundingClientRect();
        const {clientX, clientY} = e;
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({x,y});
    };

  return (
    <div className="w-fit flex items-center justify-center">
        <motion.span
          onMouseMove={handleMoseMove} 
          onMouseLeave={() => setPosition({x: 0, y: 0})}   
          ref={ref} 
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          // className={cn(...className)}
        >
          <HugeiconsIcon
            icon={icon}
            size={size}
            className={cn( `${className ? className : "mt-0.5 text-white/90"}`)}
          />
        </motion.span>
    </div>
  )
}

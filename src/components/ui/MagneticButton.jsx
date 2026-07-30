import { useRef, useState } from "react";
import { cn } from "../../utils/utils";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";


/**
 * @param {string} text       - The text to display on the button.
 * @param {string} to         - The link to navigate to.
 * @param {string} icon       - The icon to display on the button.
 * @param {string} className  - The class to apply to the button.
 * @returns {JSX.Element}     - The button component.
 */
export default function MagneticButton({text, to, icon, className = ''}) {
    
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMoseMove(e){
        if(!ref.current) return ;

        const {width, height, left, top} = ref.current.getBoundingClientRect();
        const {clientX, clientY} = e;
        const x = clientX - (left + width / 2.2);
        const y = clientY - (top + height / 2.2);
        setPosition({x,y});
    };

    const ref = useRef(null);

    const hasMoved = position.x !== 0 || position.y !== 0;
    
  return (
    <div className="w-fit mx-auto flex items-center justify-center">
      <div 
        onMouseMove={handleMoseMove} 
        onMouseLeave={() => setPosition({x: 0, y: 0})}   
        className={cn(" w-full h-[42px] flex items-center justify-center rounded-xl transition-all duration-300",
          hasMoved && 'bg-amber-800/30 border border-dashed border-amber-400',
        )}>
          <motion.div 
            ref={ref} 
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Link 
                to={to}
                className={cn(
                  "group select-none w-fit mx-auto mt-0 flex gap-2 text-white font-medium px-6 py-2 border-2 border-amber-500/70  bg-linear-to-t from-amber-600 to-amber-800 rounded-xl",
                  "shadow-sm shadow-amber-500/50 text-shadow-lg text-shadow-black/20 hover:shadow-[0_0_20px_rgba(255,190,0,0.2)] hover:scale-102 active:scale-98 transition-all duration-300",
                  className
                )}>
                  {text}
                  <HugeiconsIcon
                    icon={icon}
                    size={22}
                    className="mt-0.5 group-hover:-translate-y-0.75 group-hover:translate-x-0.75 transition-all duration-300"
                  />
              </Link>
          </motion.div>
      </div>
    </div>
  )
}

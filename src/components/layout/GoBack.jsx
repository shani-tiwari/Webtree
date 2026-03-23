import { HugeiconsIcon } from "@hugeicons/react";
import { MoveLeftIcon } from '@hugeicons/core-free-icons'
// eslint-disable-next-line no-unused-vars
import {motion} from 'motion/react'
import { useNavigate } from 'react-router'

export default function GoBack() {
    const navigate = useNavigate()
  return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className=" absolute -top-[10px] left-0 md:left-0 md:-top-[10px]"
      >
        <span
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-amber-600 py-[0.2px] px-2 md:py-0.3 md:px-5 rounded-full cursor-pointer 
            bg-black/40 backdrop-blur-md border border-white/5 
            hover:text-amber-500 hover:bg-black/50 active:scale-95
            transition-all duration-300 shadow-lg ring-2 ring-zinc-400/50"
        >
          <HugeiconsIcon icon={MoveLeftIcon} className="group-hover:-translate-x-1 animate-pulse transition-transform duration-300" size={20} />
        </span>
      </motion.div>
  )
}

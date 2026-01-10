// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Button({ name, ariaLabel }) {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      exit="exit"
      aria-label={ariaLabel}
      className="group relative px-4 py-2 rounded-full overflow-hidden"
    >
      <motion.span className="relative z-10 shadow-lg shadow-black hover:text-zinc-200 text-neutral-400">
        {name}
      </motion.span>
      <motion.span
        variants={{
          initial: { scaleX: 0, originX: 0 },
          hover: { scaleX: 1, originX: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className=" absolute top-0 left-0 h-full w-full bg-linear-to-bl from-zinc-700 to-zinc-500"
      />
    </motion.button>
  );
}

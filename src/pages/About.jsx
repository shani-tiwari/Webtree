// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChartLineData02Icon, MoveLeftIcon } from "@hugeicons/core-free-icons";
import { cn } from "../utils/utils.js";
import { Link, useLocation } from "react-router";
import GoBack from "../components/layout/GoBack";

export default function About() {
  const location = useLocation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className={cn(
        "w-full min-h-screen pt-18 lg:mt-0 flex items-center justify-center flex-col bg-[#030303] px-4 relative selection:bg-amber-600-op30 selection:text-white overflow-hidden",
      )}
    >
      {/* Enhanced Ambient Background Accents */}
      <div className="absolute -top-6 -left-20 w-[500px] h-[500px] bg-purple-600/6 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-600/6 blur-[120px] rounded-full pointer-events-none animate-pulse" />


        <div className={cn("max-w-[1300px] mx-auto text-center px-1 md:px-14 py-8 mb-2 md:mb-0")}>
            <motion.a
              href={location.pathname !== "/about" && "/about" }
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                "text-4xl italic md:text-5xl mx-auto text-center font-black text-white/90 tracking-tighter",
              )}
            >
              About <span className={cn("text-neutral-500 italic")}>Webtree</span>
            </motion.a>
        </div>

      {/* back button & divider */}
        <motion.span 
          initial={{width:"0%"}}              
          viewport={{ once: true }}
          whileInView={{width:"95%"}}
          transition={{duration:0.6, delay:0.3, originX:50, ease: "easeOut"}}
          className="z-90 h-[0.5px] lg:max-w-[80%]  mx-auto -mt-4 md:mt-0 mb-2 bg-white/40 relative">
          { location.pathname === "/about" && 
            <GoBack />
          }
        </motion.span>

      {/* Main Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1300px] mx-auto px-1 md:px-14 pt-12 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 "
      >
        {/* Our Mission */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3 group">
            <span className="w-8 h-8 rounded-lg bg-linear-to-b from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg select-none group-hover:scale-110 transition-transform duration-300">
              ४
            </span>
            <h3 className="text-[22px] font-bold text-white tracking-wide group-hover:text-amber-500 transition-colors duration-300">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-300/70 text-center md:text-start hover:text-gray-300 transition-all duration-300 leading-6 hover:leading-7 px-2 md:pr-10 md:pl-0">
            WebTree was born from a simple need: to cut through the noise of the
            modern web. We curate the finest frontend magic—from Tailwind
            components and Framer prototypes to essential performance
            tools—helping you build better, faster.
          </p>
        </motion.div>

        {/* Why WebTree? */}
        <motion.div variants={itemVariants} className="space-y-4 ">
          <div className="flex items-center gap-3 group justify-center md:justify-start">
            <span className="w-8 h-8 rounded-lg bg-linear-to-b from-gray-700 to-gray-800 flex items-center justify-center text-white group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300">
              <HugeiconsIcon icon={ChartLineData02Icon} size={18} />
            </span>
            <h3 className="text-[22px] font-bold text-white tracking-wide group-hover:text-amber-500 transition-colors duration-300">
              Why WebTree?
            </h3>
          </div>
          <ul className="text-gray-400 space-y-3 px-4 md:px-1 text-center md:text-start">
            {[
              {
                title: "Hand-Curated",
                desc: "Every resource is verified for quality and utility.",
              },
              {
                title: "One-Click Magic",
                desc: "Zero friction access to the tools you need right now.",
              },
              {
                title: "Community Driven",
                desc: "Built by developers who understand the craft.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                className="flex gap-2 group cursor-default"
              >
                <span className="text-amber-500 group-hover:text-amber-400 transition-colors">
                  →
                </span>
                <span>
                  <strong className="text-neutral-200 tracking-wide">{item.title}:</strong>{" "}
                  {item.desc}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Product Roadmap */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3 group">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-8 h-8 rounded-lg bg-linear-to-b from-gray-700 to-gray-800 flex items-center justify-center text-amber-500"
            >
              ⚡
            </motion.span>
            <h3 className="text-[22px] font-bold text-white tracking-wide group-hover:text-amber-500 transition-colors duration-300">
              Roadmap
            </h3>
          </div>
          <div className="space-y-[12px]">
            {[
              {
                title: "Backend & Infrastructure",
                desc: "Expanding our curated collections to server-side excellence.",
                live: true,
              },
              {
                title: "Interactive Tutorials",
                desc: "Learn to master the tools you find here.",
                live: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  x: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
                className="py-2 px-3 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group transition-colors"
              >
                {item.live && (
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-tighter text-amber-500-op80 font-semibold">
                      Live Soon
                    </span>
                  </div>
                )}
                <p className="text-sm font-semibold tracking-wide text-white group-hover:text-amber-500 transition-colors">
                  <span className="text-amber-500">• </span>
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-4 pl-[10px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

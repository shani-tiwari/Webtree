import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home11Icon,
  SearchList02Icon,
  FolderFavouriteIcon,
  Agreement03Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons";
// import { GoBack } from "../components/layout";
import { cn } from "../utils/utils.js";

const fellowPages = [
  { name: "Explore", path: "/explore/tools", icon: SearchList02Icon, desc: "Browse curated dev tools" },
  { name: "Collection", path: "/collection", icon: FolderFavouriteIcon, desc: "Your saved stack" },
  { name: "Reviews", path: "/reviews", icon: Agreement03Icon, desc: "Community thoughts" },
  { name: "About", path: "/about", icon: Rocket01Icon, desc: "Learn about Webtree" },
];

export default function NotFound() {
  return (
    <section className="min-h-[82vh] w-full flex flex-col items-center justify-center relative px-4 py-16 md:py-24 overflow-hidden selection:bg-amber-600/30 selection:text-white">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[420px] h-[420px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
        

        {/* 404 Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex items-center justify-center my-2 select-none"
        >
          <span className="text-7xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600 drop-shadow-[0_10px_35px_rgba(245,158,11,0.2)]">
            404
          </span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-2.5 max-w-lg mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight italic">
            something went wrong <span className="text-amber-500">.</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono leading-relaxed px-4">
            The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Primary Action Button (Home Route Link) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-amber-600 hover:bg-amber-500 border border-amber-400/40 text-white font-bold text-sm sm:text-base transition-all duration-200 active:scale-95 shadow-[0_0_30px_var(--color-amber-500-op40)] hover:shadow-[0_0_40px_rgba(245,158,11,0.55)] cursor-pointer"
          >
            <HugeiconsIcon
              icon={Home11Icon}
              size={18}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Back button & subtle divider */}
        {/* <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="z-50 h-[0.5px] w-full mb-10 bg-white/20 relative"
        >
          <GoBack />
        </motion.div> */}

        {/* Fellow Pages Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full max-w-2xl flex flex-col items-center gap-4 px-2"
        >
          <div className="flex items-center gap-3 w-full justify-center">
            <span className="h-[1px] w-8 sm:w-16 bg-white/10" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              Or visit fellow pages
            </span>
            <span className="h-[1px] w-8 sm:w-16 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {fellowPages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                className={cn(
                  "group flex flex-col items-center text-center p-4 rounded-xl gap-1",
                  "bg-zinc-950/60 hover:bg-zinc-900/80 border border-white/5 hover:border-amber-400/20",
                  "backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/60",
                )}
              >
                <div className="p-3 rounded-lg bg-black/40 text-neutral-400 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-all mb-1">
                  <HugeiconsIcon icon={page.icon} size={20} />
                </div>
                <span className="text-lg font-mono font-semibold text-neutral-200 group-hover:text-white transition-colors">
                  {page.name}
                </span>
                <span className="text-[12px] text-neutral-500 font-mono tracking-tight mt-0.5 hidden sm:block">
                  {page.desc}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

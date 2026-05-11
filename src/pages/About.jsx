// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BookOpen02Icon,
  ChartLineData02Icon,
  Link01Icon,
  Link02Icon,
  MessageMultiple01Icon,
  MessageSquarePlus,
  MoveLeftIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "../utils/utils.js";
import { useLocation } from "react-router";
import GoBack from "../components/layout/GoBack";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import MagneticButton from "../components/ui/MagneticButton.jsx";

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      {/* helmet - SEO */}
      <Helmet>
        {/* <title>About Webtree - Web Dev Resources</title> */}
        <meta
          name="description"
          content="Webtree, the ultimate collection of web development resources. Discover tools, design ideas, and more."
        />
        <meta name="author" content="Shani Tiwari" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#030303" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ShaniDevelops" />
        <meta
          name="twitter:title"
          content="About Webtree - Collection of Web Development Resources"
        />
        <meta
          name="twitter:description"
          content="Webtree, the ultimate collection of web development resources. Discover tools, design ideas, and more."
        />
        <meta
          name="twitter:image"
          content="https://webtree.shaniweb.com/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="webtree" />
        <meta property="og:url" content="https://webtree.shaniweb.com/about" />
        <meta
          property="og:title"
          content="Webtree - Collection of Web Development Resources"
        />
        <meta
          property="og:description"
          content="Webtree, the ultimate collection of web development resources. Discover tools, design ideas, and more."
        />
        <meta
          property="og:image"
          content="https://webtree.shaniweb.com/og-image.png"
        />
      </Helmet>

      {/* main section */}
      <section
        id="about"
        className={cn(
          "w-full min-h-screen pt-18 lg:mt-0 flex items-center justify-center flex-col bg-[#030303] px-4 relative selection:bg-amber-600-op30 selection:text-white overflow-hidden",
        )}
      >
        {/* Enhanced Ambient Background Accents */}
        <div className="absolute -top-6 -left-20 w-[500px] h-[500px] bg-purple-600/6 blur-[120px] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-600/6 blur-[120px] rounded-full pointer-events-none animate-pulse" />

        <h1
          className={cn(
            "max-w-[1300px] mx-auto text-center px-1 md:px-14 py-8 mb-2 md:mb-0",
          )}
        >
          <motion.a
            href={location.pathname !== "/about" && "/about"}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "text-4xl flex gap-4 italic md:text-7xl mx-auto text-center font-black text-white/90 tracking-tight hover:tracking-tighter transition-all duration-500",
            )}
          >
            About <h1 className={cn("text-neutral-500 italic")}>Webtree</h1>
          </motion.a>
        </h1>

        {/* back button & divider */}
        <motion.span
          initial={{ width: "0%" }}
          viewport={{ once: true }}
          whileInView={{ width: "95%" }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            originX: 50,
            ease: "easeOut",
          }}
          className="z-90 h-[0.5px] lg:max-w-[80%]  mx-auto -mt-4 md:mt-0 mb-2 bg-white/40 relative"
        >
          {location.pathname === "/about" && <GoBack />}
        </motion.span>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-[1200px] mx-auto px-1 flex md:px-14 pt-12  gap-12 "
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="w-full grid lg:grid-cols-3 gap-4 md:gap-8 md:grid-cols-2 space-y-[12px]">
              {[
                {
                  title: "Hand-Curated",
                  desc: "Every resource is carefully reviewed for quality, relevance, and real-world usefulness.",
                },
                {
                  title: "Instant Access",
        desc: "Find the right tool fast without digging through endless tabs and bookmarks.",
                },
                  {
                    title: "Smarter Workflow",
                    desc: "Discover resources in one place so you can stay in flow and keep building.",
                  },
                  {
                    title: "Simple Navigation",
                    desc: "Browse categories effortlessly and move to what you need in just a click.",
                  },
                  {
                    title: "Focused Building",
                    desc: "Spend less time searching and more time shipping your ideas.",
                  },
                  {
                    title: "Built for Developers",
                    desc: "Designed to support faster decisions, fewer mistakes, and better project momentum.",
                  },
                ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  }}
                  className="group h-full py-2 px-3 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden transition-all duration-300"
                >
                  {item.live && (
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className="relative flex h-2 w-[10px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-[10px] bg-amber-500"></span>
                      </span>
                      <span className="text-[10px] uppercase tracking-tight text-amber-500-op80 font-semibold">
                        Live Soon
                      </span>
                    </div>
                  )}
                  <p className="text-sm font-semibold tracking-wide text-white group-hover:text-amber-500 transition-colors">
                    <span className="text-amber-500 animate-pulse"> • </span>
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400/80 mt-1 group-hover:text-neutral-400 leading-4 pl-[10px]">
                    {item.desc}
                  </p>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

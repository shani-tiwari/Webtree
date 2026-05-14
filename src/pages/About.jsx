// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BookOpen02Icon,
  ChartLineData02Icon,
  ComputerChartUpIcon,
  DashboardSquareEditIcon,
  FolderAddIcon,
  Link01Icon,
  Link02Icon,
  MessageMultiple01Icon,
  MessageSquarePlus,
  MoveLeftIcon,
  SentIcon,
  ShapeCollectionIcon,
  UserBlock02FreeIcons,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "../utils/utils.js";
import { useLocation } from "react-router";
import GoBack from "../components/layout/GoBack";
// import { useEffect } from "react";
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });

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
          "w-full min-h-screen flex items-center justify-center flex-col bg-[#030303] px-4 relative selection:bg-amber-600-op30 selection:text-white overflow-hidden",
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
          className="w-full max-w-[1200px] mx-auto px-1 flex md:px-8 pt-10 mb-8 gap-10 "
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="w-full grid lg:grid-cols-3 gap-4 md:gap-6 md:grid-cols-2 space-y-[12px]">
              {
                about_data.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: i < 3 ? 9 : -9,
                      x: (i % 3 === 0) ? 10 : (i % 3 === 1) ? 0 : -10 ,
                      backgroundColor: "rgba(193, 152, 33, 0.04)",
                    }}
                    transition={{ duration: 0.05, ease: 'linear' }}
                    className="group h-full py-2 px-3 rounded-xl bg-black/70 ring-1 ring-amber-400/20 shadow-sm shadow-white/40 relative overflow-hidden transition-all duration-200"
                  >
                    <p className="text-sm flex justify-center items-center tracking-wide text-white group-hover:text-amber-500 transition-all">
                      <span className="text-amber-500 flex items-center gap-2  "> ⁜ 
                        <p className="text-white/80 text-[16px] font-semibold text-shadow-lg text-shadow-black">{item.title}</p> 
                      </span>
                    </p>
                    <p className="text-[13px] text-gray-400/90 text-center text-shadow-lg text-shadow-black tracking-wide mt-1 group-hover:text-neutral-400 leading-4 px-[18px]">
                      {item.desc}
                    </p>
                    </motion.div>
                ))
              }
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}


const about_data = [
  {
    title: "Curated, Not Crowded",
    desc: "135+ useful web dev resources across 15+ categories—filtered for quality so you don’t waste time.",
    icon: DashboardSquareEditIcon,
  },
  {
    title: "Discover Faster",
    desc: "Find the right tools, libraries, and references quickly with a structure built for real developer workflows.",
    icon: ZapIcon
  },
  {
    title: "Built for Better Decisions",
    desc: "From inspiration to implementation, everything is organized to help you work faster and make better development decisions.",
    icon: ComputerChartUpIcon,
  },
  {
    title: "Save Your Stack",
    desc: "Add resources to your collection and keep your favorite tools organized in one place.",
    icon:  FolderAddIcon,
  },
  {
    title: "Share Instantly",
    desc: "Copy links and share helpful resources with one click.",
    icon:  SentIcon
  },
  {
    title: "No Account Needed",
    desc: "Browse, save, and explore without signup friction.",
    icon: UserBlock02FreeIcons,
  },
];
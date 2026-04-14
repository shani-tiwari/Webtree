// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Rocket01Icon,
  SparklesIcon,
  Coffee02Icon,
  CursorMagicSelection04Icon,
  Share01Icon,
  CheckmarkCircle01Icon,
  HelpCircleIcon,
  Layers01Icon,
  WorkflowCircle06Icon,
  ArrowRight01Icon,
  SmartphoneWifiIcon,
  PresentationBarChart02Icon,
} from "@hugeicons/core-free-icons";
import { useEffect } from "react";
import {Helmet} from 'react-helmet'

export default function Blog() {
  const categories = [
    "Components & UI kits",
    "Tools, Web Assets Generators",
    "Motion libraries & animations",
    "Design systems",
    "Developer resources",
    "Web's Best Fonts",
    "Images / Videos / Illustrations",
    "Color Palettes",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "WebTree | Professional Development Resources",
          text: "Discover a curated collection of high-quality web design and development assets.",
          url: "https://webtree.shaniweb.com",
        });
        return; // success - exit
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  });

  return (
    <>
      <Helmet>
        <title>Blog - WebTree</title>
        <meta name="description" content="Blog - WebTree" />
        <meta name="author" content="Shani Tiwari" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#030303" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ShaniDevelops" />
        <meta name="twitter:title" content="Blog - WebTree" />
        <meta name="twitter:description" content="Blog - WebTree" />
        <meta name="twitter:image" content="https://webtree.shaniweb.com/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="webtree" />
        <meta property="og:url" content="https://webtree.shaniweb.com/blog" />
        <meta property="og:title" content="Blog - WebTree" />
        <meta property="og:description" content="Blog - WebTree" />
        <meta property="og:image" content="https://webtree.shaniweb.com/og-image.png" />
      </Helmet>
      <div className="select-none min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-900 selection:text-indigo-900 ">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          {/* Hero Section */}
          <motion.header
            variants={itemVariants}
            className="text-center mb-16 mt-10"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-900/30 px-6 py-2.5  rounded-full mb-6">
              <HugeiconsIcon
                icon={SparklesIcon}
                size={16}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider hover:tracking-widest transition-all duration-200">
                New Launch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-300 mb-6 leading-tight">
              The Ultimate Hub for{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-600 to-indigo-600">
                Web Design & Development Resources
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              A handpicked universe of design and development assets, organized
              for modern creators.
            </p>
            <a
              href="https://webtree.shaniweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 hover:ring-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              WebTree Live
              <HugeiconsIcon
                icon={Rocket01Icon}
                size={20}
                className="ml-2 -mr-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </motion.header>

          {/* Content Body */}
          <div className="space-y-16">
            {/* What is this? */}
            <motion.section
              variants={itemVariants}
              className="prose prose-invert max-w-none"
            >
              <div className="flex items-center space-x-3 mb-4">
                <HugeiconsIcon
                  icon={HelpCircleIcon}
                  size={24}
                  className="text-indigo-500"
                />
                <h2 className="text-2xl font-bold text-white m-0">
                  Curated Resource Library for Modern Developers
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                WebTree is a precision-curated repository of essential development assets—ranging from
                premium UI kits and motion libraries to high-performance APIs and CSS background assets. 
                Our mission is to centralize the highest quality tools for web professionals, eliminating 
                the need for fragmented browser tabs and disorganized bookmarks.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {
                  categories.map((cat, i) => (
                      <div
                      key={i}
                      className="flex items-center space-x-3 p-3 bg-slate-900 rounded-lg border border-slate-600 hover:scale-102 transition-all duration-150 shadow-sm"
                      >
                      <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      <span className="text-sm font-medium text-slate-300">
                          {cat}
                      </span>
                      </div>
                  ))
                }
              </div>
            </motion.section>

            {/* Problem I Wanted to Solve */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <HugeiconsIcon
                  icon={Layers01Icon}
                  size={24}
                  className="text-emerald-500"
                />
                <h2 className="text-2xl font-bold text-white m-0">
                  Solving the Modern Developer Resource Hunt
                </h2>
              </div>
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-md">
                <p className="text-slate-400 mb-6 italic">
                  "As a full-stack developer, I encountered these recurring bottlenecks:"
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Resource hunting fatigue",
                      desc: "Finding that one perfect button component takes forever",
                    },
                    {
                      title: "Bookmark chaos",
                      desc: "500+ bookmarks, zero organization",
                    },
                    {
                      title: "No personal curation",
                      desc: "Wanted to save favorites but hated signup walls",
                    },
                    {
                      title: "Offline access",
                      desc: "Needed resources working on slow connections",
                    },
                    {
                      title: "No analytics",
                      desc: "Curious what resources devs actually use",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="shrink-0 mt-1">
                        <HugeiconsIcon
                          icon={CheckmarkCircle01Icon}
                          size={18}
                          className="text-emerald-500 animate-pulse"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-slate-300/80 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                  <p className="font-medium text-indigo-400">
                    WebTree fixes all this in one clean package.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* What's Live Now */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <HugeiconsIcon
                  icon={Rocket01Icon}
                  size={24}
                  className="text-amber-500"
                />
                <h2 className="text-2xl font-bold text-white m-0">
                  Advanced Features & Core Capabilities
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Personal Collections",
                    desc: "No Login Required. Save your favorite resources with one click.",
                    icon: CursorMagicSelection04Icon,
                  },
                  {
                    title: "PWA Support",
                    desc: "Install WebTree on your desktop/phone. Works offline like a native app.",
                    icon: SmartphoneWifiIcon,
                  },
                  {
                    title: "Insights & Analytics",
                    desc: "Clean data on what's popular to help prioritize new features.",
                    icon: PresentationBarChart02Icon,
                  },
                  {
                    title: "150+ Curated Resources",
                    desc: "Meticulously selected development sites and tools organized for rapid discovery and implementation.",
                    icon: WorkflowCircle06Icon,
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="group p-6 bg-slate-800/50 rounded-2xl border hover:pl-[22px] border-slate-800 hover:border-indigo-500 transition-all duration-300"
                  >
                    <div className="p-2 bg-slate-900 rounded-xl w-fit mb-4 shadow-md shadow-black group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                      {feature.icon && (
                        <HugeiconsIcon
                          icon={feature.icon}
                          size={20}
                          className="text-white/80"
                        />
                      )}
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Call to Action Support */}
            <motion.section
              variants={itemVariants}
              className="bg-linear-to-br from-indigo-700/50 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl"
            >
              <div className="relative z-10 flex flex-col items-center text-center hover:-translate-y-1 hover:scale-101 transition-all duration-200">
                <HugeiconsIcon
                  icon={Coffee02Icon}
                  size={48}
                  className="mb-6 opacity-80"
                />
                <h2 className="text-2xl font-bold mb-4">Support the Project</h2>
                <p className="text-indigo-100 max-w-md mb-8">
                  WebTree is a community-driven initiative. If these resources accelerate your 
                  development workflow, consider supporting our efforts to keep the platform ad-free 
                  and constantly updated with the latest tools.
                </p>
                <a
                  href="https://buymeacoffee.com/shani_tiwari?new=1"
                  target="_blank"
                  className="bg-white/95 text-indigo-700 px-8 py-3 rounded-xl shadow-md shadow-black/50 font-bold hover:bg-slate-100 transition-all "
                >
                  Buy Me a Coffee ☕
                </a>
              </div>
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </motion.section>

            {/* Comparison */}
            <motion.section
              variants={itemVariants}
              className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800"
            >
              <h2 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-wide">
                Optimizing Your Development Workflow
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:block absolute mt-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={32} />
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Before WebTree
                  </span>
                  <div className="p-4 bg-slate-900 rounded-xl mt-2 border-2 border-red-900/50 text-slate-400 text-sm leading-relaxed">
                    "Need a glassmorphism card &rarr; Google &rarr; 10 tabs &rarr;
                    bookmark &rarr; lost forever"
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                    After WebTree
                  </span>
                  <div className="p-4 bg-slate-900 rounded-xl mt-2 border-2 border-emerald-800 text-slate-400 text-sm leading-relaxed">
                    "Need glassmorphism &rarr; WebTree &rarr; 2 sec &rarr; Save to
                    collection &rarr; Done ✅"
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Footer CTA */}
            <motion.footer
              variants={itemVariants}
              className="text-center pt-8 border-t border-slate-800"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Get Started with WebTree Professional
              </h2>
              <p className="text-slate-400 mb-8">
                Zero registration required. Instant access to professional tools. 
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://webtree.shaniweb.com"
                  className="text-indigo-400 font-bold hover:underline"
                >
                  webtree.shaniweb.com
                </a>
                <span className="text-slate-700 hidden sm:inline">
                  |
                </span>
                <button className="flex items-center space-x-2 text-slate-400 hover:text-indigo-600 transition-colors">
                  <HugeiconsIcon icon={Share01Icon} size={16} />
                  <span onClick={handleShare} className="text-sm font-medium">
                    Share WebTree Library
                  </span>
                </button>
              </div>
              <p className="mt-12 mx-auto text-sm text-slate-300 bg-zinc-300/10 shadow-sm shadow-black rounded-full px-6 py-2 w-fit">
                What resources should I add next ? 
                Drop a review
              </p>
            </motion.footer>
          </div>
        </motion.article>
      </div>
    </>
  );
}

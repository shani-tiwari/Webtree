/* eslint-disable no-unused-vars */
import { Link } from "react-router";
import { easeInOut, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Coffee01Icon,
  Dribbble,
  DribbbleFreeIcons,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterRectangleIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "../../utils/utils.js";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "Explore", path: "/explore/tools" },
  { label: "About", path: "/about" },
  // { label: "Connect", path: "/connect" },
  { label: "Reviews", path: "/reviews" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin01Icon,
    url: "https://www.linkedin.com/in/shani-tiwarii/",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/shani-tiwari",
    color: "oklch(75.6% 0 0)",
  },
  {
    name: "Twitter",
    icon: NewTwitterRectangleIcon,
    url: "https://x.com/ShaniDevelops",
    color: "oklch(78.7% 0.021 106.9)",
  },
  {
    name: "Dribble",
    icon: DribbbleFreeIcons,
    url: "https://Instagram.com/shani.develops",
    color: "oklch(52.5% 0.223 3.958)",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://Instagram.com/shani.develops",
    color: "oklch(43.5% 0.029 321.78)"
  },
  {
    name: "Buy Me a Coffee",
    icon: Coffee01Icon,
    url: "https://buymeacoffee.com/shani_tiwari?new=1",
    color: "oklch(66.6% 0.179 58.318)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative z-5 w-full font-mono border-t border-white/5 bg-black/80 backdrop-blur-sm",
        "selection:bg-amber-600-op30 selection:text-white",
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-amber-600/5 blur-[80px]" />
        <div className="absolute -bottom-16 right-1/4 h-40 w-40 rounded-full bg-purple-600/5 blur-[70px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={containerVariants}
        className="relative mx-auto max-w-7xl px-6 py-14 md:px-14 md:py-16"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            <Link
              to="/"
              className="group flex w-fit items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5"
              aria-label="WebTree home"
            >
              <span className="text-2xl text-amber-500 transition-transform duration-300 group-hover:scale-110">
                ४
              </span>
              <span className="text-xl font-semibold tracking-tighter text-white/90 transition-colors duration-300 group-hover:text-amber-500">
                Webtree
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              The ultimate collection of 140+ web development resources. Discover
              tools, design ideas, and curated picks to build better on the web.
            </p>
            <span className="w-fit group  text-sm font-semibold tracking-tighter  transition-colors duration-300 bg-amber-100/80 text-black flex items-center gap-2 border border-amber-500/20 py-2 px-4 rounded-lg hover:border-amber-500/60 hover:bg-amber-200/80  ">
              <HugeiconsIcon icon={GithubIcon} size={16} className="-mt-0.5"/>
              <a href="https://github.com/shani-tiwari/WebTree" target="_blank" rel="noopener noreferrer" className="group-hover:text-black transition-colors duration-300">
                Star on GitHub
              </a>
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Navigate
            </h2>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "group relative inline-flex items-center text-sm text-neutral-400",
                      "transition-colors duration-300 hover:text-amber-500",
                    )}
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {link.label}
                    </motion.span>
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-amber-500/70 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Connect
            </h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    // delay: 0.2 + index * 0.06,
                    duration: 0.25,
                    type: 'bounce',
                    ease: easeInOut
                  }}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "group relative flex h-11 w-11 items-center justify-center rounded-xl",
                    "border-2 border-white/20 bg-white/3 backdrop-blur-sm",
                    "transition-colors duration-200 hover:border-white/15 hover:bg-white/6",
                  )}
                  style={{ "--social-color": social.color  }}
                >
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20"
                    style={{ backgroundColor: social.color , borderColor: social.color }}
                  />
                  <HugeiconsIcon
                    icon={social.icon}
                    size={22}
                    className="relative z-10 text-neutral-400 transition-colors duration-200 group-hover:text-white"
                    style={{ color: undefined}}
                  />
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      boxShadow: `0 0 20px color-mix(in srgb, ${social.color} 35%, transparent)`,
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row"
        >
          <p className="text-sm text-neutral-500">
            ©{currentYear} WebTree. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm text-neutral-400">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              💜
            </motion.span>{" "}
            by{" "}
            <Link
              to="/connect"
              title="Connect with Shani Tiwari"
              aria-label="Connect with Shani Tiwari"
              className="text-white transition-colors duration-300 hover:text-amber-500"
            >
              Shani Tiwari
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

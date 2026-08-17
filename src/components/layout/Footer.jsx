/* eslint-disable no-unused-vars */
import { Link } from "react-router";
import { easeInOut, motion } from "motion/react";
import {
  Coffee01Icon,
  // Dribbble,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterRectangleIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "../../utils/utils.js";
import MagneticButton from "../ui/MagneticButton.jsx";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "Explore", path: "/explore/tools" },
  // { label: "About", path: "/about" },
  // { label: "Connect", path: "/connect" },
  { label: "Reviews", path: "/reviews" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin01Icon,
    url: "https://www.linkedin.com/in/shani-tiwarii/",
    // color: "#0A66C2",
    no: "first-icon",
    rotate: "45deg",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/shani-tiwari",
    // color: "oklch(75.6% 0 0)",
    no: "sec-icon",
    rotate: "-45deg",
  },
  {
    name: "Twitter",
    icon: NewTwitterRectangleIcon,
    url: "https://x.com/ShaniDevelops",
    // color: "oklch(78.7% 0.021 106.9)",
    no: "third-icon",
    rotate: "45deg",
  },
  // {
  //   name: "Dribble",
  //   icon: DribbbleFreeIcons,
  //   url: "https://Instagram.com/shani.develops",
  //   color: "oklch(52.5% 0.223 3.958)",
  //   no: "four-icon"
  // },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://Instagram.com/shani.develops",
    // color: "oklch(52.5% 0.223 3.958)",
    no: "four-icon",
    rotate: "-45deg",
  },
  // {
  //   name: "Buy Me a Coffee",
  //   icon: Coffee01Icon,
  //   url: "https://buymeacoffee.com/shani_tiwari?new=1",
  //   color: "oklch(66.6% 0.179 58.318)",
  //   no: "five-icon"
  // },
];

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
        "selection:bg-amber-600/30 selection:text-white",
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-amber-600/5 blur-[80px]" />
        <div className="absolute -bottom-16 right-1/4 h-40 w-40 rounded-full bg-purple-600/5 blur-[70px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-8 py-14 md:px-14 md:py-16">
        <div className="flex flex-wrap justify-center md:justify-between gap-16 ">
          {/* Brand */}
          <motion.div className=" w-fit flex justify-center sm-md:items-center flex-col gap-2 ">
            <Link
              to="/"
              className="group flex w-fit items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5"
              aria-label="WebTree home"
            >
              <span className="text-2xl text-amber-500 transition-transform duration-300 group-hover:scale-110">
                ४
              </span>
              <span className="text-2xl font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-amber-500">
                Webtree
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-neutral-400/90 sm-md:text-center">
              The ultimate collection of 140+ web development resources.
              Discover tools, design ideas, and curated picks to build better on
              the web.
            </p>
            <div className="flex justify-start items-center gap-8 mt-6">
              <span className="group w-fit group text-lg font-medium tracking-tighter transition-colors duration-300 bg-amber-600/80 text-white/80 flex items-center gap-2 outline-2 outline-offset-1 outline-amber-600/80 py-1 px-4 rounded-lg hover:bg-amber-600/70 active:scale-98 text-shadow-lg">
                <a
                  href="https://github.com/shani-tiwari/WebTree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 justify-center items-center "
                >
                  star on
                  <MagneticButton icon={GithubIcon} size="20" />
                </a>
              </span>
              <span className="group w-fit group text-lg font-medium tracking-tighter  transition-colors duration-300 bg-amber-600/80 text-white/80 flex items-center gap-2 outline-2 outline-offset-1 outline-amber-600/80 py-1 px-4 rounded-lg hover:bg-amber-600/70 active:scale-98 text-shadow-lg">
                <a
                  href="https://buymeacoffee.com/shani_tiwari?new=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 justify-center items-center "
                >
                  <MagneticButton icon={Coffee01Icon} size="20" />
                  Coffee?
                </a>
              </span>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className=" w-fit flex flex-col justify-center items-center">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Navigate
            </h2>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3">
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
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      {link.label}
                    </motion.span>
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-amber-500/70 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="w-fit flex flex-col justify-start items-center">
            <h2 className="mb-5 w-full text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Connect
            </h2>
            <div className="flex flex-wrap justify-center max-w-42">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{once: true}}
                  transition={{
                    duration: 0.25,
                    type: "bounce",
                    ease: easeInOut,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "group size-fit relative flex items-center justify-center p-3 border-2 border-white/30 transition-colors duration-200",
                    "outline-2 outline-offset-1 outline-white/40",
                    `${social.no}`,
                  )}
                >
                  <span className="absolute inset-0 rounded-xl bg-white/80 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20" />
                  <span style={{ rotate: social.rotate }}>
                    <MagneticButton icon={social.icon} />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row"
        >
          <p className="text-sm text-neutral-500/90  tracking-tight text-center">
            ©{currentYear} WebTree. All rights reserved
          </p>

          <p className="flex items-center gap-2 text-sm text-neutral-400">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              💜
            </motion.span>{" "}
            by{" "}
            <Link
              to="https://shani-tiwari.framer.website"
              title="Connect with Shani Tiwari"
              aria-label="Connect with Shani Tiwari"
              className="text-white transition-colors duration-300 hover:text-amber-500"
            >
              Shani Tiwari
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Coffee01Icon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  MoveLeftIcon,
  NewTwitterRectangleIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "../utils/utils.js";
import GoBack from "../components/layout/GoBack";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";

import '../index.css';


export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/shani-tiwari",
      label: "Code & Open Source Contributions.",
      color: "oklch(75.6% 0 0)",
      status: "Building",
    },
    {
      name: "LinkedIn",
      icon: Linkedin01Icon,
      url: "https://www.linkedin.com/in/shani-tiwari-aspirational/",
      label: "Professional Career & Networking.",
      color: "#0A66C2",
      status: "Connect",
    },
    {
      name: "Twitter",
      icon: NewTwitterRectangleIcon,
      url: "https://x.com/ShaniDevelops",
      label: "Updates, Humour & Tech Insights.",
      color: "oklch(78.7% 0.021 106.9)",
      status: "Updates",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://Instagram.com/shani.develops",
      label: "Personal Journey & Experience.",
      color: "#E4405F",
      status: "Stories",
    },
    {
      name: "Coffee",
      icon: Coffee01Icon,
      url: "https://buymeacoffee.com/shani_tiwari?new=1",
      label: "Make me Drink Coffee.",
      color: "oklch(66.6% 0.179 58.318)",
      status: "Support",
    },
  ];  

  const location = useLocation();

  return (
    <>
    {/* helmet - SEO */}
    <Helmet>
      {/* <title>Socials - Webtree</title> */}
      <meta name="description" content="Socials - Webtree" />
      <meta name="author" content="Shani Tiwari" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#030303" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ShaniDevelops" />
      <meta name="twitter:title" content="Socials - Webtree" />
      <meta name="twitter:description" content="Socials - Webtree" />
      <meta name="twitter:image" content="https://webtree.shaniweb.com/og-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="webtree" />
      <meta property="og:url" content="https://webtree.shaniweb.com/connect" />
      <meta property="og:title" content="Webtree - Collection of Web Development Resources" />
      <meta property="og:description" content="Webtree, the ultimate collection of web development resources. Discover tools, design ideas, and more." />
      <meta property="og:image" content="https://webtree.shaniweb.com/og-image.png" />
    </Helmet>
    
    <section
      id="socials"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#030303] pt-12 pb-10 relative overflow-hidden select-none"
    >
      {/* Enhanced Ambient Background Accents */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-purple-600/6 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-600/6 blur-[120px] rounded-full pointer-events-none animate-pulse" />


      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Modern Minimal Header */}
        <div className="mb-8 space-y-3 md:space-y-4 text-center">
          <motion.a
            href="/connect"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl mx-auto font-black text-white/90 tracking-tight hover:tracking-tighter transition-all duration-500"
          >
            Stay <span className="text-neutral-500 italic">Connected</span>
          </motion.a>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-neutral-500 w-fit  mx-auto mt-5 text-md leading-4 tracking-tight hover:tracking-tighter transition-all duration-500"
          >
            Follow my journey online and explore my latest projects & thoughts.
          </motion.p>
        </div>

        {/* back button & divider */}
        <motion.span 
          initial={{width:"0%"}}              
          viewport={{ once: true }}
          whileInView={{width:"100%"}}
          transition={{duration:0.6, delay:0.3, originX:50, ease: "easeOut"}}
          className="z-90 h-[0.5px] block mx-auto -mt-4 md:mt-0 mb-2 bg-white/40 relative">
          { location.pathname === "/connect" && 
            <GoBack />
          }
        </motion.span>

        {/* Floating Flex/Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 mt-10">
          {socials.map((social) => (
            <SocialCard
              key={social.name}
              name={social.name}
              icon={social.icon}
              url={social.url}
              label={social.label}
              color={social.color}
              status={social.status}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}


//  helper card component 
const SocialCard = ({
  name,
  icon,
  url,
  label,
  color = "white",
  status = null,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.15 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative flex flex-col items-center justify-between p-4 md:p-5 w-full sm:w-52 md:w-60 lg:w-full",
        "rounded-3xl md:rounded-3xl lg:rounded-4xl bg-white/3 backdrop-blur-xl border-2 border-slate-600/35 hover:border-slate-500/60 transition-all duration-200 overflow-hidden",
      )}
      // style={{ borderColor: color }}
      aria-label={label}
    >
      {/* Dynamic Background Glow */}
      <div
        className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200 blur-[80px]")}
        style={{ backgroundColor: color }}
      />

      {/* Top Section: Icon & Status */}
      <div className="w-full flex justify-between items-start z-10">
        <div
          className={cn("p-2 rounded-2xl group-hover:scale-110 bg-white/10 border border-white/5 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-200")}
          style={{ color: color }}
        >
          <HugeiconsIcon icon={icon} size={26} />
        </div>

        {/* status indicator  */}
          <div
            className={cn("absolute right-2 top-6 flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl lg:rounded-2xl lg:top-6 lg:right-1 bg-black/40 group-hover:bg-(--color)/10 shadow-md shadow-white/10 group-hover:border-2 border border-white/10 backdrop-blur-md",)} 
            style={{ "--color": color }}
          >

            <span className={cn("relative flex items-center justify-center h-[11px] w-[22px] " )}>
              {/* ping animation */}
              <span 
                className={cn("animate-ping absolute inline-flex rounded-lg items-center justify-center h-[80%] w-[80%] opacity-80",
                `bg-(--color)`)}
                style={{ "--color": color }}
                >
              </span>
              {/* pill container */}
              <span 
                className={cn("relative h-full w-full rounded-lg px-px transition-all duration-200 ease-in-out",
                  "group-hover:justify-end group-hover:bg-(--color)/90 bg-gray-600",
                )}
                style={{ "--color": color }}
                >
                    {/* Actual Dot */}
                    <span 
                      className="absolute left-0.5 top-px group-hover:left-[12px] bg-white/80 w-2 h-2 rounded-full shadow-lg shadow-black transition-all duration-300  inset-shadow-sm">
                    </span>
              </span>
            </span>

            <span className={cn("block text-[10px] uppercase tracking-widest text-shadow-black text-shadow-sm text-neutral-300 font-bold")}>
              {status}
            </span>

          </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="w-full mt-3 z-10 backface-hidden"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white/90 text-shadow-black text-shadow-md tracking-wide mb-[2px] group-hover:tracking-tight transition-all duration-500">
          {name}
        </h3>
        <p className="text-sm leading-[18px] text-shadow-black text-shadow-md group-hover:tracking-[0.02em] transition-all duration-500 text-neutral-500 ">
          {label}
        </p>
      </motion.div>

      {/* Subtle Bottom Border Accent */}
      <div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full blur-2xl transition-all duration-700 ease-in-out"
        style={{ backgroundColor: color }}
      />
    </motion.a>
  );
};
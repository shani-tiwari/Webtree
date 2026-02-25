/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Coffee01Icon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterRectangleIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "../lib/utils";

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
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative flex flex-col items-center justify-between p-4 md:p-5 w-full sm:w-52 md:w-60 lg:w-full",
        "rounded-3xl md:rounded-4xl bg-white/3 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-400 overflow-hidden",
      )}
      aria-label={label}
    >
      {/* Dynamic Background Glow */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px]",
        )}
        style={{ backgroundColor: color }}
      />

      {/* Top Section: Icon & Status */}
      <div className="w-full flex justify-between items-start z-10">
        <div
          className={cn(
            "p-2 rounded-2xl bg-white/5 border border-white/5 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500",
          )}
          style={{ color: color }}
        >
          <HugeiconsIcon icon={icon} size={26} />
        </div>

        {status && (
          <div
            className={cn("absolute right-1 flex items-center justify-center gap-2 px-1.5 md:px-3 py-1.5 rounded-full bg-black/40 border border-white/5 backdrop-blur-md",)}>

            <span className={cn("relative flex items-center justify-center h-2 w-2" )}>
              <span 
                className={cn("animate-ping absolute inline-flex items-center justify-center h-full w-full rounded-full opacity-75")} 
                style={{ backgroundColor: color}}>
              </span>
              <span 
                className={cn("relative inline-flex rounded-full h-2 w-2")} 
                style={{ backgroundColor: color}}>
              </span>
            </span>
            <span className={cn("hidden md:block text-[10px] uppercase tracking-widest text-neutral-300 font-bold")}>
              {status}
            </span>

          </div>
        )}
      </div>

      {/* Bottom Section */}
      <motion.div
        className="w-full mt-2 z-10 backface-hidden"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          {name}
        </h3>
        <p className="text-sm font-medium text-neutral-500 group-hover:text-neutral-200 transition-colors duration-300 ">
          {label}
        </p>
      </motion.div>

      {/* Subtle Bottom Border Accent */}
      <div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full blur-lg transition-all duration-700 ease-in-out"
        style={{ backgroundColor: color }}
      />
    </motion.a>
  );
};

export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/shani-tiwari",
      label: "Code & Open Source Contributions",
      color: "oklch(55.6% 0 0)",
      status: "Building",
    },
    {
      name: "Twitter",
      icon: NewTwitterRectangleIcon,
      url: "https://x.com/ShaniDevelops",
      label: "Updates, Humour & Tech Insights",
      color: "oklch(73.7% 0.021 106.9)",
      status: "Updates",
    },
    {
      name: "LinkedIn",
      icon: Linkedin01Icon,
      url: "https://www.linkedin.com/in/shani-tiwari-aspirational/",
      label: "Professional Career & Networking",
      color: "#0A66C2",
      status: "Connect",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://Instagram.com/shanidevelops",
      label: "Personal Journey & Experience",
      color: "#E4405F",
      status: "Stories",
    },
    {
      name: "Coffee",
      icon: Coffee01Icon,
      url: "https://buymeacoffee.com/shani_tiwari?new=1",
      label: "Support My Development Work",
      color: "oklch(66.6% 0.179 58.318)",
      status: "Support",
    },
  ];

  return (
    <section
      id="socials"
      className="w-full bg-[#030303] py-12 relative overflow-hidden select-none"
    >
      {/* Enhanced Ambient Background Accents */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Modern Minimal Header */}
        <div className="mb-8 space-y-3 md:space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl mx-auto font-black text-white/90 tracking-tighter"
          >
            Stay <span className="text-neutral-500 italic">Connected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-neutral-500 max-w-100 mx-auto text-sm md:text-lg leading-5"
          >
            Follow my journey online and explore my latest projects & thoughts.
          </motion.p>


        </div>

          <motion.span 
              initial={{width:"0%"}}
              whileInView={{width:"100%"}}
              viewport={{ once: true }}
              transition={{duration:0.6, delay:0.3, ease: "easeOut"}}
              className="block mx-auto  h-[1.3px] bg-white/30 -mt-4 md:mt-0">
          </motion.span>

        {/* Floating Flex/Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 mt-8">
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
  );
}

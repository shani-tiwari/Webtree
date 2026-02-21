import { HugeiconsIcon } from "@hugeicons/react";
import {
  Coffee01Icon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterRectangleIcon,
} from "@hugeicons/core-free-icons";

export default function Socials() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/shani-tiwari",
      label: "Visit my GitHub ⭐",
    },
    {
      name: "X / Twitter",
      icon: NewTwitterRectangleIcon,
      url: "https://x.com/ShaniDevelops",
      label: "Follow on X 🚀",
    },
    {
      name: "LinkedIn",
      icon: Linkedin01Icon,
      url: "https://www.linkedin.com/in/shani-tiwari-aspirational/",
      label: "Connect on LinkedIn ⛓️‍💥",
    },
    {
      name: "Gmail",
      icon: Mail01Icon,
      url: "mailto:shanitiwarifl@gmail.com",
      label: "Send me an email 💌",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://Instagram.com/shanidevelops",
      label: "Follow on Instagram✨",
    },
    {
      name: "Coffee",
      icon: Coffee01Icon,
      url: "https://buymeacoffee.com/shani_tiwari?new=1",
      label: "🍵 coffee ❔",
    },
  ];

  return (
    <section
      id="socials"
      className="w-full bg-black/80 relative selection:bg-amber-600/30 selection:text-white"
    >
      <div className="max-w-[1300px] mx-auto px-1 md:px-14 py-8 space-y-6">
        {/* Heading Section */}
        <div className="py-2">
          <p className="text-neutral-200 text-2xl font-semibold tracking-wide">
            Socials
          </p>
          <p className="h-[0.2px] w-full bg-white/30 rounded-full mt-4"></p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-1 min-w-[150px] px-4 py-2 md:h-12 rounded-lg bg-slate-950/40 flex shadow-sm items-center justify-center gap-3 text-gray-200 hover:-translate-y-1 border-2 border-white/20 transition-all duration-300"
              aria-label={social.label}
            >
              <span className="text-xl font-medium">{social.name}</span>
              <HugeiconsIcon icon={social.icon} size={24} className="mt-1" />
              <span className="z-999 absolute -bottom-10 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-800 border border-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

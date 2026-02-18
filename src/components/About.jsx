import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartLineData02Icon,
  Coffee01Icon,
  DribbbleIcon,
  FavouriteIcon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterRectangleIcon,
  LogoutCircle01Icon
} from "@hugeicons/core-free-icons";

export default function About() {
  const currentYear = new Date().getFullYear();
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
    // {
    //   name: "Dribbble",
    //   icon: Dribbble,
    //   url: "https://dribbble.com/shani-tiwari",
    //   label: "My Dribbble portfolio🎨",
    // },
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
    <footer id="about" className="w-full bg-black/80 mt-10 relative">

      <div className="px-6 md:px-0 max-w-3xl md:ml-34 py-4">
        <p className="text-neutral-200 text-2xl font-semibold tracking-wide">About</p>
        <p className="h-[0.2px] w-[98%] bg-neutral-800 rounded-full mt-4"></p>
      </div>


      {/* Upper Section */}
      <div
        className="max-w-7xl w-full mx-auto px-6 pt-8 pb-12 flex flex-col flex-wrap md:flex-row gap-10 
      lg:gap-0 lg:justify-between selection:bg-amber-600/30 selection:text-white"
      >
        {/* Brand Section */}

        {/* webtree */}
        <div className="lg:col-span-2 space-y-6">
          <a
            href="https://webtree-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
            aria-label="Visit Webtree (opens in new tab)"
          >
            <span
              className="w-10 h-10 rounded-xl bg-linear-to-b from-gray-700 to-gray-800 select-none  flex items-center justify-center text-white font-semibold text-xl group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              ४
            </span>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white via-gray-300 to-gray-500">
              Webtree
            </span>
          </a>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            One-stop for frontend magic—curated collections of websites and
            essential tools. <br />
            Whether you're hunting for Tailwind components, Framer prototypes,
            or color palettes, discover everything to supercharge your projects
            in seconds.
          </p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-8 w-8 md:w-10 md:h-10 rounded-lg bg-gray-950 flex items-center justify-center text-gray-200 hover:-translate-y-1 border-2 border-white/20 transition-all duration-300"
                aria-label={social.label}
              >
                <HugeiconsIcon icon={social.icon} size={22} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-800 border border-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>


        
        {/* upcoming */}
        <div className="lg:col-span-2 space-y-6">
          <a
            href="https://webtree-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
            aria-label="Visit Webtree (opens in new tab)"
          >
            <span
              className="w-10 h-10 rounded-xl select-none bg-linear-to-b from-gray-700 to-gray-800  flex items-center justify-center text-white font-semibold text-xl group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              <HugeiconsIcon icon={ChartLineData02Icon} size={16} />
            </span>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white via-gray-300 to-gray-500">
              Upcoming
            </span>
          </a>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            → Backend Section <br />
            → Video Recommandations <br />
            → New Categories for frontend <br />
            → Repository's - open source & projects <br />
            {/* - Personal Collection <br /> */}
          </p>
        </div>

        <span className="md:w-px md:h-[250px] h-px w-full bg-neutral-800 rounded-full "></span>

        {/* bebd */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4  cursor-default justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl select-none bg-linear-to-b from-gray-700 to-gray-800  flex items-center justify-center text-white font-semibold text-xl group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                ↁ
              </div>
              <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-zinc-300 via-zinc-400 to-zinc-500">
                BeBD
              </span>
              <a
                href="https://bebd.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-200">
                  <HugeiconsIcon icon={LogoutCircle01Icon} size={18} className="-rotate-30" />
                </span>
              </a>
            </div>
            <a href="https://github.com/shani-tiwari/Bebd-be_better_developer" target="_blank"
            className="h-8 w-8 md:w-10 md:h-10 rounded-lg text-gray-200 border-2 border-gray-600 bg-gray-950 flex items-center justify-center  hover:-translate-y-1 duration-300 transition-all">
              <HugeiconsIcon icon={GithubIcon} size={22} />
            </a>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            <strong className="tracking-wide">Be Better Developer</strong> <br />
            Empowering developers to build better, faster, and more efficient
            modern web applications. Join our community and level up your
            development journey.
          </p>
        </div>

      </div>

      {/* Bottom Bar - Footer  */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/5 flex flex-row justify-between items-center gap-6 select-none">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          © {currentYear} BeBD. Built with{" "}
          <HugeiconsIcon
            icon={FavouriteIcon}
            size={18}
            className="text-red-500 animate-pulse"
            aria-hidden="true"
          />
          <span className="sr-only">love</span> for the community.
        </p>
      </div>

      {/* Background Decor */}
      {/* <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary-700/5 blur-[120px] rounded-full pointer-events-none" /> */}
    </footer>
  );
}

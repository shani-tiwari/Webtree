import { HugeiconsIcon } from "@hugeicons/react";
import {
  CancelCircleIcon,
  Coffee01Icon,
  DribbbleIcon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  Menu01Icon,
  NewTwitterRectangleIcon,
  FolderCheckIcon,
  SquareArrowLeft02Icon,
  FolderFavouriteIcon,
  Agreement03Icon,
} from "@hugeicons/core-free-icons";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useCollection } from "../context/CollectionContext";
import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/shani-tiwari/webtree",
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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { collection } = useCollection();

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        aria-label="Main Navigation"
        className={cn(
          "fixed top-1 left-1/2 -translate-x-1/2 w-[90%] md:max-w-[1000px] z-50 px-4 md:px-6 py-1 md:py-3",
          "flex justify-between items-center rounded-full border-2 border-neutral-400/50 shadow-xs shadow-amber-700/40 backdrop-blur-[6px]",
        )}
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className={cn("flex items-center")}
          aria-label="Logo"
        >
          <Link
            className={cn(
              "text-white/40 flex text-lg md:text-2xl font-mono hover:text-white/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer selection:bg-amber-600/30 selection:text-white",
            )}
            to="/"
            onClick={scrollTop}
          >
            <p className="text-amber-500">४</p>
            <p className={cn("w-2 h-1")}></p>
            Webtree
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className={cn("hidden md:flex gap-6 space-x-1 items-center")}>
          <a
            href="#about"
            className={cn("text-neutral-300 font-mono text-lg cursor-pointer scroll-smooth hover:text-neutral-200 hover:-translate-y-0.5 transition-all duration-300 selection:bg-amber-600/30 selection:text-white")}
          >
            About
          </a>
          <a
            href="#connect"
            className={cn("text-neutral-300 font-mono text-lg cursor-pointer scroll-smooth hover:text-neutral-200 hover:-translate-y-0.5 transition-all duration-300 selection:bg-amber-600/30 selection:text-white")}
          >
            Connect
          </a>
          <Link
            className={cn("group flex gap-2 items-center justify-center relative mr-2 ml-2 hover:-translate-y-0.5 active:scale-97 transition-all duration-300")}
            to={location.pathname === "/collection" ? "/" : "/collection"}
            rel="noreferrer"
            aria-label={`Visit`}
            onClick={scrollTop}
          >
            {location.pathname === "/" ? (
              <p className={cn("text-neutral-300 font-mono hover:text-neutral-200  text-lg hidden md:block selection:bg-amber-600/30 selection:text-white")}>
                Collection
              </p>
            ) : (
              <p className={cn("text-amber-600 font-mono text-lg hidden md:block selection:bg-amber-600/30 selection:text-white")}>
                Home
              </p>
            )}
            {location.pathname === "/collection" ? (
              <HugeiconsIcon
                icon={SquareArrowLeft02Icon}
                size={20}
                style={{ color: "oklch(66.6% 0.179 58.318)" }}
              />
            ) : (
              <div>
                <HugeiconsIcon
                  icon={FolderFavouriteIcon}
                  size={20}
                  style={{ color: "oklch(0.871 0.006 286.286)" }}
                />
                <sup
                  className={cn("absolute -right-2 top-1 font-mono text-zinc-300 selection:bg-zinc-600/30 selection:text-white ")}
                >
                  {collection.length}
                </sup>
              </div>
            )}
            <span
              className={cn(
                "absolute top-full font-mono right-0 mt-3 px-3 py-1.5 tracking-widest bg-zinc-900/90 text-zinc-100/90 text-[10px] uppercase rounded-lg backdrop-blur-md",
                "opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out pointer-events-none border border-white/20 shadow-xl whitespace-nowrap z-50",
              )}
            >
              {location.pathname === "/collection"
                ? "Back to Home 🏡"
                : "Personal Collection 🎁"}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className={cn("md:hidden flex items-center justify-center gap-4")}>
          <Link
            className={cn("relative mr-2 ml-2 active:scale-95")}
            to={location.pathname === "/collection" ? "/" : "/collection"}
            rel="noreferrer"
            aria-label={`Visit`}
          >
            {location.pathname === "/collection" ? (
              <HugeiconsIcon
                icon={SquareArrowLeft02Icon}
                size={20}
                style={{ color: "oklch(0.871 0.006 286.286)" }}
              />
            ) : (
              <HugeiconsIcon
                icon={FolderCheckIcon}
                size={20}
                style={{ color: "oklch(0.871 0.006 286.286)" }}
              />
            )}

            <sup
              className={cn("absolute -right-2 top-1 text-zinc-300 selection:bg-amber-600/30 selection:text-white")}
            >
              {location.pathname === "/" && collection.length}
            </sup>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="md:hidden text-gray-400 dark:text-white focus:outline-none hover:scale-106 transition-all duration-400"
          >
            <HugeiconsIcon icon={Menu01Icon} size={19} />
          </button>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "fixed inset-0 z-60 w-screen h-screen bg-black/95 backdrop-blur-md md:hidden",
              "flex flex-col items-center justify-center p-8 text-shadow-2xs",
            )}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute top-3 right-9 text-white/80 hover:text-white active:scale-90 transition-all duration-300"
            >
              <HugeiconsIcon icon={CancelCircleIcon} size={30} />
            </button>

            {/* Menu Content */}
            <div className="flex flex-col items-center gap-8 w-full max-w-xs">
              {/* About Link */}
              <a
                href="#about"
                className={cn(
                  "text-zinc-300 text-2xl font-medium tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-6",
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>About</span>
                <HugeiconsIcon
                  className="text-white/70 animate-pulse"
                  icon={Agreement03Icon}
                  size={22}
                />
              </a>

              <span className="h-[0.5px] w-3/4 bg-white/15 rounded-full"></span>

              {/* Socials Section */}
              <div className="flex flex-col items-center gap-6 w-full">
                <p
                  className={cn(
                    "text-zinc-400 text-sm tracking-[0.2em] uppercase",
                  )}
                >
                  Socials
                </p>
                <div className="flex gap-x-14 gap-y-8 flex-wrap justify-center">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      className={cn(
                        "flex flex-col flex-wrap items-center justify-center gap-1.5 text-white/80 transition-all duration-300 active:scale-90 hover:text-white",
                      )}
                      onClick={() => setIsOpen(false)}
                      aria-label={`Visit ${item.label} mobile`}
                    >
                      <HugeiconsIcon icon={item.icon} size={30} />
                      <span className="text-[10px] text-zinc-400 tracking-widest">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <span className="h-[0.5px] w-3/4 bg-white/15 rounded-full"></span>

              {/* Other Products */}
              <div className="flex flex-col items-center gap-4 w-full">
                <p
                  className={cn(
                    "text-zinc-400 text-sm tracking-[0.2em] uppercase",
                  )}
                >
                  Other Products
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href="https://bebd.vercel.app"
                    target="_blank"
                    className={cn(
                      "text-zinc-300 text-2xl font-medium transition-all duration-300 active:scale-95",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    ↁ BeBD
                  </a>
                  <a
                    href="https://github.com/shani-tiwari/BeBD-be_better_developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 active:scale-90"
                  >
                    <span className="text-white/70 transition-colors duration-300 hover:text-white animate-pulse">
                      <HugeiconsIcon icon={GithubIcon} size={24} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import { HugeiconsIcon } from "@hugeicons/react";
import {
  CancelCircleIcon,
  Coffee01Icon,
  DribbbleIcon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterRectangleIcon,
  FolderCheckIcon,
  SquareArrowLeft02Icon,
  FolderFavouriteIcon,
  Agreement03Icon,
  Menu02Icon,
  Home11Icon,
} from "@hugeicons/core-free-icons";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, easeIn } from "motion/react";
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

  const active =
    location.pathname === "/" ? null :
    location.pathname.startsWith("/about") ? "about" :
    location.pathname.startsWith("/connect") ? "connect" :
    location.pathname.startsWith("/reviews") ? "reviews" :
    location.pathname.startsWith("/collection") ? "collection" :
    null;

    const AllSocialLinks = {
      hidden: { 
        opacity: 1
       },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.08,
          staggerChildren: 0.08,
        },
      },
    };
    const socialLink = {
      hidden: { x: 10, y: -10, 
        opacity: 1
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      },
    };

    const [showLength, setShowLength] = useState(true);

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        aria-label="Main Navigation"
        className={cn(
          "fixed top-1 left-1/2 -translate-x-1/2 w-[90%] md:max-w-[1000px] z-50 px-4 md:px-6 py-1 md:py-3",
          "flex justify-between items-center rounded-full border-2 border-neutral-400/50 shadow-xs shadow-amber-700-op40 backdrop-blur-[6px]",
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
              "text-white/40 flex text-lg md:text-2xl font-mono hover:text-white/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer selection:bg-amber-600-op30 selection:text-white",
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
        <div className={cn("hidden md:flex gap-5 space-x-1 items-center")}>
          <Link
            to="/about"
            className={cn("text-neutral-400 font-mono text-lg cursor-pointer scroll-smooth hover:text-neutral-200 hover:-translate-y-0.5 transition-all duration-300 selection:bg-amber-600-op30 selection:text-white",
              active === "about" && "text-amber-500 hover:text-amber-600-op90 underline underline-offset-8"
            )}
          >
            About
          </Link>
          <Link
            to="/connect"
            className={cn("text-neutral-400 font-mono text-lg cursor-pointer scroll-smooth hover:text-neutral-200 hover:-translate-y-0.5 transition-all duration-300 selection:bg-amber-600-op30 selection:text-white",
              active === "connect" && "text-amber-500 underline underline-offset-8 hover:text-amber-600-op90"
            )}
          >
            Connect
          </Link>
          <Link
            to="/reviews"
            className={cn("text-neutral-400 font-mono text-lg cursor-pointer scroll-smooth hover:text-neutral-200 hover:-translate-y-0.5 transition-all duration-300 selection:bg-amber-600-op30 selection:text-white",
              active === "reviews" && "text-amber-500 underline underline-offset-8 hover:text-amber-600-op90"
            )}
          >
            Reviews
          </Link>
          <Link
            className={cn("group flex gap-1 items-center justify-center relative mr-2 hover:-translate-y-0.5 active:scale-97 transition-all duration-300")}
            to={location.pathname === "/collection" ? "/" : "/collection"}
            rel="noreferrer"
            aria-label={`Visit`}
            onClick={scrollTop}
          >
            {location.pathname === "/collection" ? (
              <p 
                className={cn("text-amber-600 font-mono text-lg hidden md:block selection:bg-amber-600-op30 selection:text-white ",
                  active === "home" && "underline underline-offset-8 hover:text-amber-600-op90"
                )}>
                Home
              </p>
            ) : (
              <p className={cn("text-neutral-400 font-mono hover:text-neutral-200  text-lg hidden md:block selection:bg-amber-600-op30 selection:text-white")}>
                Vault
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
                  style={{ color: "oklch(66.6% 0.179 58.318)" }}
                />
                <sup
                  className={cn("absolute -right-2 top-1 font-mono text-amber-500 selection:bg-zinc-600/30 selection:text-white ")}
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
                onClick={() => setShowLength(!showLength)}
                icon={SquareArrowLeft02Icon}
                size={20}
                style={{ color: "oklch(0.871 0.006 286.286)" }}
              />
            ) : (
              <HugeiconsIcon
                onClick={() => setShowLength(!showLength)}
                icon={FolderCheckIcon}
                size={20}
                style={{ color: "oklch(0.871 0.006 286.286)" }}
              />
            )}

            <sup
              className={cn("absolute -right-2 top-1 text-zinc-300 selection:bg-amber-600-op30 selection:text-white")}
            >
              { showLength && collection.length}
            </sup>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="md:hidden text-gray-400 dark:text-white focus:outline-none hover:scale-106 transition-all duration-400"
          >
            <HugeiconsIcon icon={Menu02Icon} size={19} />
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
              "fixed inset-0 z-50 w-screen h-screen bg-black/95 backdrop-blur-md md:hidden",
              "flex flex-col items-center justify-center p-8 text-shadow-2xs",
            )}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute top-2 right-9 text-white/80 hover:text-white active:scale-90 transition-all duration-300"
            >
              <HugeiconsIcon icon={CancelCircleIcon} size={30} />
            </button>

            {/* home button */}
            { location.pathname !== '/' && 
              <Link to="/">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="go to home"
                  className="absolute top-2 left-9 text-white/60 hover:text-white active:scale-90 transition-all duration-300"
                >
                  <HugeiconsIcon icon={Home11Icon} size={30} />
                </button>
              </Link>
            }

            {/* Menu Content */}
            <motion.div 
              className="flex flex-col items-center gap-8 w-full max-w-xs "
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1,  x: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            >
              {/* About Link */}
              <motion.a
                initial={{ x: 10, y: -10}}
                animate={{ x: 0, y: 0}}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
                href="/about" 
                className={cn(
                  "text-3xl font-medium tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-6",
                )}
                onClick={() => {
                  setIsOpen(false);
                  scrollTop();
                }}
              >
                <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-500">About </span>
                <span>🕸️</span>
                {/* <HugeiconsIcon
                  className="text-white/70 animate-pulse mt-1"
                  icon={Agreement03Icon}
                  size={22}
                /> */}
              </motion.a>

              {/* divider */}
              <motion.span 
                initial={{ width: "0%"}}
                animate={{width: "78%" }}
                transition={{duration: 0.5, ease: "easeOut", delay: 0.3}}
                className="h-[0.1px] bg-zinc-600 rounded-full">
              </motion.span>

              {/* Socials Section */}
              <div className="flex flex-col items-center gap-6 w-full">
                <p
                  className={cn(
                    "text-zinc-500 text-sm tracking-[0.2em] uppercase flex gap-2",
                  )}
                >
                  Socials 
                  {/* <p className="animate-bounce mt-[2px]">🌐</p>  */}
                </p>
                <motion.div
                  variants={AllSocialLinks}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-x-14 gap-y-8 flex-wrap justify-center"
                >
                  {socialLinks.map((item) => (
                    <motion.a
                      variants={socialLink}
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex flex-col flex-wrap items-center justify-center gap-1.5 text-white/70 transition-all duration-300 active:scale-90 hover:text-white",
                      )}
                      onClick={() => setIsOpen(false)}
                      aria-label={`Visit ${item.label} mobile`}
                    >
                      <HugeiconsIcon icon={item.icon} size={30} />
                      <span className="text-[10px] text-zinc-500 tracking-widest animate-pulse">
                        {item.name}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* divider */}
              <motion.span 
                initial={{ width: "0%"}}
                animate={{width: "78%" }}
                transition={{duration: 0.5, ease: "easeInOut", delay: 0.3}}
                className="h-[0.1px] bg-zinc-600 rounded-full">
              </motion.span>


              {/* reviews Link */}
              <motion.a
                href="/reviews"
                initial={{ x: 10, y: -10}}
                animate={{ x: 0,  y: 0}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                  "text-3xl font-medium tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-6",
                )}
                onClick={() => {
                  setIsOpen(false);
                  scrollTop();
                }}
              >
                <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-500">
                  Review 
                </span>
                <span>💭</span>
                {/* <HugeiconsIcon
                  className="text-white/70 animate-pulse mt-1"
                  icon={MessagePreview02FreeIcons}
                  size={22}
                /> */}
              </motion.a>

              {/* Other Products */}
              {/* <div className="flex flex-col items-center gap-4 w-full">
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
              </div> */}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

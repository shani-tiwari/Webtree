import { HugeiconsIcon } from "@hugeicons/react";
import {
  CancelCircleIcon,
  SquareArrowLeft02Icon,
  FolderFavouriteIcon,
  Agreement03Icon,
  Menu02Icon,
  Home11Icon,
  SearchList02Icon,
  AllBookmarkIcon,
  InstagramIcon,
  NewTwitterRectangleIcon,
  GithubIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useCollection } from "../../context/CollectionContext";
import { Link, useLocation } from "react-router";
import { cn } from "../../utils/utils.js";
import "../../index.css";
import MagneticButton from "../ui/MagneticButton.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //     document.documentElement.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //     document.documentElement.style.overflow = "auto";
  //   };
  // }, [isOpen]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { collection } = useCollection();

  const active =
    location.pathname === "/"
      ? null
      : location.pathname.startsWith("/reviews")
        ? "reviews"
        : location.pathname.startsWith("/collection")
          ? "collection"
          : location.pathname.startsWith("/explore")
            ? "explore"
            : null;

  const [showLength, setShowLength] = useState(true);
  const mobile_navLinks = [
    { name: "Home", path: "/", icon: Home11Icon },
    { name: "Collection", path: "/collection", icon: FolderFavouriteIcon },
    { name: "Explore", path: "/explore/tools", icon: SearchList02Icon },
    { name: "Reviews", path: "/reviews", icon: Agreement03Icon },
    // { name: "About", path: "/about", icon: Tree02Icon },
    // { name: "Connect", path: "/connect", icon: Link02FreeIcons },
  ];
  
const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin01Icon,
    url: "https://www.linkedin.com/in/shani-tiwarii/",
    no: "first-icon",
    rotate: "45deg",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/shani-tiwari",
    no: "sec-icon",
    rotate: "-45deg",
  },
  {
    name: "Twitter",
    icon: NewTwitterRectangleIcon,
    url: "https://x.com/ShaniDevelops",
    no: "third-icon",
    rotate: "45deg",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://Instagram.com/shani.develops",
    no: "four-icon",
    rotate: "-45deg",
  },
];

  const isCollectionPage = location.pathname === "/collection";

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        aria-label="Main Navigation"
        className={cn(
          "fixed top-1.5 left-1/2 -translate-x-1/2 w-[90%] md:max-w-300 z-50 px-5 md:px-9 py-1 md:py-1.5",
          "flex justify-between items-center rounded-full border-2 border-neutral-400/50 ",
        )}
      >
        <div className="absolute inset-0 -z-8 rounded-full bg-black/10 backdrop-blur-[5px] pointer-events-none" />
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className={cn("flex items-center md:flex-1")}
          aria-label="Logo"
        >
          <Link
            className={cn(
              "text-white/40 z-10 flex items-center justify-center gap-1 font-mono hover:text-white/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer selection:bg-amber-600/30 selection:text-white",
            )}
            to="/"
            onClick={scrollTop}
          >
            <p className="text-amber-500 text-[22px] md:text-[26px]">४</p>
            <h1 className="text-[20px] md:text-[24px] text-neutral-300/70 hover:text-neutral-300 tracking-tighter">
              Webtree
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div
          className={cn(
            "hidden md:flex grow gap-4 items-center justify-center",
          )}
        >
          {[
            { label: "Explore", path: "/explore/tools" },
            { label: "Reviews", path: "/reviews" },
            { label: "Github", path: "https://github.com/shani-tiwari/webtree" },
          ].map((item) => {
            const isActive = active === item.label.toLowerCase();
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "navItem ",
                  isActive
                    ? "text-amber-500 wavy-underline-pulse"
                    : "text-neutral-300/80 hover:text-neutral-300",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side (Collection & Mobile Menu) */}
        <div className={cn("flex items-center justify-end md:flex-1")}>
          <Link
            className={cn(
              "group relative flex gap-1 items-center justify-center mr-2 hover:-translate-y-0.5 active:scale-97 transition-all duration-200",
            )}
            to={location.pathname === "/collection" ? "/" : "/collection"}
            rel="noreferrer"
            aria-label={`Visit`}
            onClick={scrollTop}
          >
            {location.pathname === "/collection" ? (
              <p className={cn(
                  "text-amber-600 font-mono text-xl hidden md:block selection:bg-amber-600/30 selection:text-white ",
                )}
              >
                Home
              </p>
            ) : (
              <p className={cn(
                  "text-neutral-300/80 font-mono mr-1 tracking-tighter transition-all duration-250 hover:text-neutral-300/",
                  "text-lg md:text-[20px] hidden md:block selection:bg-amber-600/30 selection:text-white",
                )}
              >
                Bookmarks
              </p>
            )}
            {isCollectionPage ? (
              <MagneticButton icon={SquareArrowLeft02Icon} size='20' className='hidden md:flex text-amber-600' />
            ) : (
              <div className="relative hidden md:flex">
                <MagneticButton icon={AllBookmarkIcon} size='20' className='text-amber-500' />
                {collection.length > 0 && (
                  <span className="absolute text-xs -right-1.5 -top-1.5 font-mono text-amber-500/80 selection:bg-zinc-600/30 selection:text-white">
                    {collection.length}
                  </span>
                )}
              </div>
            )}
            <span
              className={cn(
                "hidden md:flex absolute top-full font-mono right-0 mt-3 px-3 py-1.5 tracking-widest bg-zinc-900/90 font-semibold text-amber-600/90 text-[10px] uppercase rounded-lg backdrop-blur-md",
                "opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out pointer-events-none border border-white/30 shadow-xl whitespace-nowrap z-50",
              )}
            >
              {location.pathname === "/collection"
                ? "Back to Home"
                : "Personal Collection"}
            </span>
          </Link>

          {/* Mobile Menu Buttons  */}
          <div
            className={cn(
              "z-60 md:hidden flex items-center justify-center gap-5",
            )}
          >
            <Link
              className={cn("relative text-xl active:scale-95")}
              to={location.pathname === "/collection" ? "/" : "/collection"}
              rel="noreferrer"
              aria-label={`Visit`}
            >
              {location.pathname === "/collection" ? (
                <HugeiconsIcon
                  onClick={() => setShowLength(!showLength)}
                  icon={SquareArrowLeft02Icon}
                  size={22}
                  style={{ color: "oklch(55.5% 0.163 48.998)" }}
                />
              ) : (
                <HugeiconsIcon
                  onClick={() => setShowLength(!showLength)}
                  icon={AllBookmarkIcon}
                  size={22}
                  style={{ color: "#ffffffb3" }}
                />
              )}
              {!isCollectionPage && showLength && collection.length > 0 && (
                <sup
                  className={cn(
                    "absolute text-xs -right-2 -top-1 text-zinc-300 selection:bg-amber-600/30 selection:text-white",
                  )}
                >
                  {collection.length}
                </sup>
              )}
            </Link>

            {/* menu button & menu */}
            <div className="flex items-center justify-center relative ">
              {/* menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                className={cn(
                  "z-100 md:hidden flex items-center justify-center text-white/95 active:scale-90 transition-all duration-300",
                )}
              >
                {isOpen ? (
                  <HugeiconsIcon
                    icon={CancelCircleIcon}
                    size={26}
                    className="z-999"
                  />
                ) : (
                  <HugeiconsIcon icon={Menu02Icon} size={24} />
                )}
                {/* menu dropdown  */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id="mobile-menu"
                      className={cn(
                        "absolute z-10 right-0 top-0 w-fit bg-black/20 backdrop-blur-sm md:hidden rounded-[1.1rem] px-2",
                        "flex flex-col items-center justify-center text-shadow-2xs border-2 border-white/20 rounded-tl-[40px] ",
                      )}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        right: "-12px",
                        top: "-8px",
                        transformOrigin: "top right",
                        zIndex: 100,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        transformOrigin: "top right",
                        transition: { delay: 0.1, duration: 0.5 },
                      }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                    >
                      {/* Menu Content */}
                      <motion.div className=" w-full max-w-xs ">
                        <div className="flex flex-col  items-end gap-2 w-full px-4 pt-14 pb-6 ">
                          {mobile_navLinks.map((link, index) => (
                            <React.Fragment key={link.name}>
                              <motion.div
                                exit={{
                                  y: -15,
                                  opacity: 0.5,
                                  scale: 0.6,
                                  transition: { delay: 0 },
                                }}
                                className="w-full"
                              >
                                <Link
                                  to={link.path}
                                  className={cn(
                                    " text-lg w-full font-medium tracking-wide transition-all duration-300 active:scale-95 flex justify-between items-center gap-4",
                                    location.pathname === link.path &&
                                      "text-amber-500",
                                  )}
                                  onClick={() => {
                                    setIsOpen(false);
                                    scrollTop();
                                  }}
                                >
                                  <span
                                    className={cn(
                                      "bg-clip-text text-transparent bg-linear-to-b",
                                      location.pathname === link.path
                                        ? "from-amber-400 to-amber-600"
                                        : "from-white to-zinc-500",
                                    )}
                                  >
                                    {link.name}
                                  </span>
                                  <HugeiconsIcon
                                    className={cn(
                                      location.pathname === link.path
                                        ? "text-amber-500"
                                        : "text-white/70",
                                    )}
                                    icon={link.icon}
                                    size={21}
                                  />
                                </Link>
                                 
                              </motion.div>

                              {index < mobile_navLinks.length && (
                                <motion.span
                                  initial={{ width: "0%", opacity: 0 }}
                                  animate={{ width: "80%", opacity: 1 }}
                                  transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.2 + index * 0.1,
                                  }}
                                  className="h-px w-full mx-auto bg-linear-to-r from-transparent via-zinc-500/50 to-transparent block"
                                ></motion.span>
                              )}
                              
                            </React.Fragment>
                          ))}
                           {/* Social */}
                                <div className="w-full flex flex-col justify-center items-center">
                                  <h2 className="mb-4 pt-2 w-full text-start text-xs font-semibold uppercase text-neutral-500">
                                    Connect
                                  </h2>
                                  <div className="w-full flex justify-between gap-4">
                                    {socialLinks.map((social) => (
                                      <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        transition={{ duration: 0.25, type: "spring"}}
                                        whileTap={{ scale: 0.95 }}
                                        className={cn(
                                          "group relative w-fit flex items-center justify-center p-2 transition-colors duration-200",
                                          "outline-2 outline-offset-1 outline-white/20 rounded-xl bg-white/6",
                                        )}
                                      >
                                        <HugeiconsIcon icon={social.icon} size={20}/>
                                      </motion.a>
                                    ))}
                                  </div>
                                </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

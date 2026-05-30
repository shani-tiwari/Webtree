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
  Tree02Icon,
  Link02FreeIcons,
  SearchList02Icon,
} from "@hugeicons/core-free-icons";
import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, easeIn } from "motion/react";
import { useCollection } from "../../context/CollectionContext";
import { Link, useLocation } from "react-router";
import { cn } from "../../utils/utils.js";
import "../../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

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
      : location.pathname.startsWith("/about")
        ? "about"
        : location.pathname.startsWith("/connect")
          ? "connect"
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
    { name: "About", path: "/about", icon: Tree02Icon },
    { name: "Connect", path: "/connect", icon: Link02FreeIcons },
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
          "fixed top-1 left-1/2 -translate-x-1/2 w-[90%] md:max-w-[1050px] z-50 px-5 md:px-9 py-1 md:py-2",
          "flex justify-between items-center rounded-full border-2 border-neutral-400/50 shadow-xs shadow-amber-700-op40 backdrop-blur-[6px]",
        )}
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className={cn("flex items-center md:flex-1")}
          aria-label="Logo"
        >
          <Link
            className={cn(
              "text-white/40 flex items-center justify-center font-mono hover:text-white/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer selection:bg-amber-600-op30 selection:text-white",
            )}
            to="/"
            onClick={scrollTop}
          >
            <p className="text-amber-500 mr-2 text-[22px] md:text-[26px]">४</p>
            <h1 className=" xl:mt-0 mb-px text-[18px] md:text-[21px] tracking-tighter">
              Webtree
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div
          className={cn(
            "hidden md:flex grow gap-3 items-center justify-center",
          )}
        >
          {[
            { label: "Explore", path: "/explore/tools" },
            { label: "About", path: "/about" },
            { label: "Connect", path: "/connect" },
            { label: "Reviews", path: "/reviews" },
          ].map((item) => {
            const isActive = active === item.label.toLowerCase();
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "navItem lg:mx-0.5",
                  isActive
                    ? "text-amber-500 wavy-underline-pulse"
                    : "text-neutral-400 hover:text-neutral-300",
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
              <p
                className={cn(
                  "text-amber-600 font-mono text-xl hidden md:block selection:bg-amber-600-op30 selection:text-white ",
                  active !== "home" &&
                    "underline underline-offset-10 hover:text-amber-600-op90",
                )}
              >
                Home
              </p>
            ) : (
              <p
                className={cn(
                  "text-neutral-400 font-mono mr-1 tracking-tighter transition-all duration-250 hover:text-neutral-300/90",
                  "text-lg md:text-[20.5px] hidden md:block selection:bg-amber-600-op30 selection:text-white",
                )}
              >
                Collection
              </p>
            )}
            {isCollectionPage ? (
              <HugeiconsIcon
                icon={SquareArrowLeft02Icon}
                size={20}
                style={{ color: "oklch(66.6% 0.179 58.318)" }}
                className="hidden md:flex mt-1"
              />
            ) : (
              <div className="relative hidden md:flex">
                <HugeiconsIcon
                  icon={FolderFavouriteIcon}
                  size={19}
                  className="text-amber-500"
                />
                {collection.length > 0 && (
                  <span className="absolute text-xs -right-[6px] top-[-6px] font-mono text-amber-500/80 selection:bg-zinc-600/30 selection:text-white">
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
            className={cn("z-60 md:hidden flex items-center justify-center gap-4")}
          >
            <Link
              className={cn("relative text-xl mr-2 ml-2 active:scale-95")}
              to={location.pathname === "/collection" ? "/" : "/collection"}
              rel="noreferrer"
              aria-label={`Visit`}
            >
              {location.pathname === "/collection" ? (
                <HugeiconsIcon
                  onClick={() => setShowLength(!showLength)}
                  icon={SquareArrowLeft02Icon}
                  size={20}
                  style={{ color: "oklch(55.5% 0.163 48.998)" }}
                />
              ) : (
                <HugeiconsIcon
                  onClick={() => setShowLength(!showLength)}
                  icon={FolderCheckIcon}
                  size={19}
                  style={{ color: "oklch(0.871 0.006 286.286)" }}
                />
              )}
              {!isCollectionPage && showLength && collection.length > 0 && (
                <sup
                  className={cn(
                    "absolute text-xs -right-2 -top-1 text-zinc-300 selection:bg-amber-600-op30 selection:text-white",
                  )}
                >
                  {collection.length}
                </sup>
              )}
            </Link>

            {/* menu button & menu */}
            <div className="z-100 flex items-center justify-center ">
              {/* menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                className="md:hidden text-gray-300 active:scale-90 transition-all duration-200"
              >
                <HugeiconsIcon icon={ Menu02Icon} size={19} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className={cn(
              "absolute right-10 top-4  z-50  bg-black/50 backdrop-blur-md md:hidden rounded-[1.1rem]",
              "flex flex-col items-center justify-center p-2 text-shadow-2xs border-2 border-white/15 rounded-tl-[40px] ",
              `${isOpen && 'right-7 top-1.5'}`
            )}
            initial={{ opacity: 0, width: 0, height: 0, right: '10', top: '4' }}
            animate={{ opacity: 1, width: "55%", height: "57vh", right: '7', top: '2' }}
            exit={{ opacity: 0, width: 0, height: 0, transition:{delay: 0.1, duration: 0.5} }} 
            transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="fixed top-1.5 right-3 text-white/50 active:scale-90 transition-all duration-200"
            >
              <HugeiconsIcon icon={CancelCircleIcon} size={26} />
            </button>

            {/* Menu Content */}
            <motion.div className=" w-full max-w-xs ">
              <div className="flex flex-col  items-end gap-2 w-full px-4 pt-14 pb-6 "> 
                {mobile_navLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <motion.div 
                      initial={{ y: -15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0, y:  5, transition: {delay: 0} }}
                      transition={{
                        duration: 0.2,
                        type: 'spring',
                        stiffness: 190,
                        damping: 15,
                        delay: (0.15 * index) + 0.15,
                      }}
                    >
                      <Link
                        to={link.path}
                        className={cn(
                          "text-lg font-medium tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-4",
                          location.pathname === link.path && "text-amber-500"
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
                          className={cn(location.pathname === link.path ? "text-amber-500" : "text-white/70" )}
                          icon={link.icon}
                          size={23}
                        />
                      </Link>
                    </motion.div>

                    {index < mobile_navLinks.length - 1 && (
                      <motion.span
                        initial={{ width: "0%", opacity: 0 }}
                        animate={{ width: "80%", opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.2 + index * 0.1,
                        }}
                        className="h-px bg-linear-to-r from-transparent via-zinc-500/50 to-transparent block"
                      ></motion.span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

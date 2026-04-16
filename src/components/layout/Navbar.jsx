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
    location.pathname === "/" ? null :
    location.pathname.startsWith("/about-webtree") ? "about" :
    location.pathname.startsWith("/connect") ? "connect" :
    location.pathname.startsWith("/webtree-reviews") ? "reviews" :
    location.pathname.startsWith("/collection") ? "collection" :
    location.pathname.startsWith("/explore") ? "explore" :
    null;

  const [showLength, setShowLength] = useState(true);
  const navLinks = [
    { name: "Home",       path: "/",                 icon: Home11Icon },
    { name: "About",      path: "/about-webtree",    icon: Tree02Icon },
    { name: "Explore",    path: "/explore/tools",    icon: SearchList02Icon },
    { name: "Connect",    path: "/connect",          icon: Link02FreeIcons },
    { name: "Collection", path: "/collection",       icon: FolderFavouriteIcon },
    { name: "Reviews",    path: "/webtree-reviews",  icon: Agreement03Icon },
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
          "fixed top-1 left-1/2 -translate-x-1/2 w-[90%] md:max-w-[1050px] z-50 px-4 md:px-8 py-1 md:py-3",
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
            className={cn("text-white/40 flex items-center text-lg md:text-2xl font-mono hover:text-white/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer selection:bg-amber-600-op30 selection:text-white")}
            to="/"
            onClick={scrollTop}
          >
            <p className="text-amber-500 mr-2 md:text-[26px]">
              ४
            </p>
            <h1 className=" xl:mt-0 xl:mb-[1.5px]">
              Webtree
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className={cn("hidden md:flex grow gap-5 items-center justify-center")}>
          {
            [
              { label: 'About'  , path: '/about-webtree'   },
              { label: 'Connect', path: '/connect'         },
              { label: 'Reviews', path: '/webtree-reviews' },
              { label: 'Explore', path: '/explore/tools'   },
            ].map((item) => {
              const isActive = active === item.label.toLowerCase();
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={cn("navItem mx-0.5",
                    isActive ? "text-amber-500 wavy-underline-pulse" : "text-neutral-400 hover:text-neutral-300")}
                >
                  {item.label}
                </Link>
              );
            })
          }
        </div>

        {/* Right Side (Collection & Mobile Menu) */}
        <div className={cn("flex items-center justify-end md:flex-1")}>
          <Link
            className={cn("group relative flex gap-1 items-center justify-center mr-2 hover:-translate-y-0.5 active:scale-97 transition-all duration-200")}
            to={location.pathname === "/collection" ? "/" : "/collection"}
            rel="noreferrer"
            aria-label={`Visit`}
            onClick={scrollTop}
          >
            {location.pathname === "/collection" ? (
              <p 
                className={cn("text-amber-600 font-mono text-xl hidden md:block selection:bg-amber-600-op30 selection:text-white ",
                  active !== "home" && "underline underline-offset-10 hover:text-amber-600-op90"
                )}>
                Home
              </p>
            ) : (
              <p className={cn("text-neutral-400 font-mono mr-1 tracking-tight hover:tracking-[0.001em] transition-all duration-250 hover:text-neutral-300/90",
                "text-lg md:text-[21px] hidden md:block selection:bg-amber-600-op30 selection:text-white")}>
                Collection
              </p>
            )}
            {isCollectionPage ? (
              <HugeiconsIcon icon={SquareArrowLeft02Icon} size={20} style={{ color: "oklch(66.6% 0.179 58.318)" }} className="hidden md:flex"/>
            ) : (
              <div className="relative hidden md:flex">
                <HugeiconsIcon icon={FolderFavouriteIcon} size={20} className="text-amber-500"/>
                {collection.length > 0 && (
                  <span className="absolute -right-[6px] top-[5px] font-mono text-amber-500 selection:bg-zinc-600/30 selection:text-white">
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

          {/* Mobile Menu Button  */}
          <div className={cn("md:hidden flex items-center justify-center gap-4")}>
            <Link
              className={cn("relative text-xl mr-2 ml-2 active:scale-95")}
              to={location.pathname === "/collection" ? "/" : "/collection"}
              rel="noreferrer"
              aria-label={`Visit`}
            >
              {
                location.pathname === "/collection" ? (
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
                    size={20}
                    style={{ color: "oklch(0.871 0.006 286.286)" }}
                  />
                )}
                {!isCollectionPage && showLength && collection.length > 0 && (
                  <sup
                    className={cn("absolute -right-2 top-1 text-zinc-300 selection:bg-amber-600-op30 selection:text-white")}
                  >
                    {collection.length}
                  </sup>
                )
              }
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="md:hidden text-gray-300 dark:text-white focus:outline-none hover:scale-106 transition-all duration-400"
            >
              <HugeiconsIcon icon={Menu02Icon} size={19} />
            </button>
          </div>
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
              "fixed inset-0 z-50 w-screen h-screen bg-black/90 backdrop-blur-sm md:hidden",
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

            {/* Menu Content */}
            <motion.div 
              className="flex flex-col items-center gap-8 w-full max-w-xs "
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1,  x: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="flex flex-col items-center gap-6 w-full">
                {
                  navLinks.map((link, index) => (
                    <React.Fragment key={link.name}>
                      <motion.div
                        initial={{ x: 10, y: -10, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          ease: "easeInOut", 
                          delay: 0.11 * (index + 1) 
                        }}
                      >
                        <Link
                          to={link.path}
                          className={cn("text-3xl font-medium tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-6",
                            location.pathname === link.path ? "text-amber-500" : ""
                          )}
                          onClick={() => { setIsOpen(false); scrollTop(); }}
                        >
                          <span className={cn("bg-clip-text text-transparent bg-linear-to-b",
                            location.pathname === link.path 
                              ? "from-amber-400 to-amber-600" 
                              : "from-white to-zinc-500"
                          )}>
                            {link.name}
                          </span>
                          <HugeiconsIcon
                            className={cn("mt-1 animate-pulse",
                              location.pathname === link.path ? "text-amber-500" : "text-white/70"
                            )}
                            icon={link.icon}
                            size={28}
                          />
                        </Link>
                      </motion.div>
                      
                      {/* divider */}
                      {index < navLinks.length - 1 && (
                        <motion.span 
                          initial={{ width: "0%", opacity: 0 }}
                          animate={{ width: "80%", opacity: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                          className="h-px bg-linear-to-r from-transparent via-zinc-500/50 to-transparent block">
                        </motion.span>
                      )}
                    </React.Fragment>
                  ))
                }
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

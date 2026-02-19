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
  LogoutCircle01Icon,
} from "@hugeicons/core-free-icons";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useCollection } from "../context/CollectionContext";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  const { collection } = useCollection();

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      aria-label="Main Navigation"
      className="fixed top-1 left-1/2 -translate-x-1/2 w-[90%] md:max-w-[1000px] z-50 px-4 md:px-6 py-1 md:py-3 
        flex justify-between items-center rounded-2xl font-beba
        border border-zinc-100/60 shadow-xs shadow-amber-700/40 backdrop-blur-sm "
    >
      {/* Logo */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="flex items-center"
        aria-label="Logo"
      >
        <p className="text-white text-lg md:text-2xl selection:bg-amber-600/30 selection:text-white">
          ४ Webtree
        </p>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 space-x-1 items-center  ">
        <a
          href="#about"
          className="text-neutral-400 text-lg cursor-pointer scroll-smooth hover:text-neutral-300 hover:scale-101 transition-all duration-300 selection:bg-amber-600/30 selection:text-white"
        >
          About
        </a>
        <Link
          className="group flex gap-2 items-center justify-center relative mr-2 ml-2 active:scale-97 transition-all duration-200"
          to={location.pathname === "/collection" ? "/" : "/collection"}
          rel="noreferrer"
          aria-label={`Visit`}
        >
          <p className="text-neutral-400 hover:text-neutral-300 text-lg hidden md:block selection:bg-amber-600/30 selection:text-white ">
            Collection
          </p>
          {location.pathname === "/collection" ? (
            <HugeiconsIcon
              icon={SquareArrowLeft02Icon}
              size={20}
              style={{ color: "oklch(0.871 0.006 286.286)" }}
            />
          ) : (
            <HugeiconsIcon
              icon={FolderFavouriteIcon}
              size={20}
              style={{ color: "oklch(0.871 0.006 286.286)" }}
            />
          )}
          <sup className="absolute -right-2 top-1 text-zinc-300 selection:bg-zinc-600/30 selection:text-white">
            {collection.length}
          </sup>
          <span
            className="absolute top-full right-0 mt-2 px-2 py-1 bg-black/80 text-zinc-100/90 text-[14px] rounded-md opacity-0 
          group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-neutral-500 shadow-lg whitespace-nowrap z-50"
          >
            {location.pathname === "/collection"
              ? "Home🏡"
              : "Your Collection 🎁"}
          </span>
        </Link>
        <Link
          to={"https://github.com/shani-tiwari/webtree"}
          target="_blank"
          className="text-neutral-400 hover:text-neutral-300"
        >
          <HugeiconsIcon icon={GithubIcon} size={22} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className=" md:hidden flex items-center justify-center gap-4 ">
        <Link
          className="relative mr-2 ml-2 active:scale-95"
          to={location.pathname === "/collection" ? "/" : "/collection"}
          rel="noreferrer"
          aria-label={`Visit`}
        >
          <HugeiconsIcon
            icon={FolderCheckIcon}
            size={20}
            style={{ color: "oklch(0.871 0.006 286.286)" }}
          />

          <sup className="absolute -right-2 top-1 text-zinc-300 selection:bg-amber-600/30 selection:text-white">
            {collection.length}
          </sup>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="md:hidden text-gray-400 dark:text-white focus:outline-none hover:scale-106 transition-all duration-400"
        >
          {isOpen ? (
            <HugeiconsIcon icon={CancelCircleIcon} size={19} />
          ) : (
            <HugeiconsIcon icon={Menu01Icon} size={19} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="z-40 absolute top-10 right-0 w-fit bg-black/95 border border-zinc-100/40 flex flex-col p-4 rounded-3xl gap-2"
          >
            {/* About Link */}
            <div className="flex flex-col gap-2 ml-1">
              <a
                href="#about"
                className="text-zinc-300 text-xl "
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </div>

            <span className="h-[0.3px] w-full bg-white/20 rounded-full my-3"></span>

            {/* Socials Section */}
            <div className="flex flex-col gap-2 ml-1">
              <p className="text-zinc-400 text-xs tracking-widest uppercase">
                Socials
              </p>
              <div className="flex gap-4 mt-1 justify-between">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center active:scale-95 text-white/80 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Visit ${item.label} mobile`}
                  >
                    <HugeiconsIcon icon={item.icon} size={22} />
                  </motion.a>
                ))}
              </div>
            </div>

            <span className="h-[0.3px] w-full bg-white/20 rounded-full my-3"></span>

            {/* Other Products */}
            <div className=" ml-1">
              <p className="text-zinc-400 text-xs tracking-widest uppercase mb-2">
                Other Products
              </p>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://bebd.vercel.app"
                    target="_blank"
                    className="text-zinc-300 text-xl "
                    onClick={() => setIsOpen(false)}
                  >
                    ↁ BeBD
                  </a>
                  <a
                    href="https://bebd.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1"
                  >
                    <span className="text-gray-200">
                      <HugeiconsIcon
                        icon={LogoutCircle01Icon}
                        size={14}
                        className="-rotate-30"
                      />
                    </span>
                  </a>
                </div>
                <a
                  href="https://github.com/shani-tiwari/BeBD-be_better_developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1  "
                >
                  <span className="active:scale-95 text-white/80 transition-all duration-200">
                    <HugeiconsIcon icon={GithubIcon} size={20} />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

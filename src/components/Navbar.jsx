import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useCollection } from "../context/CollectionContext";
import {
  Github,
  Twitter,
  FolderHeart,
  Menu,
  CircleX,
  FolderOutput,
  Coffee,
  Instagram,
  Dribbble,
  Mail,
  Linkedin,
} from "lucide-react";
import { Link, useLocation } from "react-router";
// import { CollectionProvider } from "../context/CollectionContext";

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

  // const menuItems = [
  //   {
  //     id: "github",
  //     content: <Github size={22} />,
  //     link: "https://github.com/shani-tiwari/Webtree",
  //     title: "star me ⭐",
  //   },
  //   {
  //     id: "twitter",
  //     content: <Twitter size={22} />,
  //     link: "https://x.com/shanidevelops",
  //     title: "Let's connect 🔗",
  //   },
  //   // {
  //   //   id: "instagram",
  //   //   content: <Instagram size={22} />,
  //   //   link: "https://instagram.com/shanidevelops",
  //   //   title: "what's ur review ⁉️",
  //   // },

  //   // {
  //   //   id: "mail",
  //   //   content: <MailPlus size={22} />,
  //   //   link: "https://mail.google.com/mail/u/3/#inbox",
  //   //   title: "what's your review",
  //   // },

  //   // { id: "collection", content: <FolderHeart size={26} />, link: "#collection" },
  // ];
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/shani-tiwari",
      label: "Visit my GitHub ⭐",
    },
    {
      name: "X / Twitter",
      icon: Twitter,
      url: "https://x.com/ShaniDevelops",
      label: "Follow on X 🚀",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/shani-tiwari-aspirational/",
      label: "Connect on LinkedIn ⛓️‍💥",
    },
    {
      name: "Gmail",
      icon: Mail,
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
      icon: Instagram,
      url: "https://Instagram.com/shanidevelops",
      label: "Follow on Instagram✨",
    },
    {
      name: "Coffee",
      icon: Coffee,
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
        {/* <div className="bg-neutral-400/10 flex text-white/50 px-4 py-[6px] gap-6 mr-4 items-center rounded-lg border 
        border-zinc-400 ">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              aria-label={`Visit ${item.id}`}
              className="group relative active:scale-95 hover:text-white/80 hover:scale-105 transition-all duration-300"
            >
               {item.content}
              <span className="absolute text-zinc-200 top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-black/70 text-[14px] 
              rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border 
              border-zinc-500 shadow-lg whitespace-nowrap z-50">
                {item.title}
              </span>
            </a>
          ))}
        </div> */}
        <a
          href="#about"
          className="text-neutral-400 text-lg cursor-pointer scroll-smooth hover:text-white/60 hover:scale-101 transition-all duration-300"
        >
          About
        </a>
        <Link
          className="group flex gap-2 items-center justify-center relative mr-2 ml-2 active:scale-97 transition-all duration-200"
          to={location.pathname === "/collection" ? "/" : "/collection"}
          rel="noreferrer"
          aria-label={`Visit`}
        >
          <p className="text-neutral-400 text-lg hidden md:block ">
            Collection
          </p>
          {location.pathname === "/collection" ? (
            <FolderOutput
              style={{ color: "oklch(0.871 0.006 286.286)" }}
              size={22}
            />
          ) : (
            <FolderHeart
              style={{ color: "oklch(0.871 0.006 286.286)" }}
              size={22}
            />
          )}
          <sup className="absolute -right-3 top-1 text-zinc-300 selection:bg-zinc-600/30 selection:text-white">
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
      </div>

      {/* Mobile Menu Button */}
      <div className=" md:hidden flex items-center justify-center gap-4 ">
        <Link
          className="relative mr-2 ml-2 active:scale-95"
          to={location.pathname === "/collection" ? "/" : "/collection"}
          rel="noreferrer"
          aria-label={`Visit`}
        >
          <FolderHeart
            style={{ color: "oklch(0.871 0.006 286.286)" }}
            size={22}
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
          {isOpen ? <CircleX size={18} /> : <Menu size={18} />}
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-150 absolute top-[110%] right-0 w-64 bg-black/95 border border-zinc-500/30 md:hidden 
              flex flex-col p-4 shadow-2xl backdrop-blur-xl rounded-3xl gap-2"
          >
            {/* About Link */}
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-zinc-400 text-xl hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </div>

            <span className="h-[0.3px] w-full bg-white/20 rounded-full "></span>

            {/* Socials Section */}
            <div className="flex flex-col gap-2">
              <p className="text-zinc-400 text-xs tracking-widest uppercase">
                Socials
              </p>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-800/50 text-white/80 border 
                    border-zinc-700/50 hover:bg-zinc-700/50 transition-all"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Visit ${item.label} mobile`}
                  >
                    <item.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

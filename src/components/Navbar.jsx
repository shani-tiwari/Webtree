import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useCollection } from "../context/CollectionContext";
import {
  Coffee,
  Github,
  Twitter,
  Instagram,
  FolderHeart,
  Menu,
  CircleX,
  FolderOutput,
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

  const menuItems = [
    {
      id: "github",
      content: <Github size={22} />,
      link: "https://github.com/shani-tiwari",
    },
    {
      id: "twitter",
      content: <Twitter size={22} />,
      link: "https://x.com/shanidevelops",
    },
    {
      id: "instagram",
      content: <Instagram size={22} />,
      link: "https://instagram.com/shanidevelops",
    },
    {
      id: "resources",
      content: <Coffee size={22} />,
      link: "https://buymeacoffee.com/shani_tiwari?new=1",
    },

    // { id: "collection", content: <FolderHeart size={26} />, link: "#collection" },
  ];

  const { collection } = useCollection();

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      aria-label="Main Navigation"
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-50 px-8 py-1 md:py-3 
        flex justify-between items-center rounded-full font-beba
        border border-amber-400/30 shadow-xs shadow-amber-700/40 "
    >
      {/* Logo */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="flex items-center"
        aria-label="Logo"
      >
        <p className="text-white text-2xl md:text-3xl selection:bg-amber-600/30 selection:text-white">४</p>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-1 items-center  ">
        <div className="bg-amber-400/10 flex text-white/70 px-6 py-[6px] gap-8 mr-4 items-center justify-around rounded-full border border-amber-500/50 ">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              aria-label={`Visit ${item.id}`}
              className="active:scale-95 hover:text-white hover:scale-105 transition-all duration-300"
            >
              {item.content}
            </a>
          ))}
        </div>
        <Link
          className="relative mr-2 ml-2 active:scale-95"
          to={location.pathname === "/collection" ? "/" : "/collection"}
          rel="noreferrer"
          aria-label={`Visit`}
        >
          {location.pathname === "/collection" ? (
            <FolderOutput
              style={{ color: "oklch(76.9% 0.188 70.08)" }}
              size={26}
            />
          ) : (
            <FolderHeart
              style={{ color: "oklch(76.9% 0.188 70.08)" }}
              size={26}
            />
          )}
          <sup className="absolute -right-2 top-1 text-amber-500 selection:bg-amber-600/30 selection:text-white">
            {collection.length}
          </sup>
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
            style={{ color: "oklch(76.9% 0.188 70.08)" }}
            size={22}
          />
          <sup className="absolute -right-2 top-1 text-amber-500 selection:bg-amber-600/30 selection:text-white">
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
          {isOpen ? <CircleX size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{
              opacity: 0,
              y: -10,
              rotateY: 45,
            }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            exit={{ opacity: 0, y: -10, rotateY: 45 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="z-150 absolute top-full right-0 w-full bg-black/90 border-2 border-gray-200/30 md:hidden 
              flex items-center justify-evenly  py-3 shadow-inner shadow-white/10 overflow-hidden mt-2 rounded-full"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{ scale: 1.1 }}
                className=" font-medium text-2xl text-white/80 active:scale-96 transition-all duration-300"
                onClick={() => setIsOpen(false)}
                aria-label={`Visit ${item.id} mobile`}
              >
                {item.content}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Github, Twitter } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    // { id: "resources", content: <Coffee size={26} />, link: "#resources" },
    {
      id: "github",
      content: <Github size={26} />,
      link: "https://github.com/shani-tiwari",
    },
    {
      id: "twitter",
      content: <Twitter size={26} />,
      link: "https://x.com/shanidevelops",
    },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      aria-label="Main Navigation"
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-50 px-8 py-1 md:py-3 
        flex justify-between items-center rounded-full font-beba
        border border-white/30 shadow-xs shadow-gray-500 "
    >
      {/* Logo */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="flex items-center"
        aria-label="Logo"
      >
        <p className="text-white text-2xl md:text-3xl">४</p>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-2 items-center ">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
            aria-label={`Visit ${item.id}`}
          >
            <Button
              name={
                <>
                  {item.content}
                  {item.link.startsWith("http") && (
                    <span className="sr-only"> (opens in new tab)</span>
                  )}
                </>
              }
              ariaLabel={`${item.id} link`}
            />
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        variants={itemVariants}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        className="md:hidden text-gray-400 dark:text-white focus:outline-none hover:scale-106 transition-all duration-400"
      >
        <svg
          className="h-6 w-6 md:h-8 md:w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{
              opacity: 0,
              y: -10,
              rotateY: 45,
              borderRadius: "14px 14px 3rem 3rem",
            }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            exit={{ opacity: 0, y: -10, rotateY: 45 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="z-150 absolute top-full right-0 w-fit bg-black/80  border border-gray-200/40 backdrop-blur-md md:hidden 
              flex flex-col items-center py-4 space-y-4 shadow-xl overflow-hidden mt-2"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{ scale: 1.1 }}
                className=" font-medium text-2xl px-6 flex items-center justify-center p-2 active:scale-96  transition-all duration-300"
                onClick={() => setIsOpen(false)}
                aria-label={`Visit ${item.id} mobile`}
              >
                <Button
                  name={
                    <>
                      {item.content}
                      {item.link.startsWith("http") && (
                        <span className="sr-only"> (opens in new tab)</span>
                      )}
                    </>
                  }
                  ariaLabel={`${item.id} mobile link`}
                />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Copy02Icon,
  SentIcon,
  ViewIcon,
  BookmarkAdd02Icon,
  BookmarkCheck02Icon,
  BookmarkOff02Icon,
} from "@hugeicons/core-free-icons";
import { useCollection } from "../../../context/CollectionContext";
import { useState, memo } from "react";
import { Link } from "react-router";
import { cn } from "../../../utils/utils.js";
import MagneticButton from "../../ui/MagneticButton.jsx";

// Memoized Card Component
const Card = memo(
  ({ id, title, link, desc, allowRemove, logo, category, isNew, ...props }) => {
    const { addToCollection, removeFromCollection, collection } =
      useCollection();

    const [added, setAdded] = useState(false);
    const [copied, setCopied] = useState(false);
    // const [showPreview, setShowPreview] = useState(false);

    const normalize = (str) =>
      str ? str.trim().split(" ").join("").toLowerCase() : "";

    // Check if item is already in collection to show correct state
    const isCollected = collection.some(
      (item) => normalize(item.name) === normalize(title),
    );

    const handleAddKey = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const item = {
        id,
        title,
        link,
        desc,
        logo,
        name: title,
        category,
        ...props,
      };
      addToCollection(item);

      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    };

    const handleRemoveKey = (e) => {
      e.preventDefault();
      e.stopPropagation();
      removeFromCollection(title);
    };

    const handleCopy = (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const handleShare = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (navigator.share) {
        try {
          await navigator.share({
            title: title + " - Webtree",
            text: "Check this Amazing resource from Webtree.",
            // Webtree: 'https://webtree.shaniweb.com',
            url: link,
          });
          return; // success - exit
        } catch (err) {
          console.error("Error sharing:", err);
        }
      } else {
        handleCopy(e);
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.97, filter: 'blur(2px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
        className={cn("w-full h-full block p-1")}
        aria-label={`View ${title} resource`}
      >
        <section
          className={cn(
            "relative h-full flex flex-col bg-linear-to-tr from-black/10 via-black/5 to-white/8 backdrop-blur-md border-2 border-zinc-700/80 rounded-[30px] p-5",
            "transition-colors ease-[cubic-bezier(0.79,0.47,0.24,0.98)] duration-250 group cursor-pointer text-white/70 select-none hover:border-zinc-600/90 shadow-md shadow-black hover:shadow-xl",
          )}
        >
          {/* Action Icons Section */}
          <div
            className={cn("absolute top-9 right-6.75 flex items-center z-40")}
          >
            {!allowRemove && (
              <motion.span
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.79, 0.47, 0.24, 0.98] }}
                onClick={handleAddKey}
                className={cn(
                  "group/icon add-shape absolute -top-4 right-3.5 flex items-center justify-center z-30",
                  "p-1.25 bg-white/2 border-2 border-white/15 cursor-pointer outline-2 outline-offset-1 outline-white/30",
                  isCollected
                    ? "text-emerald-600 hover:text-emerald-500 "
                    : "text-amber-300/80 group-hover:text-amber-400/80",
                )}
              >
                {isCollected ? (
                  <MagneticButton
                    className="active:scale-95"
                    icon={BookmarkCheck02Icon}
                    size={20}
                  />
                ) : (
                  <MagneticButton
                    className="active:scale-95"
                    icon={BookmarkAdd02Icon}
                    size={20}
                  />
                )}

                {/* <span
                  className={cn(
                    "hidden md:flex absolute right-full -top-3 mr-2 w-max px-2 py-1 text-[10px] uppercase bg-zinc-900 border border-white/10 rounded-md shadow-xs",
                    "tracking-wide font-semibold invisible group-hover/icon:visible pointer-events-none z-99 ",
                  )}
                >
                  {added ? "Added" : isCollected ? "Added" : "+ Add to collection"}
                </span> */}
              </motion.span>
            )}
            {allowRemove && (
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.1 }}
                onClick={handleRemoveKey}
                className={cn(
                  "group/delete delete-shape absolute right-3.5 -top-3 flex items-center justify-center text-red-600/90 hover:text-red-500/80 p-1.25 rounded-xl border-2 border-white/20 outline-2 outline-offset-1 outline-white/30 z-30 cursor-pointer",
                )}
              >
                <MagneticButton
                  icon={BookmarkOff02Icon}
                  size={20}
                  className="active:scale-95"
                />
              </motion.span>
            )}

            {/* Copy Link Button */}
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              onClick={handleCopy}
              className={cn(
                "group/copy copy-shape absolute right-13 -top-4 flex items-center justify-center z-30 outline-2 outline-offset-1 outline-white/30",
                "text-sky-300/80 group-hover:text-sky-500/90 p-1.25 bg-white/2 border-2 border-white/15 cursor-pointer",
              )}
            >
              <MagneticButton
                icon={Copy02Icon}
                size={20}
                className="active:scale-95"
              />
            </motion.span>

            {/* Share Button */}
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              onClick={handleShare}
              className={cn(
                "group/share share-shape absolute top-5.5 right-3.5 flex items-center justify-center z-30 outline-2 outline-offset-1 outline-white/30",
                "text-indigo-500 group-hover:text-indigo-600 p-1.25 bg-white/2 border-2 border-white/15 cursor-pointer",
              )}
            >
              <MagneticButton
                icon={SentIcon}
                size={20}
                className="-translate-x-px translate-y-px active:scale-95"
              />
            </motion.span>

            {/* preview Button */}
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              className={cn(
                "group/preview preview-shape absolute top-5.5 right-13 flex items-center justify-center z-30 outline-2 outline-offset-1 outline-white/30",
                "text-purple-700 group-hover:text-purple-500/80 p-1.25 bg-white/2 border-2 border-white/15 cursor-pointer",
              )}
            >
              <MagneticButton
                icon={ViewIcon}
                size={20}
                className="-translate-x-px translate-y-px active:scale-95"
              />
            </motion.a>
          </div>

          {/* logo */}
          <div
            className={cn(
              "p-1 w-fit mb-2 rounded-2xl bg-neutral-900/50 flex items-center justify-center border-2 border-white/10 overflow-hidden shrink-0 group-hover:border-amber-500-op30 transition-all duration-300",
            )}
          >
            <div
              className={cn(
                "size-10 rounded-xl bg-neutral-900/50 flex items-center justify-center border border-white/10 group-hover:scale-115 hover:scale-110 transition-all duration-300",
              )}
            >
              {logo ? (
                <Link
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={`${title} logo`}
                >
                  <img
                    src={logo}
                    alt={`${title} logo`}
                    loading="lazy"
                    className="w-full h-full object-cover border border-black rounded-xl"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                </Link>
              ) : null}
              <Link
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                alt={`${title} logo`}
              >
                <span
                  className="text-amber-500 text-sm font-black"
                  style={{ display: logo ? "none" : "flex" }}
                >
                  {title.charAt(0).toUpperCase()}
                </span>
              </Link>
            </div>
          </div>

          {/* title */}
          <div className={cn("pl-1 pt-1.5 mb-1")}>
            <Link
              to={link}
              target="_blank"
              rel="noopener noreferrer"
              alt={title}
              className={cn(
                "font-semibold bg-clip-text text-transparent bg-linear-to-b from-zinc-100 to-zinc-100/80  text-xl md:text-[22px] leading-6 tracking-normal",
                "group-hover:text-amber-600/80 group-hover:tracking-[-0.01em] text-shadow-2xs text-shadow-black/40 transition-all duration-200",
              )}
            >
              {title}
            </Link>
          </div>

          {/* divider */}
          <span className="w-[95%] h-px bg-white/30 my-1"></span>

          {/*  Description */}
          <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            alt={desc.split(" ").slice(0, 20).join(" ")}
            className="pl-0.5"
          >
            <p
              className={cn(
                "text-[14px] text-shadow-2xs text-shadow-black max-w-full ml-1 text-neutral-400/80 leading-4.5 font-mono grow",
              )}
            >
              {desc}
            </p>
          </Link>

          {/* category add on */}
          {allowRemove && (
            <span
              className={cn(
                " flex justify-center items-center gap-2 absolute -bottom-[8.5px] right-8 mt-4 w-fit text-[10px] px-3 py-1 z-999 bg-black/90 border border-white/10 transition-all duration-300",
                "rounded-full text-amber-700 font-bold tracking-[1.4px] leading-none shadow-zinc-600 shadow-xs",
              )}
            >
              <span className="relative flex justify-center items-center h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-600"></span>
              </span>
              {category
                .split("_")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </span>
          )}

          {/* newly added indicator */}
          {isNew && (
            <span className="absolute right-5 bottom-5 flex justify-center items-center h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400/60 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400/40"></span>
            </span>
          )}
        </section>
      </motion.div>
    );
  },
);
export default Card;

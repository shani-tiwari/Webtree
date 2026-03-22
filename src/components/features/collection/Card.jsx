/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete03Icon,
  FolderCheckIcon,
  FolderAddIcon,
  Copy02Icon,
  SentIcon,
} from "@hugeicons/core-free-icons";
import { useCollection } from "../../../context/CollectionContext";
import { useState, memo } from "react";
import { Link } from "react-router";
import { cn } from "../../../utils/utils.js";

// Memoized Card Component
const Card = memo(
  ({ id, title, link, desc, allowRemove, logo, category, ...props }) => {

    const { addToCollection, removeFromCollection, collection } = useCollection();

    const [added, setAdded] = useState(false);
    const [copied, setCopied] = useState(false);

    const normalize = (str) => str ? str.trim().split(" ").join("").toLowerCase() : "";

    // Check if item is already in collection to show correct state
    const isCollected = collection.some( (item) => normalize(item.name) === normalize(title));

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
      // setTimeout(() => setAdded(false), 2000);
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
            title: title,
            text: "Check this out!",
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
        layout
        className={cn("w-full h-full block p-1")}
        aria-label={`View ${title} resource`}
      >
        <motion.article
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className={cn(
            "relative h-full flex flex-col bg-[#080808]/80 backdrop-blur-md border border-zinc-800 rounded-4xl p-4",
            "transition-all ease-[cubic-bezier(0.79,0.47,0.24,0.98)] duration-100 group cursor-pointer text-white/70 select-none hover:border-zinc-600/80 shadow-lg hover:shadow-2xl",
          )}
        >
          {/* Action Icons Section */}
          <div
            className={cn(
              "absolute top-7 right-3 flex gap-3.5 items-center z-40 ",
            )}
          >
            {!allowRemove && (
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddKey}
                className={cn(
                  "group/icon absolute right-[10px] flex items-center justify-center transition-all duration-200 z-30",
                  "p-1 rounded-xl bg-white/2 border-2 border-white/20 cursor-pointer active:scale-95",
                  isCollected
                    ? "text-emerald-600 font-bold hover:text-emerald-500 filter-[drop-shadow(0_0_4px_rgba(16,185,129,0.3))]"
                    : "text-amber-300-op60  group-hover:text-amber-400-op80 filter-[drop-shadow(0_0_4px_var(--color-amber-400-op30))] ",
                )}
              >
                {isCollected ? (
                  <HugeiconsIcon icon={FolderCheckIcon} size={20} />
                ) : (
                  <HugeiconsIcon className="filter-[drop-shadow(0_0_4px_var(--color-amber-400-op50))]" icon={FolderAddIcon} size={20} />
                )}

                <span
                  className={cn(
                    "hidden md:flex absolute right-full -top-2 mr-2 w-max px-2 py-1 text-[10px] uppercase bg-zinc-900 border border-white/10 rounded-md shadow-xs",
                    "tracking-wide font-semibold invisible group-hover/icon:visible transition-all duration-300 pointer-events-none z-99 ",
                  )}
                >
                  {added ? "Added" : isCollected ? "Added" : "+ Add"}
                </span>
              </motion.span>
            )}
            {allowRemove && (
              <motion.span
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleRemoveKey}
                className={cn("group/delete absolute right-2 flex items-center justify-center text-red-600/90 hover:text-red-500 p-1 rounded-xl border-2 border-white/20 z-30",
                  "active:scale-95 transition-all duration-200 cursor-pointer",
                )}
              >
                <HugeiconsIcon icon={Delete03Icon} size={19} />
                <span
                  className={cn(" hidden md:flex absolute right-full mr-2 -mt-4 w-max px-2.5 py-[3px] text-[10px] uppercase bg-zinc-900 border border-white/10 rounded-md filter-[drop-shadow(0_0_4px_rgba(220,38,50,0.3))] ",
                    "shadow-xs tracking-wide font-semibold invisible group-hover/delete:opacity-100 group-hover/delete:visible transition-all duration-200 pointer-events-none z-99",
                  )}
                >
                  Remove
                </span>
              </motion.span>
            )}

            {/* Copy Link Button */}
            <motion.span
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopy}
              className={cn("group/copy absolute right-[42px] top-[4px] flex items-center justify-center active:scale-95 transition-all duration-200 z-30",
                "text-sky-300/80 group-hover:text-sky-500/80 p-1 rounded-xl bg-white/2 border-2 border-white/20 cursor-pointer",
              )}
            >
              <HugeiconsIcon icon={Copy02Icon} size={19} />
              <span
                className={cn("hidden md:flex absolute right-full mr-2 w-max px-2.5 py-1 text-[10px] uppercase bg-zinc-900 border border-white/20 rounded-md shadow-xs ",
                  "filter-[drop-shadow(0_0_4px_rgba(125,211,252,0.3))] font-semibold invisible group-hover/copy:opacity-100 group-hover/copy:visible transition-all duration-300 pointer-events-none z-99",
                )}
              >
                {copied ? "Copied!" : "Copy Link"}
              </span>
            </motion.span>

            {/* Share Button */}
            <motion.span
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleShare}
              className={cn(
                "group/share absolute top-[20px] right-[10px] flex items-center justify-center active:scale-95 transition-all duration-200 z-30",
                "text-indigo-400 group-hover:text-indigo-500 p-1 rounded-xl bg-white/2 border-2 border-white/20 cursor-pointer",
              )}
            >
              <HugeiconsIcon icon={SentIcon} size={19} />
              <span
                className={cn(
                  "hidden md:flex absolute top-[78%] -left-14 w-max px-2.5 py-[3px] text-[10px] uppercase bg-zinc-900 border border-white/20 rounded-md shadow-xs font-semibold invisible filter-[drop-shadow(0_0_4px_rgba(160,180,252,0.3))]",
                  "tracking-wide group-hover/share:visible transition-all duration-200 pointer-events-none z-999",
                )}
              >
                Share
              </span>
            </motion.span>
          </div>

          {/* logo */}
          <div className={cn("p-1 w-fit mb-2 rounded-2xl bg-neutral-900/50 flex items-center justify-center border-2 border-white/10 overflow-hidden shrink-0 group-hover:border-amber-500-op30 transition-all duration-300")}>
              <div
                className={cn(
                  "w-9 h-9 rounded-xl bg-neutral-900/50 flex items-center justify-center border border-white/10 overflow-hidden shrink-0 group-hover:scale-120 transition-all duration-300",
                )}
              >
                {logo ? (
                  <Link to={link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  </Link>
                ) : null}
                <Link to={link} target="_blank" rel="noopener noreferrer">
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
          <div className={cn("pl-1")}>
              <Link to={link} target="_blank" rel="noopener noreferrer">
                <h3
                  className={cn("font-semibold text-xl md:text-2xl mt-1 mb-[10px] font-sans text-gray-100 leading-6 tracking-wide group-hover:text-amber-500 transition-colors duration-300")}
                >
                  {title}
                </h3>
              </Link>
          </div>

          {/* divider */}
          <span className="w-[95%] h-[0.3px] bg-white/20 mb-[5px] ml-1"></span>


          {/*  Description */}
          <Link to={link} target="_blank" rel="noopener noreferrer">
            <p
              className={cn("text-[14px] max-w-full ml-1 text-neutral-400 leading-[18px] font-mono grow group-hover:text-neutral-300 transition-colors duration-300")}
            >
              {desc}
            </p>
          </Link>

          {/* category add on */}
          {allowRemove && (
            <span
              className={cn(
                "absolute -bottom-[8.5px] right-8 mt-4 w-fit text-[10px] px-3 py-1 z-999 bg-black/20 border border-white/10",
                "rounded-full text-amber-700 uppercase font-black tracking-widest leading-none will-change-transform",
              )}
            >
              {category
                .split("_")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </span>
          )}
        </motion.article>
      </motion.div>
    );
  },
);
export default Card;

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
const Card = memo(({ id, title, link, desc, allowRemove, logo, category, isNew, ...props }) => {

  const { addToCollection, removeFromCollection, collection } = useCollection();

    const [added, setAdded]  = useState(false);
    const [copied, setCopied] = useState(false);

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
        <motion.section
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className={cn(
            "relative h-full flex flex-col bg-[#080808]/80 backdrop-blur-md border-2 border-zinc-700/80 rounded-[30px] p-4",
            "transition-all ease-[cubic-bezier(0.79,0.47,0.24,0.98)] duration-100 group cursor-pointer text-white/70 select-none hover:border-zinc-600 shadow-md shadow-black hover:shadow-xl",
          )}
        >
          {/* Action Icons Section */}
          <div
            className={cn(
              "absolute top-7 right-3 flex items-center z-40 ",
            )}
          >
            {!allowRemove && (
              <motion.span
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.79, 0.47, 0.24, 0.98] }}
                onClick={handleAddKey}
                className={cn(
                  "group/icon absolute right-[10px] flex items-center justify-center z-30",
                  "p-1 rounded-xl bg-white/2 border-2 border-white/20 cursor-pointer shadow-sm",
                  isCollected
                    ? "text-emerald-600 font-bold hover:text-emerald-500 shadow-emerald-500/30"
                    : "text-amber-300-op60  group-hover:text-amber-400-op80  shadow-amber-500/30",
                )}
              >
                {isCollected ? (
                  <HugeiconsIcon icon={FolderCheckIcon} size={20} />
                ) : (
                  <HugeiconsIcon className="active:scale-95" icon={FolderAddIcon} size={20} />
                )}

                <span
                  className={cn(
                    "hidden md:flex absolute right-full -top-2 mr-2 w-max px-2 py-1 text-[10px] uppercase bg-zinc-900 border border-white/10 rounded-md shadow-xs",
                    "tracking-wide font-semibold invisible group-hover/icon:visible pointer-events-none z-99 ",
                  )}
                >
                  {added ? "Added" : isCollected ? "Added" : "+ Add to collection"}
                </span>
              </motion.span>
            )}
            {allowRemove && (
              <motion.span
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.1 }}
                onClick={handleRemoveKey}
                className={cn(
                  "group/delete absolute right-2 flex items-center justify-center text-red-600/90 hover:text-red-500 p-1 rounded-xl border-2 border-white/20 z-30 cursor-pointer shadow-xs shadow-red-500/70",
                )}
              >
                <HugeiconsIcon icon={Delete03Icon} size={19} className="active:scale-95"/>
                <span
                  className={cn(
                    " hidden md:flex absolute right-full mr-2 -mt-4 w-max px-2.5 py-[3px] text-[10px] uppercase bg-zinc-900 border border-white/10 rounded-md filter-[drop-shadow(0_0_4px_rgba(220,38,50,0.3))] ",
                    "shadow-xs tracking-wide font-semibold invisible group-hover/delete:opacity-100 group-hover/delete:visible pointer-events-none z-99",
                  )}
                >
                  Remove
                </span>
              </motion.span>
            )}

            {/* Copy Link Button */}
            <motion.span
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              onClick={handleCopy}
              className={cn(
                "group/copy absolute right-[44px] top-[3px] flex items-center justify-center  z-30 shadow-xs shadow-sky-700/70",
                "text-sky-300/80 group-hover:text-sky-500/90 p-1 rounded-xl bg-white/2 border-2 border-white/20 cursor-pointer",
              )}
            >
              <HugeiconsIcon icon={Copy02Icon} size={19} className="active:scale-95" />
              <span
                className={cn(
                  "hidden md:flex absolute right-full mr-2 w-max px-2.5 py-1 text-[10px] uppercase bg-zinc-900 border border-white/20 rounded-md shadow-xs ",
                  "filter-[drop-shadow(0_0_4px_rgba(125,211,252,0.3))] font-semibold invisible group-hover/copy:opacity-100 group-hover/copy:visible pointer-events-none z-99",
                )}
              >
                {copied ? "Copied!" : "Copy Link"}
              </span>
            </motion.span>

            {/* Share Button */}
            <motion.span
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              onClick={handleShare}
              className={cn(
                "group/share absolute top-[21px] right-[11px] flex items-center justify-center z-30 shadow-xs shadow-indigo-700/70",
                "text-indigo-500 group-hover:text-indigo-600 p-1 rounded-xl bg-white/2 border-2 border-white/20 cursor-pointer",
              )}
            >
              <HugeiconsIcon icon={SentIcon} size={19} className="-translate-x-px translate-y-px active:scale-95" />
              <span
                className={cn(
                  "hidden md:flex absolute top-[78%] px-2.5 -left-14 w-max  py-[3px] text-[10px] uppercase bg-zinc-900 border border-white/20 rounded-md shadow-xs",
                  " font-semibold invisible filter-[drop-shadow(0_0_4px_rgba(160,180,252,0.3))] tracking-wide group-hover/share:visible pointer-events-none z-999",
                )}
              >
                Share
              </span>
            </motion.span>
          </div>

          {/* logo */}
          <div
            className={cn(
              "p-1 w-fit mb-2 rounded-2xl bg-neutral-900/50 flex items-center justify-center border-2 border-white/10 overflow-hidden shrink-0 group-hover:border-amber-500-op30 transition-all duration-300",
            )}
          >
            <div
              className={cn(
                "w-9 h-9 rounded-xl bg-neutral-900/50 flex items-center justify-center border border-white/10 overflow-hidden shrink-0 group-hover:scale-120 hover:scale-115 transition-all duration-200",
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
          <div className={cn("pl-1 pt-1.5 mb-1")}>
            <Link to={link} target="_blank" rel="noopener noreferrer"
             className={cn("font-semibold  bg-clip-text text-transparent bg-linear-to-b from-zinc-100 to-zinc-200  text-xl md:text-[22px] font-sans leading-6 tracking-normal",
                  "group-hover:text-amber-500/80 group-hover:tracking-[-0.02em] text-shadow-2xs text-shadow-black/40 transition-all duration-150")} 
            >
                {title}
            </Link>
          </div>

          {/* divider */}
          <span className="w-[95%] h-px bg-white/30 mb-[5px] ml-1 my-1"></span>

          {/*  Description */}
          <Link to={link} target="_blank" rel="noopener noreferrer" className="pl-0.5 perspective-distant group-hover:rotate-x-20 transition-all duration-200">
            <p
              className={cn(
                "text-[14px] text-shadow-2xs  text-shadow-black max-w-full ml-1 text-neutral-400/80 leading-[18px] font-mono grow group-hover:text-neutral-300/80 transition-all duration-200",
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
          {  
            isNew && (
              <span
                className="absolute right-5 bottom-5 flex justify-center items-center h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
              </span>
            )
          }
        </motion.section>
      </motion.div>
    );
  },
);
export default Card;

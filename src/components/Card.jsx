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
import { useCollection } from "../context/CollectionContext";
import { useState, memo } from "react";
import { Link } from "react-router";

// Memoized Card Component
const Card = memo(
  ({ id, title, link, desc, allowRemove, logo, category, ...props }) => {
    const { addToCollection, removeFromCollection, collection } =
      useCollection();
    const [added, setAdded] = useState(false);
    const [copied, setCopied] = useState(false);

    const normalize = (str) =>
      str ? str.trim().split(" ").join("").toLowerCase() : "";

    // Check if item is already in collection to show correct state
    const isCollected = collection.some(
      (item) => normalize(item.name || item.title) === normalize(title),
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
            url: link,
          });
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
        className="w-full h-full block p-1"
        aria-label={`View ${title} resource`}
      >
        <motion.article
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="relative h-full flex flex-col bg-[#080808]/80 backdrop-blur-md border border-zinc-800 rounded-xl p-4 
          transition-colors duration-300 group cursor-pointer text-white/70 select-none hover:border-zinc-600/50 shadow-lg hover:shadow-2xl"
        >
          {/* Action Icons Section */}
          <div className="absolute top-4 right-3 flex flex-col gap-3.5 items-center z-40">
            {!allowRemove && (
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddKey}
                className={`group/icon relative flex items-center justify-center transition-all duration-200 z-30 ${isCollected ? "text-amber-500" : "text-neutral-500 hover:text-white"}`}
              >
                {isCollected ? (
                  <HugeiconsIcon icon={FolderCheckIcon} size={22} />
                ) : (
                  <HugeiconsIcon icon={FolderAddIcon} size={22} />
                )}

                <span
                  className="absolute right-full mr-2 w-max px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold
                   bg-zinc-900 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/icon:opacity-100 
                   group-hover/icon:visible transition-all duration-200 transform scale-90 group-hover/icon:scale-100 pointer-events-none z-99"
                >
                  {added ? "Added!" : isCollected ? "Saved" : "+ Add"}
                </span>
              </motion.span>
            )}
            {allowRemove && (
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleRemoveKey}
                className="group/delete relative flex items-center justify-center text-red-500/70 hover:text-red-500 transition-colors duration-300 z-30"
              >
                <HugeiconsIcon icon={Delete03Icon} size={20} />
                <span className="absolute right-full mr-2 w-max px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-red-100 bg-zinc-900 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/delete:opacity-100 group-hover/delete:visible transition-all duration-200 transform scale-90 group-hover/delete:scale-100 pointer-events-none z-20">
                  Remove
                </span>
              </motion.span>
            )}

            {/* Copy Link Button */}
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopy}
              className="group/copy relative flex items-center justify-center transition-all duration-200 z-30 text-neutral-500 hover:text-white"
            >
              <HugeiconsIcon icon={Copy02Icon} size={22} />
              <span className="absolute right-full mr-2 w-max px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold bg-zinc-900 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/copy:opacity-100 group-hover/copy:visible transition-all duration-200 transform scale-90 group-hover/copy:scale-100 pointer-events-none z-99">
                {copied ? "Copied!" : "Copy Link"}
              </span>
            </motion.span>

            {/* Share Button */}
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="group/share relative flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-200 z-30"
            >
              <HugeiconsIcon icon={SentIcon} size={22} />
              <span className="absolute right-full mr-2 w-max px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold bg-zinc-900 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/share:opacity-100 group-hover/share:visible transition-all duration-200 transform scale-90 group-hover/share:scale-100 pointer-events-none z-99">
                Share
              </span>
            </motion.span>
          </div>

          <div className="flex items-start justify-between gap-3 mb-2 pb-2 pr-9 border-b border-white/5">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-2xl bg-neutral-900/50 flex items-center justify-center border border-white/10 overflow-hidden shrink-0 group-hover:border-amber-500/30 transition-colors duration-300">
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
              <Link to={link} target="_blank" rel="noopener noreferrer">
                <h3 className="font-bold text-gray-100 tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                  {title}
                </h3>
              </Link>
            </div>
          </div>

          <Link to={link} target="_blank" rel="noopener noreferrer">
            <p className="text-[13px] max-w-[90%] text-neutral-400 leading-relaxed font-medium grow group-hover:text-neutral-200 transition-colors duration-300">
              {desc}
            </p>
          </Link>

          {allowRemove && (
            <span className="mt-4 w-fit text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-amber-500/80 uppercase font-black tracking-widest leading-none">
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

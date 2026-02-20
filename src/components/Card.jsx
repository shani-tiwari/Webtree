import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete03Icon,
  FolderCheckIcon,
  FolderAddIcon,
  Copy01Icon,
  Share02Icon,
} from "@hugeicons/core-free-icons";
import { useCollection } from "../context/CollectionContext";
import { useState } from "react";
import React from "react";
import { Link } from "react-router";

// Memoized Card Component
const Card = React.memo(
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

      // Create item object to save
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
      <div
        className="w-full h-full block p-1"
        aria-label={`View ${title} resource`}
      >
        <article
          className="relative h-full flex flex-col bg-black/50 backdrop-blur-xs border border-zinc-600 rounded-lg p-2 
          transition-all duration-400 group cursor-pointer text-white/70 select-none hover:scale-[1.01] hover:-translate-y-1 hover:border-zinc-400"
        >
          {/* Action Icons Section */}
          <div className="absolute top-2 right-2 flex flex-col gap-3 items-center z-40">
            {!allowRemove && (
              <span
                onClick={handleAddKey}
                className={`group/icon relative flex items-center justify-center hover:scale-110 active:scale-100 transition-all duration-200 z-30 ${isCollected ? "text-green-500 hover:text-green-700" : "text-amber-700 hover:text-amber-900"}`}
              >
                {isCollected ? (
                  <HugeiconsIcon icon={FolderCheckIcon} size={22} />
                ) : (
                  <HugeiconsIcon icon={FolderAddIcon} size={22} />
                )}

                <span
                  className="absolute right-full mr-2 w-max px-2.5 py-1 text-xs font-medium
                   bg-zinc-800/90 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/icon:opacity-100 
                   group-hover/icon:visible transition-all duration-200 transform scale-90 group-hover/icon:scale-100 pointer-events-none z-99"
                >
                  {added ? "Added!" : isCollected ? "Saved" : "+ Add"}
                </span>
              </span>
            )}
            {allowRemove && (
              <span
                onClick={handleRemoveKey}
                className="group/delete relative flex items-center justify-center text-red-500 transition-colors duration-300 hover:text-red-700 z-30"
              >
                <HugeiconsIcon icon={Delete03Icon} size={20} />
                <span className="absolute right-full mr-2 w-max px-2.5 py-1 text-xs font-medium text-red-100 bg-zinc-800/90 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/delete:opacity-100 group-hover/delete:visible transition-all duration-200 transform scale-90 group-hover/delete:scale-100 pointer-events-none z-20">
                  Remove
                </span>
              </span>
            )}

            {/* Copy Link Button */}
            <span
              onClick={handleCopy}
              className={`group/copy relative flex items-center justify-center transition-all duration-200 z-30 ${copied ? "text-green-400" : "text-blue-600 hover:text-blue-800 hover:scale-110 active:scale-100"}`}
            >
              <HugeiconsIcon icon={Copy01Icon} size={22} />
              <span className="absolute right-full mr-2 w-max px-2.5 py-1 text-xs font-medium bg-zinc-800/90 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/copy:opacity-100 group-hover/copy:visible transition-all duration-200 transform scale-90 group-hover/copy:scale-100 pointer-events-none z-99">
                {copied ? "Copied!" : "Copy Link"}
              </span>
            </span>

            {/* Share Button */}
            <span
              onClick={handleShare}
              className="group/share relative flex items-center justify-center text-purple-600 hover:text-purple-800 hover:scale-110 active:scale-100 transition-all duration-200 z-30"
            >
              <HugeiconsIcon icon={Share02Icon} size={22} />
              <span className="absolute right-full mr-2 w-max px-2.5 py-1 text-xs font-medium bg-zinc-800/90 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/share:opacity-100 group-hover/share:visible transition-all duration-200 transform scale-90 group-hover/share:scale-100 pointer-events-none z-99">
                Share
              </span>
            </span>
          </div>

          <div className="flex items-start justify-between gap-3 mb-1 pb-2 pr-9">
            <div className="flex items-center justify-center gap-3 ">
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-zinc-500 overflow-hidden shrink-0">
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
                    className="text-amber-500/70 text-sm font-bold"
                    style={{ display: logo ? "none" : "flex" }}
                  >
                    {title.charAt(0).toUpperCase()}
                  </span>
                </Link>
              </div>
              <Link to={link} target="_blank" rel="noopener noreferrer">
                <h3 className="font-medium text-gray-200 md:tracking-wider transition-colors duration-300">
                  {title}
                </h3>
              </Link>
            </div>
          </div>

          {/* border */}
          <div className="w-[85%] h-[0.5px] bg-linear-to-r from-zinc-500/20 via-zinc-500/70 to-zinc-500/20 mb-[5px] rounded-full"></div>

          <Link to={link} target="_blank" rel="noopener noreferrer">
            <p className="text-sm max-w-[90%] text-white/60 leading-relaxed font-light grow">
              {desc}
            </p>
          </Link>
          {allowRemove && (
            <span className="absolute -bottom-[10px] right-2 w-fit text-xs px-4 py-px bg-black backdrop-blur-2xl  border border-white/30 rounded-full text-white/60 leading-relaxed font-light">
              {category
                .split("_")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </span>
          )}
        </article>
      </div>
    );
  },
);
export default Card;

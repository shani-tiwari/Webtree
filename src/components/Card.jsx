import { HugeiconsIcon } from "@hugeicons/react";
import { Delete03Icon, FolderCheckIcon, FolderAddIcon } from "@hugeicons/core-free-icons";
import { useCollection } from "../context/CollectionContext";
import { useState } from "react";
import React from "react";

// Memoized Card Component
const Card = React.memo(
  ({ id, title, link, desc, allowRemove, logo, category, ...props }) => {
    const { addToCollection, removeFromCollection, collection } =
      useCollection();
    const [added, setAdded] = useState(false);

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

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full block p-1"
        aria-label={`View ${title} resource`}
      >
        <article
          className="relative h-full flex flex-col bg-black/50 backdrop-blur-xs border border-zinc-600 rounded-lg p-2 
          transition-all duration-400 group cursor-pointer text-white/70 select-none hover:scale-[1.01] hover:-translate-y-1 hover:border-zinc-400"
        >
          <div className="flex items-center justify-between gap-3 mb-1 pb-2">
            <div className="flex items-center justify-center gap-3 ">
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-amber-600/20 overflow-hidden shrink-0">
                {logo ? (
                  <img
                    src={logo}
                    alt={`${title} logo`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <span
                  className="text-amber-500/70 text-sm font-bold"
                  style={{ display: logo ? "none" : "flex" }}
                >
                  {title.charAt(0).toUpperCase()}
                </span>
              </div>
              <h3 className="font-medium text-gray-200 md:tracking-wider transition-colors duration-300">
                {title}
              </h3>
            </div>
            <div className="flex gap-2">
              {allowRemove && (
                <span
                  onClick={handleRemoveKey}
                  className="group/delete relative flex items-center justify-center text-red-600/90 transition-colors duration-300 hover:text-red-400 z-30"
                >
                  <HugeiconsIcon icon={Delete03Icon} size={20} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 text-xs font-medium text-red-100 bg-zinc-800/90 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/delete:opacity-100 group-hover/delete:visible transition-all duration-200 transform scale-90 group-hover/delete:scale-100 pointer-events-none z-20">
                    Remove
                  </span>
                </span>
              )}
              {!allowRemove && (
                <span
                  onClick={handleAddKey}
                  className="group/icon relative flex items-center justify-center text-white/70 hover:scale-110 active:scale-100 transition-all 
                  duration-200 z-30"
                >
                  {isCollected ? (
                    <HugeiconsIcon icon={FolderCheckIcon} size={22} style={{ color: "oklch(53.2% 0.157 131.589)" }} />
                  ) : (
                    <HugeiconsIcon icon={FolderAddIcon} size={22} style={{ color: "oklch(47.6% 0.114 61.907)" }} />
                  )}

                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 w-max px-2.5 py-1 text-xs font-medium
                   bg-zinc-800/90 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/icon:opacity-100 
                   group-hover/icon:visible transition-all duration-200 transform scale-90 group-hover/icon:scale-100 pointer-events-none z-99"
                  >
                    {added ? "Added!" : isCollected ? "Saved" : "+ Add"}
                  </span>
                </span>
              )}
            </div>
          </div>

          {/* border */}
          <div className="w-full h-px bg-linear-to-r from-zinc-500/20 via-zinc-500/70 to-zinc-500/20 mb-[5px] rounded-full"></div>

          <p className="text-sm text-white/60 leading-relaxed font-light grow">
            {desc}
          </p>
          {allowRemove && (
            <span className="absolute -bottom-[10px] right-2 w-fit text-xs px-4 py-px bg-black backdrop-blur-2xl  border border-white/30 rounded-full text-white/60 leading-relaxed font-light">
              {category
                .split("_")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </span>
          )}
        </article>
      </a>
    );
  },
);
export default Card;

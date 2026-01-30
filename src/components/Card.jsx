import { useCollection } from "../context/CollectionContext";
import { useState } from "react";
import React from "react";
import { FolderCheck, FolderHeart, Trash2 } from "lucide-react";

// Memoized Card Component
const Card = React.memo(
  ({ id, title, link, desc, allowRemove, logo, ...props }) => {
    const { addToCollection, removeFromCollection, collection } =
      useCollection();
    const [added, setAdded] = useState(false);

    const normalize = (str) => str ? str.trim().split(" ").join("").toLowerCase() : "";

    // Check if item is already in collection to show correct state
    const isCollected = collection.some(
      (item) => normalize(item.name || item.title) === normalize(title),
    );

    const handleAddKey = (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Create item object to save
      // Ensure name is present for consistency
      const item = { id, title, link, desc, logo, name: title, ...props };
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
          key={id}
          className="relative h-full flex flex-col bg-white/3 backdrop-blur-xs border border-amber-600/20 rounded-lg p-2 transition-all duration-400 
         group cursor-pointer hover:border-amber-600/40 text-white/70 select-none  hover:scale-[1.02] "
        >
          <div className="flex items-center justify-between gap-3 mb-1 pb-2">
            <div className="flex items-center justify-center gap-3 ">
              <div className="w-7 h-7 rounded-full  bg-neutral-800 flex items-center justify-center border border-amber-600/20">
                <span className="text-amber-500/70">
                  {title.charAt(0).toUpperCase()}
                </span>
              </div>
              <h3 className="font-medium text-gray-200  md:tracking-wider transition-colors duration-300">
                {title}
              </h3>
            </div>
            <div className="flex gap-2">
              {allowRemove && (
                <span
                  onClick={handleRemoveKey}
                  className="group/delete relative flex items-center justify-center text-red-600/90 transition-colors duration-300 hover:text-red-400 z-30"
                >
                  <Trash2 size={20} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 text-xs font-medium text-red-100 bg-zinc-800/90 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/delete:opacity-100 group-hover/delete:visible transition-all duration-200 transform scale-90 group-hover/delete:scale-100 pointer-events-none z-20">
                    Remove
                  </span>
                </span>
              )}
              {!allowRemove && (
                <span
                  onClick={handleAddKey}
                  className="group/icon relative flex items-center justify-center text-white/70 hover:scale-110 active:scale-100 transition-all duration-300 hover:text-amber-400 z-30"
                >
                  {isCollected ? (
                    <FolderCheck
                      size={20}
                      style={{ color: "oklch(76.9% 0.188 70.08)" }}
                    />
                  ) : (
                    <FolderHeart size={20} />
                  )}

                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 text-xs font-medium text-amber-100 bg-zinc-800/90 border border-white/10 rounded-md shadow-xl backdrop-blur-sm opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-200 transform scale-90 group-hover/icon:scale-100 pointer-events-none z-20">
                    {added ? "Added!" : isCollected ? "Saved" : "+ Add"}
                  </span>
                </span>
              )}
            </div>
          </div>

          {/* border */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent mb-1"></div>

          <p className="text-sm text-white/60 leading-relaxed font-light grow">
            {desc}
          </p>
        </article>
      </a>
    );
  },
);
export default Card;

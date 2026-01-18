import React from "react";

const SideBtn = React.memo(
  ({ name, setcardData, data, isActive, setActiveCategory }) => {
    const handleClick = () => {
      setcardData(data[name]);
      setActiveCategory(name);
    };

    return (
      <button
        onClick={handleClick}
        aria-pressed={isActive}
        aria-label={`Select ${name.split("_").join(" ")} category`}
        className={`
          ${
            isActive
              ? " bg-linear-to-bl from-amber-600/30 to-amber-700/30 "
              : " bg-zinc-800/20 hover:bg-zinc-800/40 shadow-white/15 "
          }
          relative md:text-start group border border-white/50 py-1 px-3 mb-2 rounded-md
          backdrop-blur-md cursor-pointer shadow-inner transition-all duration-400 ease-out select-none w-full
        `}
      >
        <span
          className={`text-sm md:text-lg font-light tracking-wide`}
        >
          ⁘ {name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
        </span>
      </button>
    );
  },
);
export default SideBtn;

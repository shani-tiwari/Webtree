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
              : " bg-zinc-800/20 hover:bg-zinc-800/40  "
          }
          relative w-fit md:text-start group border border-white/40 py-1 px-3 mb-2 rounded-md
          backdrop-blur-md cursor-pointer transition-all duration-300 ease-out select-none
        `}
      >
        <span
          className={`text-base font-light tracking-wide`}
        >
          {/* ⁘ */}
           {name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
        </span>
      </button>
    );
  },
);
export default SideBtn;

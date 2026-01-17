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
              ? " bg-linear-to-bl from-amber-500/80 to-amber-600/40 "
              : " bg-zinc-800/20 hover:bg-zinc-800/40 shadow-white/15 "
          }
          relative group border text-center py-1 px-2 md:px-4 mb-2 rounded-md
          backdrop-blur-md cursor-pointer shadow-inner transition-all duration-400 ease-out select-none w-full
        `}
      >
        <span
          className={`text-sm md:text-lg font-light tracking-wide`}
        >
          {name.split("_").join(" ")}
        </span>
      </button>
    );
  },
);
export default SideBtn;

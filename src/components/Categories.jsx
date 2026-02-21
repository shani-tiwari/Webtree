import React from "react";

const Categories = React.memo(
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
              ? " bg-linear-to-bl from-amber-600/30 to-amber-700/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)] "
              : " bg-zinc-800/20 hover:bg-zinc-800/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_3px_rgba(0,0,0,0.4)] "
          }
          relative w-fit md:text-start group border border-white/30 py-1 px-3 mb-2 rounded-md
          backdrop-blur-md cursor-pointer transition-all duration-150 ease-out select-none
          shadow-xs shadow-white/8
          hover:shadow-[0_4px_10px_rgba(0,0,0,0.8)]
          active:scale-97
        `}
      >
        <span className={`font-light tracking-[0.01em] drop-shadow-sm text-shadow-2xs`}>
          {/* ⁘ */}
          {name
            .split("_")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")}
        </span>
      </button>
    );
  },
);
export default Categories;

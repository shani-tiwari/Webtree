export default function SideBtn({
  name,
  // index,
  setcardData,
  data,
  activeCategory,
  setActiveCategory,
}) {
  const isActive = activeCategory === name;
  return (
    <button
      onClick={() => {
        setcardData(data[name]);
        setActiveCategory(name);
      }}
      aria-pressed={isActive}
      aria-label={`Select ${name.split("_").join(" ")} category`}
      className={`relative group border text-center py-1 px-2 md:px-4 mb-2 rounded-md 
        backdrop-blur-md cursor-pointer shadow-inner transition-all duration-300 ease-out select-none w-full
        ${
          isActive
            ? "border-[--color-collection-border]/50 bg-linear-to-r from-amber-500/80 to-amber-600/40 shadow-[--shadow-glow-gold] text-[--color-text-accent]"
            : "border-[--color-border-divider] bg-zinc-800/20 hover:bg-zinc-800/40 shadow-white/15 text-[--color-text-secondary]"
        }`}
    >
      {isActive && (
        <>
          <div
            aria-hidden="true"
            className="absolute w-[80%]-mt-1 h-px bg-linear-to-r from-transparent via-[oklch(76.9% 0.188 70.08)] to-transparent"
          ></div>
          <div
            aria-hidden="true"
            className="absolute h-[80%] rotate-180 left-0 w-px bg-linear-to-b from-transparent via-[oklch(76.9% 0.188 70.08)] to-transparent"
          ></div>
          <div
            aria-hidden="true"
            className="absolute w-[80%] mt-1 h-px bottom-0 bg-linear-to-r from-transparent via-[oklch(76.9% 0.188 70.08)] to-transparent"
          ></div>
          <div
            aria-hidden="true"
            className="absolute h-[80%] rotate-180 mt-1 top-0 right-0 w-px bg-linear-to-b from-transparent via-[oklch(76.9% 0.188 70.08)] to-transparent"
          ></div>
        </>
      )}
      {!isActive && (
        <>
          <div
            aria-hidden="true"
            className="absolute w-[80%] -mt-1 h-px group-hover:bg-linear-to-r from-transparent via-white to-transparent "
          ></div>
          <div
            aria-hidden="true"
            className="absolute h-[80%] rotate-180 left-0 w-px group-hover:bg-linear-to-b from-transparent via-white to-transparent "
          ></div>
          <div
            aria-hidden="true"
            className="absolute w-[80%] mt-1 h-px bottom-0 group-hover:bg-linear-to-r from-transparent via-white to-transparent "
          ></div>
          <div
            aria-hidden="true"
            className="absolute h-full rotate-180 top-0 right-0 w-px group-hover:bg-linear-to-b from-transparent via-white to-transparent "
          ></div>
        </>
      )}
      <span
        className={` text-sm md:text-lg font-light tracking-wide ${
          isActive ? "text-[--color-collection-border]" : ""
        }`}
      >
        {name.split("_").join(" ")}
      </span>
    </button>
  );
}

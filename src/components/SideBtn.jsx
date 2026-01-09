export default function SideBtn({
  name,
  index,
  setcardData,
  data,
  activeCategory,
  setActiveCategory,
}) {
  const isActive = activeCategory === name;
  return (
    <div
      onClick={() => {
        setcardData(data[name]);
        setActiveCategory(name);
      }}
      className={`relative group border text-center py-1 px-2 md:px-4 mb-2 rounded-md 
        backdrop-blur-md cursor-pointer shadow-inner transition-all duration-300 ease-out
        ${
          isActive
            ? "border-amber-300/50 bg-amber-500/10 shadow-amber-500/10 text-amber-200"
            : "border-white/30 hover:bg-gray-700/15 shadow-white/15 text-gray-300"
        }`}
    >
      {isActive && (
        <>
          <div className="absolute w-[80%] -mt-1 h-px bg-linear-to-r from-transparent via-amber-300 to-transparent"></div>
          <div className="absolute h-[80%] rotate-180 left-0 w-px bg-linear-to-b from-transparent via-amber-300 to-transparent"></div>
          <div className="absolute w-[80%] mt-1 h-px bottom-0 bg-linear-to-r from-transparent via-amber-300 to-transparent"></div>
          <div className="absolute h-[80%] rotate-180 mt-1 top-0 right-0 w-px bg-linear-to-b from-transparent via-amber-300 to-transparent"></div>
        </>
      )}
      {!isActive && (
        <>
          <div className="absolute w-[80%] -mt-1 h-px group-hover:bg-linear-to-r from-transparent via-white to-transparent "></div>
          <div className="absolute h-[80%] rotate-180 left-0 w-px group-hover:bg-linear-to-b from-transparent via-white to-transparent "></div>
          <div className="absolute w-[80%] mt-1 h-px bottom-0 group-hover:bg-linear-to-r from-transparent via-white to-transparent "></div>
          <div className="absolute h-full rotate-180 top-0 right-0 w-px group-hover:bg-linear-to-b from-transparent via-white to-transparent "></div>
        </>
      )}
      <p
        className={` text-sm md:text-lg font-light tracking-wide ${
          isActive ? "text-amber-500" : ""
        }`}
        key={index.id}
      >
        {name}
      </p>
    </div>
  );
}

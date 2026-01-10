export default function Card({ id, title, logo, link, desc }) {
  return (
    <a
      href={link}
      className="w-full h-full block p-1"
      aria-label={`View ${title} resource`}
    >
      <div
        key={id}
        className="relative h-full flex flex-col bg-linear-to-bl from-neutral-800 via-zinc-700/40 to-neutral-800 border border-white/30 rounded-xl p-2 transition-all duration-500 hover:scale-[1.02] group cursor-pointer backdrop-blur-sm 
        hover:border-gray-300/50  hover:shadow shadow-amber-400/20 will-change-transform select-none"
      >
        {/* Decorative Lines */}
        <div
          aria-hidden="true"
          className="absolute w-full -mt-2 left-1/2 -translate-x-1/2 h-px bg-linear-to-r from-transparent via-neutral-100/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
        <div
          aria-hidden="true"
          className="absolute h-full top-1/2 -translate-y-1/2 left-0 w-px bg-linear-to-b from-transparent via-neutral-100/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
        <div
          aria-hidden="true"
          className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 translate-y-px h-px bg-linear-to-r from-transparent via-neutral-100/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
        <div
          aria-hidden="true"
          className="absolute h-full top-1/2 -translate-y-1/2 right-0 w-px bg-linear-to-b from-transparent via-neutral-100/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>

        <div className="flex items-center gap-3 mb-2 border-b border-white/5 pb-2">
          <img
            src={logo}
            alt={`${title} logo`}
            className={`w-6 h-6 rounded-sm ${logo ? "" : "hidden"}`}
          />
          <h3 className="font-medium text-gray-200 group-hover:text-neutral-100 tracking-wide transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed font-light grow">
          {desc}
        </p>
      </div>
    </a>
  );
}

export default function Card({ title, previewImage, logo, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative w-64 h-44 mr-4 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
    >
      {/* Background Image */}
      <img
        src={
          previewImage ||
          "https://placehold.co/600x400/1f2937/fbbf24?text=Preview"
        }
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Bottom Section: Logo + Title with Blur */}
      <div className="absolute bottom-0 left-0 right-0 p-3 rounded-2xl flex items-center gap-3 bg-gray-900/10 backdrop-blur-md border-t border-white/10 transition-colors duration-300 group-hover:bg-gray-900/80 group-hover:border-amber-500/30">
        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/20 bg-gray-800 shrink-0">
          <img
            src={logo || ""}
            alt={`${title} logo`}
            className={logo ? 'h-full w-full object-cover ' : 'hidden' }
          />
        </div>
        <h3 className="text-sm font-medium text-gray-300 truncate pr-2 transition-colors duration-300 group-hover:text-gray-100">
          {title}
        </h3>
      </div>
    </a>
  );
}

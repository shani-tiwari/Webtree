import { cn } from "../lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "z-30 w-full bg-black/80 border-t border-white/5 py-8 selection:bg-amber-600/30 selection:text-white",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-4 select-none",
        )}
      >
        <p
          className={cn(
            "text-sm text-gray-400 flex items-center gap-2 font-medium",
          )}
        >
          Made with <span className={cn("animate-bounce")}>❤️</span> by{" "}
          <span
            className={cn(
              "text-white hover:text-amber-500 cursor-default tracking-wider transition-colors duration-300",
            )}
          >
            Shani Tiwari
          </span>
        </p>
        <p
          className={cn(
            "text-sm text-gray-500 font-medium tracking-tight animate-pulse",
          )}
        >
          © {currentYear} WebTree. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

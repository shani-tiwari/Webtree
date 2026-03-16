import React from "react";
import { cn } from "../lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { NewTwitterRectangleIcon } from "@hugeicons/core-free-icons";
import { Link } from "react-router";

export default function ReviewCard({ name, xProfile, gender, text }) {
  const profileImage = gender === "female" ? "/user-img/female.png" : "/user-img/male.jpg";

  return (
    <Link 
    to={"/reviews"}
      className={cn(
        "relative flex flex-col min-w-[300px] w-[300px] md:min-w-[350px] md:w-[350px] p-5 rounded-3xl",
        "bg-[#080808]/80 backdrop-blur-md border border-zinc-800 shadow-lg shrink-0",
        "hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 group"
      )}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900 shrink-0">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col">
            <h4 className="text-white/90 font-semibold text-[15px]">{name}</h4>
            <a
              href={`https://x.com/${xProfile.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500/80 hover:text-amber-500 text-sm flex items-center gap-1 transition-colors w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              {xProfile.startsWith("@") ? xProfile : `@${xProfile}`}
            </a>
          </div>
        </div>

        {/* twitter profile */}
        <Link target="_blank" rel="noopener noreferrer" to={`https://x.com/${xProfile.replace("@", "")}`}>
          <HugeiconsIcon icon={NewTwitterRectangleIcon} size={30} className="text-amber-500/70 hover:text-amber-400/90 transition-colors w-fit" />
        </Link>

      </div>

      {/* Review Text */}
      <div className="relative grow">
        <span className="absolute -top-3 -left-2 text-4xl text-zinc-600 font-serif leading-none select-none animate-pulse">
          "
        </span>
        <p className="text-zinc-400 text-sm leading-relaxed relative z-10 font-mono italic grow">
          {text}
        </p>
      </div>
    </Link>
  );
}

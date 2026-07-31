import { cn } from "../../../utils/utils.js";
import { HugeiconsIcon } from "@hugeicons/react";
import { NewTwitterRectangleIcon } from "@hugeicons/core-free-icons";
import { Link } from "react-router";
import { useLocation } from "react-router";

export default function ReviewCard({ xProfile, gender, text, bgColor, date }) {
  const profileImage =
    gender === "female" ? "/user-imgs/female.webp" : "/user-imgs/male.webp";
  const location = useLocation();

  return (
    <Link
      to={"/reviews"}
      alt={"reviews"}
      style={{ backgroundColor: bgColor ? `${bgColor}25` : "rgba(10, 10, 10, 0.6)" }}
      className={cn(
        "relative group flex flex-col w-full py-4 px-5 rounded-3xl border-2 border-zinc-500/50 shadow-lg shrink-0",
        " transition-all duration-300 hover:border-zinc-500/80"
      )}
    >

      <div className="w-full flex flex-col items-start gap-4">
        <div className="flex items-center gap-4 w-full mb-2">
          {/* Profile Image */}
          <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-zinc-600/90 bg-zinc-900 shrink-0 shadow-inner">
            <img
              src={profileImage}
              alt={xProfile}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 hover:scale-100 transition-transform duration-300"
            />
          </div>

          {/* User Info & Date Container */}
          <div className="flex flex-col gap-2 min-w-0 ">
            <div className="wavy-underline-pulse pb-0.5">
              <Link
                to={`https://x.com/${xProfile.replace("@", "")}`}
                target="_blank"
                alt={xProfile}
                rel="noopener noreferrer"
                className="text-[15px] font-semibold text-amber-500/80 flex items-center gap-1.5 "
                onClick={(e) => e.stopPropagation()}
              >
                {xProfile.startsWith("@") ? xProfile : `@${xProfile}`}
                <HugeiconsIcon
                  icon={NewTwitterRectangleIcon}
                  size={18}
                  className="shrink-0"
                />
              </Link>
            </div>

            {/* Date span - now below ID */}
            <span className="w-fit text-[10px] px-3 py-[0.5px] bg-zinc-200/20 rounded-full text-zinc-400 font-medium tracking-wide">
              {date}
            </span>
          </div>
        </div>

        {/* Review Text */}
        <div className="relative w-full">
          <span className="absolute -top-4 -left-1 text-5xl text-zinc-400/60 font-serif leading-none select-none italic">
            "
          </span>
          <p className="font-serif mt-1 transition-colors duration-200 text-zinc-400 text-[15px] leading-relaxed tracking-wide relative z-10  grow pl-1">
            {location.pathname !== "/reviews" ? (
              <>
                {text.slice(0, 100)}...
                <Link
                  to="/reviews"
                  alt={'read at Reviews page'}
                  className="text-slate-200/60 hover:text-amber-500 animate-pulse text-[16px] items-center transition-all duration-500"
                >
                  {} more
                </Link>
              </>
            ) : (
              text
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}

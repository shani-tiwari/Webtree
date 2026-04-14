import { cn } from "../../../utils/utils.js";
import { HugeiconsIcon } from "@hugeicons/react";
import { NewTwitterRectangleIcon } from "@hugeicons/core-free-icons";
import { Link } from "react-router";
import { useLocation } from "react-router";

export default function ReviewCard({ xProfile, gender, text, bgColor, date }) {
  const profileImage = gender === "female" ? "/user-imgs/female.png" : "/user-imgs/male.jpg";
  const location = useLocation();
  return (
      <Link 
        to={"/webtree-reviews"}
        style={{ backgroundColor: bgColor || "#0a0a0a"}}
        className={cn(
          "relative group flex flex-col w-[290px] md:w-[320px] py-4 px-5 rounded-[24px] border-2 border-zinc-500/50 shadow-lg shrink-0 backdrop-blur-sm",
          "hover:border-amber-500/50 transition-all duration-200 hover:shadow-amber-500/10"
        )}
      >

        <div className="w-full flex flex-col items-start gap-4">

          <div className="flex items-center gap-3 w-full">

            {/* Profile Image */}
            <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-zinc-700/50 bg-zinc-900 shrink-0 shadow-inner">
              <img
                src={profileImage}
                alt={xProfile}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 hover:scale-100 transition-transform duration-300"
              />
            </div>

            {/* User Info & Date Container */}
            <div className="flex flex-col gap-2 min-w-0">
              <div className="wavy-underline-pulse pb-0.5">
                <a
                  href={`https://x.com/${xProfile.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-bold text-amber-500/90 hover:text-amber-400 transition-colors flex items-center gap-1.5 truncate"
                  onClick={(e) => e.stopPropagation()}
                >
                  {xProfile.startsWith("@") ? xProfile : `@${xProfile}`}
                  <HugeiconsIcon icon={NewTwitterRectangleIcon} size={18} className="shrink-0" />
                </a>
              </div>
              
              {/* Date span - now below ID */}
              <span className="w-fit text-[10px] px-2 py-[0.5px] bg-zinc-200/20 rounded-full text-zinc-400 font-medium tracking-wide">
                {date}
              </span>
            </div>
              
          </div>

          {/* Review Text */}
          <div className="relative w-full">
            <span className="absolute -top-4 -left-1 text-5xl text-zinc-700/40 font-serif leading-none select-none italic">
              "
            </span>
            <p className="group-hover:text-zinc-100 font-sans transition-colors duration-200 text-zinc-300 text-[15px] leading-relaxed tracking-normal relative z-10 italic grow pl-1">
              {
                location.pathname !== "/webtree-reviews" ? (
                  <>
                    {text.slice(0, 100)}... 
                    <Link
                      to="/webtree-reviews"
                      className="text-slate-200/80 hover:text-amber-500 animate-pulse text-lg items-center group-hover:tracking-wider transition-all duration-500"
                    >
                      { } more
                    </Link>
                  </>
                ) : (
                  text
                )
              }
            </p>
          </div>

        </div>


      </Link>
  );
}

import { cn } from "../../../utils/utils.js";
import { HugeiconsIcon } from "@hugeicons/react";
import { NewTwitterRectangleIcon } from "@hugeicons/core-free-icons";
import { Link } from "react-router";
import { useLocation } from "react-router";

export default function ReviewCard({ xProfile, gender, text, bgColor }) {
  const profileImage = gender === "female" ? "/user-img/female.png" : "/user-img/male.jpg";
  const location = useLocation();
  return (
    <Link 
      to={"/webtree-reviews"}
      style={{ backgroundColor: bgColor || "#0a0a0a"}}
      className={cn(
        "relative group flex flex-col w-full md:w-[350px] py-3 px-4 rounded-[20px] border-2 border-zinc-500 shadow-lg shrink-0",
        "hover:border-zinc-400 transition-all duration-200 hover:leading-4"
      )}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900 shrink-0">
            <img
              src={profileImage}
              alt={xProfile}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 hover:scale-102 transition-all duration-300"
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col">
            {/* <h4 className="text-white/90 font-semibold text-[15px]">{name}</h4> */}
            <a
              href={`https://x.com/${xProfile.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500-op80 underline underline-offset-8 hover:text-amber-500 hover:translate-x-2 text-lg flex items-center group-hover:tracking-tight transition-all duration-500 w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              {xProfile.startsWith("@") ? xProfile : `@${xProfile}`}
            </a>
          </div>
        </div>

        {/* twitter profile */}
        <Link target="_blank" rel="noopener noreferrer" to={`https://x.com/${xProfile.replace("@", "")}`}>
          <HugeiconsIcon icon={NewTwitterRectangleIcon} size={30} 
            className="text-amber-500-op70  hover:text-amber-400-op90 hover:scale-110 hover:translate-y-2 transition-all duration-300 w-fit" 
          />
        </Link>

      </div>

      {/* Review Text */}
      <div className="relative grow">
        <span className="absolute -top-3 -left-2 text-4xl text-zinc-600 font-serif leading-none select-none animate-pulse">
          "
        </span>
        <p className="group-hover:text-zinc-200 transition-all duration-150 text-zinc-300 text-sm leading-[20px] tracking-wide relative z-10 font-mono italic grow">
          {
            location.pathname !== "/webtree-reviews" ? (
              <>
                {text.slice(0, 100)}... 
                <Link
                  to="/webtree-reviews"
                  className="text-slate-200/80 hover:text-slate-200 animate-pulse text-lg items-center group-hover:tracking-wider transition-all duration-500"
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
    </Link>
  );
}

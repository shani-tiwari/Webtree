import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "../../utils/utils.js";
import CustomSVG from "./CustomSVG";

const SkeletonExplore = () => {
  const categoryWidths = [ 70, 95, 80, 110, 75, 85, 100, 90 ];

  return (
    <SkeletonTheme baseColor="#18181b" highlightColor="#27272a">
      {/* main section matching Explore.jsx */}
      <section
        id="explore-skeleton"
        className="w-full h-fit max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-10 pt-30"
      >
        <h1 className="sr-only">Loading Explore Web Dev Resources</h1>

        {/* Header */}
        <header
          className={cn("w-full flex justify-center text-center px-4 md:px-6 select-none")}
        >
          <div className="w-fit">
            <Skeleton width={180} height={35} borderRadius={8} className="md:w-[250px] md:h-[45px]" />
          </div>
        </header>

        {/* categories & SVG */}
        <section
          className={cn("select-none w-full flex flex-col gap-4 md:gap-8 px-1 md:px-14")}
        >
          {/* categories */}
          <aside
            className={cn(
              "z-40 gap-1 md:gap-2 w-full h-fit px-2 md:py-3 md:pt-4 mb-8 max-w-4xl mx-auto shrink-0",
              "flex flex-wrap justify-center rounded-xl text-white backdrop-blur-sm",
            )}
          >
            {categoryWidths.map((w, i) => (
              <div key={i} className="mb-2">
                <Skeleton
                  width={w}
                  height={30}
                  borderRadius={14}
                  className="md:h-[34px]"
                />
              </div>
            ))}
          </aside>

          {/* divider - SVG */}
          <div
            className={cn("-mt-4 md:-mt-10 pointer-events-none z-50 relative flex justify-center w-full")}
          >
              <CustomSVG />
          </div>
        </section>

        {/* cards */}
        <section className="w-full flex justify-center mb-20 overflow-hidden">
          <div className="relative w-full min-h-fit">
            <section
              className={cn(
                "w-full z-10 px-2 md:px-4 lg:px-0 container left-0 right-0 mx-auto bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]",
                "content-start mt-2 md:mt-12"
              )}
            >
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className={cn("w-full h-full block p-1")}>
                  <article
                    className={cn(
                      "relative h-full min-h-[220px] flex flex-col bg-[#080808]/80 backdrop-blur-md border border-zinc-800 rounded-4xl p-4 shadow-lg",
                    )}
                  >
                    {/* Action Icons Section */}
                    <div
                      className={cn(
                        "absolute top-7 right-3 flex gap-3.5 items-center z-40",
                      )}
                    >
                      <Skeleton width={28} height={28} borderRadius={8} />
                      <Skeleton width={28} height={28} borderRadius={8} />
                      <Skeleton width={28} height={28} borderRadius={8} />
                    </div>

                    {/* logo */}
                    <div
                      className={cn(
                        "p-2 w-fit mb-2 rounded-2xl bg-neutral-900/50 flex items-center justify-center border-2 border-white/5",
                      )}
                    >
                      <Skeleton width={32} height={32} borderRadius={16} />
                    </div>

                    {/* title */}
                    <div className={cn("pl-1 mt-1 mb-[10px]")}>
                      <Skeleton width="60%" height={24} borderRadius={6} />
                    </div>

                    {/* divider */}
                    <span className="w-[95%] h-[0.3px] bg-white/10 mb-[5px] ml-1"></span>

                    {/* Description */}
                    <div className="ml-1 mt-2 grow flex flex-col gap-2">
                      <Skeleton width="100%" height={14} borderRadius={4} />
                      <Skeleton width="85%" height={14} borderRadius={4} />
                      <Skeleton width="40%" height={14} borderRadius={4} />
                    </div>
                  </article>
                </div>
              ))}
            </section>
          </div>
        </section>
      </section>
    </SkeletonTheme>
  );
};

export default SkeletonExplore;

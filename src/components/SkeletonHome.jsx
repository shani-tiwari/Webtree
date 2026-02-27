import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "../lib/utils";

const SkeletonHome = () => {
  return (
    <SkeletonTheme baseColor="#333" highlightColor="#555">
      <main
        className={cn(
          "min-h-screen h-fit max-w-screen mx-auto flex flex-col items-center gap-10 md:gap-10 mt-1",
        )}
      >
        {/* navbar */}
        <nav className="w-full h-32 mx-auto">
          <Skeleton height={`40%`} width={`100%`} borderRadius={30} />
        </nav>


        <section
          className={cn(
            "grow w-full flex flex-col items-center justify-center gap-10 px-1 md:px-14",
          )}
        >
          {/* category Skeleton */}
          <aside
            className={cn(
              " w-full  mx-auto flex gap-3 shrink-0 flex-wrap pt-20 h-fit px-2 py-3",
            )}
          >
            {Array(16)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} height={30} width={85} borderRadius={12} />
              ))}
          </aside>

          {/* Cards Grid Skeleton */}
          <section
            className={cn(
              " md:grow md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:mt-30",
            )}
          >
            {Array(12)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "aspect-square bg-black/40 rounded-xl p-3 flex flex-col justify-between border border-white/5",
                  )}
                >
                  <div className={cn("flex flex-col gap-3")}>
                    <Skeleton circle width={40} height={40} />
                  </div>
                    <Skeleton width={`60%`} height={20} />
                  <Skeleton width={`90%`} height={15} count={2} />
                </div>
              ))}
          </section>
        </section>
      </main>
    </SkeletonTheme>
  );
};

export default SkeletonHome;

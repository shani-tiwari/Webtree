import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "../lib/utils";

const SkeletonHome = () => {
  return (
    <SkeletonTheme baseColor="#333" highlightColor="#555">
      <main
        className={cn(
          "min-h-screen h-fit max-w-screen flex flex-col gap-10 md:gap-10",
        )}
      >
        <section
          className={cn(
            "grow w-full flex flex-col md:flex-row lg:flex-row justify-center gap-10 px-1 md:px-14",
          )}
        >
          {/* Sidebar Skeleton */}
          <aside
            className={cn(
              "shrink-0 w-full md:w-64 md:pt-30 pt-20 h-fit px-2 py-3 flex flex-col gap-2",
            )}
          >
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} height={40} borderRadius={8} />
              ))}
          </aside>

          {/* Cards Grid Skeleton */}
          <section
            className={cn(
              "hidden md:grow md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:mt-30",
            )}
          >
            {Array(12)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "aspect-square bg-black/40 rounded-lg p-3 flex flex-col justify-between border border-white/5",
                  )}
                >
                  <div className={cn("flex flex-col gap-3")}>
                    <Skeleton circle width={40} height={40} />
                    <Skeleton width={`60%`} height={20} />
                  </div>
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

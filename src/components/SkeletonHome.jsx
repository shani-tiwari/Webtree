import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonHome = () => {
  return (
    <SkeletonTheme baseColor="#333" highlightColor="#555">
      <main className="min-h-screen h-fit max-w-screen flex flex-col gap-10 md:gap-10">
        {/* Navbar Skeleton */}
        <nav className="h-16 md:h-22 z-90 fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] px-8 py-3 flex justify-between items-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md mt-4">
          <Skeleton circle width={40} height={40} />
          <div className="hidden md:flex gap-4">
            <Skeleton width={30} height={30} circle />
            <Skeleton width={30} height={30} circle />
          </div>
          <div className="md:hidden">
            <Skeleton width={30} height={30} circle />
          </div>
        </nav>

        <section className="grow w-full flex flex-col md:flex-row lg:flex-row justify-center gap-10 px-1 md:px-14">
          {/* Sidebar Skeleton */}
          <aside className="shrink-0 w-full md:w-64 md:pt-30 pt-20 h-fit px-2 py-3 flex flex-col gap-2">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} height={40} borderRadius={8} />
              ))}
          </aside>

          {/* Cards Grid Skeleton */}
          <section className="hidden md:grow md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:mt-30">
            {Array(12)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-black/40 rounded-lg p-3 flex flex-col justify-between border border-white/5"
                >
                  <div className="flex flex-col gap-3">
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

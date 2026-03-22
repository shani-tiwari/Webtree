import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import Categories from "../components/features/collection/Categories";
import Card from "../components/features/collection/Card";
import SkeletonHome from "../components/ui/SkeletonHome";
import ReviewSection from "../components/features/reviews/ReviewSection";
import { cn } from "../utils/utils.js";
import CustomSVG from "../components/ui/CustomSVG";

import { useCollectionData } from "../hooks/useCollectionData";

export default function Home() {
  const { data, loading } = useCollectionData();
  const [activeCategory, setActiveCategory] = useState("animation");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const carddata = data[activeCategory] || [];

  if (loading) {
    return <SkeletonHome />;
  }

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="w-full h-fit max-w-[1300px] flex flex-col gap-10 md:gap-10"
    >
      <h1 className="sr-only">WebTree Resources Directory</h1>

      {/* Screen reader live region for announcing category changes */}
      <div className={cn("sr-only")} aria-live="polite" role="status">
        {activeCategory
          ? `Showing ${activeCategory.split("_").join(" ")} resources`
          : ""}
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "w-full text-white/80 text-center px-4 md:px-6 font-semibold font-beba pt-20 md:pt-30",
        )}
      >
        <div
          className={cn(
            " text-xl font-bebas-neue md:text-[28px] flex flex-col gap-2 lg:flex-row md:gap-3 bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700 mx-auto w-fit  tracking-wider selection:bg-amber-600-op30 selection:text-white",
          )}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span
              className={cn(
                "wavy-underline-pulse w-fit bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700",
              )}
            >
              130+
            </span>
          </motion.div>
          <span className="font-mono text-2xl md:text-[32px]">Development Resources,Click away</span>
        </div>
      </motion.header>

      {/* categories & cards */}
      <section
        className={cn("w-full flex flex-col gap-4 md:gap-8 px-1 md:px-14")}
      >
        {/* categories */}
          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Category selection"
            className={cn(
              "z-40 gap-1 md:gap-2 w-full h-fit px-2 md:py-3 md:pt-4 mb-8 max-w-4xl mx-auto shrink-0 flex flex-wrap justify-center rounded-xl  text-white backdrop-blur-sm",
              isCollapsed ? "lg:mb-8" : "mb-6 lg:mb-0"
            )}
          >
            {
              Object.keys(data).slice(0, isCollapsed ? (5+3) : undefined).map((name, index) => (
                <Categories
                  key={index}
                  name={name}
                  index={index}
                  data={data}
                  isActive={activeCategory === name}
                  setActiveCategory={setActiveCategory}
                />
              ))
            }
            {
              Object.keys(data).length > 5 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className={cn(
                    "relative w-fit group border border-white/30 py-[3px] px-3 md:py-1.5 md:px-4 mb-2 rounded-[12px] md:rounded-[14px]",
                    "backdrop-blur-md cursor-pointer hover:transition-colors transition-all duration-50 ease-out select-none shadow-xs shadow-white/8 hover:shadow-[0_4px_15px_rgba(0,0,0,0.6)]",
                    "bg-zinc-800/20 hover:bg-zinc-800/40 text-amber-500 font-medium text-sm"
                  )}
                >
                  {isCollapsed ? "More..." : "Less"}
                </motion.button>
              )
            }

          </motion.aside>

          {/* divider */}
          <div className={cn(" -mt-4 md:-mt-12 pointer-events-none ")}>
            <CustomSVG />
          </div>

          {/* Cards Section */}
          <motion.section
            layout
            aria-label="Resources grid"
            className={cn(
              "z-10 container bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] content-start mt-2 md:mt-10"
            )}
          >
            <AnimatePresence mode="popLayout">
              {Object.values(carddata).slice(0, isCollapsed ? 5 : undefined).map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    id={item.id}
                    title={item.name}
                    logo={item.logo}
                    link={item.link}
                    desc={item.desc}
                    category={activeCategory}
                  />
                </motion.div>
              ))}
              {
                Object.keys(data).length > 5 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {setIsCollapsed(!isCollapsed); !isCollapsed && scrollTo();}}
                    className={cn(
                      "relative w-[80%] mx-auto group border border-white/30 py-2 px-3 md:py-1.5 md:px-4 mb-2 rounded-[16px]",
                      "backdrop-blur-md cursor-pointer hover:transition-colors transition-all duration-50 ease-out select-none shadow-xs shadow-white/8 hover:shadow-[0_4px_15px_rgba(0,0,0,0.6)]",
                      "bg-zinc-800/20 hover:bg-zinc-800/40 text-amber-500 font-medium text-lg"
                    )}
                  >
                    {isCollapsed ? "Show More..." : "Show Less..."}
                  </motion.button>
                )
              }  
            </AnimatePresence>
          </motion.section>
      </section>

      {/* Review Section */}
      <ReviewSection />
    </section>
  );
}

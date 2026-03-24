import { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, easeInOut } from "motion/react";
import Categories from "../components/features/collection/Categories";
import Card from "../components/features/collection/Card";
import SkeletonHome from "../components/ui/SkeletonHome";
import ReviewSection from "../components/features/reviews/ReviewSection";
import { cn } from "../utils/utils.js";
import CustomSVG from "../components/ui/CustomSVG";

import { useCollectionData } from "../hooks/useCollectionData";
import { HugeiconsIcon } from "@hugeicons/react";
import { DragLeft02Icon, DragRight02Icon, MoveLeftIcon, MoveRightIcon } from "@hugeicons/core-free-icons";

export default function Home() {
  const { data, loading } = useCollectionData();
  const [activeCategory, setActiveCategory] = useState("tools");

  const [isCollapsed, setIsCollapsed] = useState(true);

  const carddata = data[activeCategory] || [];

  if (loading) {
    return <SkeletonHome />;
  }

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
        transition={{ duration: 0.3, delay: 0.2 , ease: "easeOut" }}
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
            <h1
              className={cn(
                "wavy-underline-pulse w-fit bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700",
              )}
            >
              130+
            </h1>
          </motion.div>
          <h1 className="font-mono md:-mt-[3px] text-2xl md:text-[32px] hover:tracking-wide transition-all duration-500">Development Resources</h1>
        </div>
      </motion.header>

      {/* categories & cards */}
      <motion.section
        layout
        transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
        className={cn("w-full flex flex-col gap-4 md:gap-8 px-1 md:px-14")}
      >
        {/* categories */}
        <motion.aside
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut", layout: { duration: 0.35, ease: "easeInOut" } }}
          aria-label="Category selection"
          className={cn(
            "z-40 gap-1 md:gap-2 w-full h-fit px-2 md:py-3 md:pt-4 mb-8 max-w-4xl mx-auto shrink-0 flex flex-wrap justify-center rounded-xl text-white backdrop-blur-sm",
            isCollapsed ? "lg:mb-8" : "mb-6 lg:mb-0"
          )}
        >
          <AnimatePresence mode="popLayout">
            {
              Object.keys(data).slice(0, isCollapsed ? (5 + 3) : undefined).map((name, index) => (
                <Categories
                  key={name}
                  name={name}
                  index={index}
                  data={data}
                  isActive={activeCategory === name}
                  setActiveCategory={setActiveCategory}
                />
              ))
            }
          </AnimatePresence>
          {
            Object.keys(data).length > 5 && (
              <motion.button
                layout
                whileHover={{ scale: 1.05, transition:{ duration: 0.1} }}
                whileTap={{ scale: 0.94, transition:{ duration: 0.1} }}
                transition={{ duration: 0.1, ease: 'easeIn' }}
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={cn(
                  "relative w-fit group border-2 border-amber-500/30 py-[3px] px-3 md:py-1.5 md:px-4 mb-2 rounded-[12px] md:rounded-[36px]",
                  "cursor-pointer transition-all duration-50 ease-out select-none shadow-xs shadow-white/8 hover:shadow-[0_0_30px_rgba(255,190,0,0.8)]",
                  "bg-amber-500/15 hover:bg-amber-800/40 text-amber-200 tracking-wide transition-all duration-200"
                )}
              >
                {isCollapsed ? "More" : "Less"}
              </motion.button>
            )
          }
        </motion.aside>

          {/* divider */}

          <motion.div
            layout
            transition={{ layout: { duration: 0.5, ease: "easeOut" } }}
            className={cn("-mt-4 md:-mt-12 pointer-events-none z-50 relative")}>
            <CustomSVG />
          </motion.div>

          {/* Cards Section */}
          <ResourceGallery
            key={activeCategory}
            carddata={carddata}
            activeCategory={activeCategory}
          />

      </motion.section>

      {/* Review Section */}
      <ReviewSection />
    </section>
  );
}

function ResourceGallery({ carddata, activeCategory }) {
  const [CardShow, setCardShow] = useState(5);
  const cardRefs = useRef([]);
  const [shouldScrollIdx, setShouldScrollIdx] = useState(-1);

  useEffect(() => {
    if (shouldScrollIdx !== -1) {
      // Small timeout or requestAnimationFrame to ensure the new card is in the DOM
      // const scrollTimeout = setTimeout(() => {
        const targetEl = cardRefs.current[shouldScrollIdx];
        if (targetEl) {
          const rect = targetEl.getBoundingClientRect();
          const scrollY = window.scrollY || window.pageYOffset;
          // Center the target card on the screen
          const targetY = rect.top + scrollY - (window.innerHeight / 2) + (rect.height / 2);

          window.scrollTo({
            top: targetY,
            behavior: "smooth"
          });
          // setShouldScrollIdx(-1);
        }
      // }, 50);

      // return () => clearTimeout(scrollTimeout);
    }
  }, [CardShow, shouldScrollIdx]);

  const handleShowMore = () => {
    const nextLimit = Math.min(CardShow + 5, carddata.length);
    setCardShow(nextLimit);
    setShouldScrollIdx(nextLimit - 1);
  };

  const handleShowLess = () => {
    const newShowCount = Math.max(5, CardShow - 5);
    setCardShow(newShowCount);
    setShouldScrollIdx(newShowCount - 1);
  };

  return (
    <motion.section
      layout
      aria-label="Resources grid"
      className={cn(
        "z-10 container bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] content-start mt-2 md:mt-10 transition-all duration-300"
      )}
    >
      <AnimatePresence mode="popLayout">
        {carddata.slice(0, CardShow).map((item, index) => {
          return <motion.div
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0, scale: 0.9 }}
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
        })}
        {
          carddata.length > 5 && (
            <div className=" flex items-center justify-center">

              <div className="flex flex-col flex-wrap justify-center gap-4 p-2 md:p-3 rounded-[20px] bg-zinc-800/10 border border-white/10 backdrop-blur-md w-full max-w-sm mx-auto">
                {CardShow < carddata.length && (
                  <motion.button
                    layout
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    onClick={handleShowMore}
                    className={cn(
                      "relative flex justify-center items-center gap-4 flex-1 group border border-white/20 py-2 px-4 rounded-[14px]",
                      "backdrop-blur-md cursor-pointer transition-all duration-200 ease-out select-none shadow-xs shadow-white/8 hover:shadow-[0_4px_10px_rgba(0,0,0,0.4)]",
                      "bg-zinc-800/30 hover:bg-zinc-800/50 font-mono text-amber-500 font-semibold text-base md:text-lg"
                    )}
                  >
                    <p>Show More</p>
                    <HugeiconsIcon icon={DragRight02Icon} size={24} className="animate-pulse" />
                  </motion.button>
                )}
                {CardShow > 5 && (
                  <motion.button
                    layout
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    onClick={handleShowLess}
                    className={cn(
                      "relative flex justify-center items-center gap-4 flex-1 group border border-white/20 py-2 px-4 rounded-[14px]",
                      "backdrop-blur-md cursor-pointer transition-all duration-200 ease-out select-none shadow-xs shadow-white/8 hover:shadow-[0_4px_10px_rgba(0,0,0,0.4)]",
                      "bg-zinc-800/30 hover:bg-zinc-800/50 text-amber-500 font-mono font-semibold text-base md:text-lg"
                    )}
                  >
                    <HugeiconsIcon icon={DragLeft02Icon} size={24} className="animate-pulse"  />
                    Show Less
                  </motion.button>
                )}

              </div>
            </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

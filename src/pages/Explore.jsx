import React, { useState, Suspense } from "react";
import { useParams, useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../utils/utils.js";
import SkeletonHome from "../components/ui/SkeletonHome";
import { useCollectionData } from "../hooks/useCollectionData";

const Categories = React.lazy(() => import("../components/features/collection/Categories"));
const CustomSVG  = React.lazy(() => import("../components/ui/CustomSVG"));
const CardsGrid  = React.lazy(() => import("../components/layout/CardsGrid.jsx"));

export default function Explore() {

  const { category } = useParams();
  console.log(category)
  const navigate = useNavigate();

  const { data, loading } = useCollectionData();
  const [activeCategory, setActiveCategory] = useState(category);

  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
    navigate(`/explore/${newCategory}`);
  };

  if (loading) {
    return <SkeletonHome />;
  }

  const cardData =
    data && activeCategory && data[activeCategory] ? data[activeCategory] : [];

  return (
    <section
      id="explore"
      className="w-full h-fit max-w-[1300px] flex flex-col gap-10 md:gap-10 pt-30"
    >
      <h1 className="sr-only">Explore Web Dev Resources</h1>

      {/* Screen reader live region for announcing category changes */}
      <div className={cn("sr-only")} aria-live="polite" role="status">
        {activeCategory
          ? `Showing ${activeCategory.split("_").join(" ")} resources`
          : ""}
      </div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
        className={cn("w-full text-white/80 text-center px-4 md:px-6")}
      >
        <h1 className={cn(
            "wavy-underline-pulse text-2xl md:text-[32px] font-black italic tracking-[-0.03em] w-fit bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700 capitalize",
          )}
        >
          {activeCategory.replace("_", " ")}
        </h1>
      </motion.h1>

      {/* categories & cards */}
      <motion.section
        layout
        transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
        className={cn(
          "w-full flex flex-col gap-4 md:gap-8 px-1 md:px-14 pb-20",
        )}
      >
        {/* categories */}
        <motion.aside
          layout
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            layout: { duration: 0.3, ease: "easeInOut" },
          }}
          aria-label="Category selection"
          className={cn(
            "z-40 gap-1 md:gap-2 w-full h-fit px-2 md:py-3  md:pt-4 mb-8 max-w-4xl mx-auto shrink-0",
            "flex flex-wrap justify-center rounded-xl text-white backdrop-blur-sm",
          )}
        >
          <Suspense
            fallback={
              <div className="text-white text-sm">Loading Categories...</div>
            }
          >
            <AnimatePresence mode="popLayout">
              {Object.keys(data || {}).map((name, index) => (
                <Categories
                  key={name}
                  name={name}
                  index={index}
                  isActive={activeCategory === name}
                  setActiveCategory={handleCategoryChange}
                />
              ))}
            </AnimatePresence>
          </Suspense>
        </motion.aside>

        {/* divider - SVG */}
        <motion.div
          layout
          transition={{ layout: { duration: 0.5, ease: "easeOut" } }}
          className={cn("-mt-4 md:-mt-10 pointer-events-none z-50 relative")}
        >
          <Suspense fallback={<div />}>
            <CustomSVG />
          </Suspense>
        </motion.div>

        {/* Cards Section */}
        <Suspense fallback={<SkeletonHome />}>
          <CardsGrid
            carddata={cardData}
            activeCategory={activeCategory}
            show="all"
          />
        </Suspense>
      </motion.section>
    </section>
  );
}

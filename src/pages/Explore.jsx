import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { cn } from "../utils/utils.js";
import { SkeletonExplore, CustomSVG } from "../components/ui";
import { useCollectionData } from "../hooks/useCollectionData";

import { Categories } from "../components/features/collection";
import { CardsGrid } from "../components/layout";

export default function Explore() {
  const { category } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useCollectionData();
  const [activeCategory, setActiveCategory] = useState(category);

  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
    navigate(`/explore/${newCategory}`);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const cardData =
    data && activeCategory && data[activeCategory] ? data[activeCategory] : [];

  if (loading) {
    return <SkeletonExplore />;
  }

  return (
    <>
      {/* main section */}
      <section
        id="explore"
        className="min-h-screen h-fit max-w-[1200px] flex flex-col gap-10 md:gap-10 pt-30"
      >
        <h1 className="sr-only">Explore DeveloperResources</h1>

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
          className={cn(
            "w-full text-white/80 text-center px-4 md:px-6 select-none",
          )}
        >
          <h1
            className={cn(
              "wavy-underline-pulse text-2xl md:text-[32px] font-black tracking-[-0.03em] w-fit bg-clip-text text-transparent bg-linear-to-b from-amber-400 to-amber-600 capitalize",
            )}
          >
            {activeCategory.replace("_", " ")}
            <span className="absolute text-xs -right-5 top-0 text-amber-500/80 font-semibold selection:bg-zinc-600/30 selection:text-white">
              ({data[activeCategory].length})
            </span>
          </h1>
        </motion.h1>

        {/* categories & SVG */}
        <motion.section
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "select-none w-full flex flex-col gap-4 md:gap-8 md:px-14",
          )}
        >
          {/* categories */}
          <motion.aside
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Category selection"
            className={cn(
              "z-40 px-4 gap-2 w-full h-fit md:py-3 md:pt-4 mb-8 max-w-4xl mx-auto shrink-0",
              "flex flex-wrap justify-center rounded-xl text-white backdrop-blur-sm",
            )}
          >
            {Object.keys(data || {}).map((name, index) => (
              <Categories
                key={name}
                name={name}
                index={index}
                isActive={activeCategory === name}
                setActiveCategory={handleCategoryChange}
              />
            ))}
          </motion.aside>

          {/* divider - SVG */}
          <motion.div
            layout
            transition={{ layout: { duration: 0.5, ease: "easeOut" } }}
            className={cn(" md:-mt-10 pointer-events-none z-50 relative")}
          >
            <CustomSVG />
          </motion.div>
        </motion.section>

        {/* cards */}
        <section className="w-full flex justify-center mb-20 overflow-hidden ">
          <CardsGrid
            carddata={cardData}
            activeCategory={activeCategory}
            show="all"
          />
        </section>
      </section>
    </>
  );
}

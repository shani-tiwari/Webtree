import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../utils/utils.js";
import { CustomSVG, SkeletonHome, MagneticButton } from "../components/ui";
import { Categories } from "../components/features/collection";
import { ReviewSection } from "../components/features/reviews";
import { CardsGrid } from "../components/layout";
import { useCollectionData } from "../hooks/useCollectionData";
import { Rocket01Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-router";
import InstallDialogue from "../components/ui/InstallDialogue.jsx";

export default function Home() {
  const { data, loading } = useCollectionData();
  const [activeCategory, setActiveCategory] = useState("be_pro");

  // const [isCollapsed, setIsCollapsed] = useState(true);
  const carddata = data[activeCategory] || [];

  if (loading) {
    return <SkeletonHome />;
  }
  return (
    <>
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


        {/* install dialogue */}
        <div className="absolute p-4 top-100 left-0 right-0 md:left-auto md:top-20 md:right-6 z-99"> 
          <InstallDialogue />
        </div>


        {/* Header */}
        <Header />

        {/* categories & cards */}
        <motion.section
          layout
          viewport={{ once: true }}
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
          className={cn("w-full flex flex-col gap-4 md:gap-8 px-1 md:px-14")}
        >
          {/* categories */}
          <motion.aside
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
            }}
            aria-label="Category selection"
            className={cn(
              "z-40 gap-2 md:gap-3 px-4 w-full h-fit md:pt-4 mb-6 md:mb-12 max-w-4xl mx-auto shrink-0",
              "flex flex-wrap justify-center rounded-xl text-white backdrop-blur-sm",
            )}
          >
            {Object.keys(data)
              .slice(0, 7)
              .map((name, index) => (
                <Categories
                  key={name}
                  name={name}
                  index={index}
                  isActive={activeCategory === name}
                  setActiveCategory={setActiveCategory}
                />
              ))}
          </motion.aside>

          {/* divider - SVG */}
          <motion.div
            layout
            viewport={{ once: true }}
            transition={{ layout: { duration: 0.45, ease: "easeOut" } }}
            className={cn("md:-mt-10 pointer-events-none z-50 relative")}
          >
            <CustomSVG />
          </motion.div>


          {/* Cards Section */}
          <CardsGrid
            carddata={carddata}
            activeCategory={activeCategory}
            show={"less"}
            />
          
          <div className="w-full flex flex-col gap-2  mt-4">
            {/* explore page button */}
            <Link
              to={`${(activeCategory && "explore/" + activeCategory) || "/explore"}`}
              className={cn(
                "group select-none w-fit mx-auto mt-0 flex gap-2 text-white font-medium px-6 py-2 border-2 border-amber-500/70  bg-linear-to-t from-amber-600 to-amber-800 rounded-xl",
                "shadow-sm shadow-amber-500/50 text-shadow-lg text-shadow-black/20 hover:shadow-[0_0_20px_rgba(255,190,0,0.2)] hover:scale-102 active:scale-98 transition-all duration-300",
              )}
            >
              Explore All Resources
              <MagneticButton icon={Rocket01Icon} />
            </Link>
          </div>
        </motion.section>

        {/* Review Section */}
        <ReviewSection />
      </section>
    </>
  );
}

function Header() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn("w-full text-white/80 text-center px-6 pt-20 md:pt-28")}
      >
        <div
          className={cn(
            "text-xl md:text-[28px] mx-auto w-full selection:bg-amber-600/30 selection:text-white",
          )}
        >
          <h1
            className={cn(
              "wavy-underline-pulse max-w-72 w-fit md:max-w-fit font-serif tracking-[-0.02em]  bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700",
              "text-shadow-lg text-shadow-amber-700/20 hover:tracking-tight transition-all duration-500",
            )}
          >
            Find & Save, <span className="font-mono">140+</span> Development
            Resources faster.
            {/* <span className="inline-block -rotate-90 text-amber-500 px-px">४</span>  */}
          </h1>
        </div>
      </motion.h1>
    </>
  );
}

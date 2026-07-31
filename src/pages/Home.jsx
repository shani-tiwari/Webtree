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
import { Helmet } from "react-helmet";

export default function Home() {
  const { data, loading } = useCollectionData();
  const [activeCategory, setActiveCategory] = useState("web_design");

  // const [isCollapsed, setIsCollapsed] = useState(true);
  const carddata = data[activeCategory] || [];

  if (loading) {
    return <SkeletonHome />;
  }
  return (
    <>
      {/* helmet - SEO */}
      <Helmet>
        <title>WebTree | Developer Resources</title>
        <meta
          name="description"
          content="Webtree help developers to find & save best development resources in one place.."
        />
        <meta name="author" content="Shani Tiwari" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#030303" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ShaniDevelops" />
        <meta
          name="twitter:title"
          content="About Webtree - Collection of Web Development Resources"
        />
        <meta
          name="twitter:description"
          content="Webtree help developers to find & save best development resources in one place.."
        />
        <meta
          name="twitter:image"
          content="https://webtree.shaniweb.com/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="webtree" />
        <meta property="og:url" content="https://webtree.shaniweb.com/about" />
        <meta
          property="og:title"
          content="Webtree - Collection of Web Development Resources"
        />
        <meta
          property="og:description"
          content="Webtree help developers to find & save best development resources in one place.."
        />
        <meta
          property="og:image"
          content="https://webtree.shaniweb.com/og-image.png"
        />
      </Helmet>

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
        <Header />
        {/* <h2 className="mx-auto text-white text-sm tracking-wide bg-white/10 py-2 px-4 rounded-xl">
            Discover & Bookmark useful resources faster.
          </h2> */}

        {/* categories & cards */}
        <motion.section
          layout
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
          className={cn("w-full flex flex-col gap-4 md:gap-8 px-1 md:px-14")}
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
              "z-40 gap-1 md:gap-2 w-full h-fit md:pt-4 mb-6 md:mb-12 max-w-4xl mx-auto shrink-0",
              "flex flex-wrap justify-center rounded-xl text-white backdrop-blur-sm",
              // isCollapsed ? " lg:mb-8" : " lg:mb-6",
            )}
          >
            <AnimatePresence mode="popLayout">
              {Object.keys(data)
                .slice(0, 8)
                .map((name, index) => (
                  <Categories
                    key={name}
                    name={name}
                    index={index}
                    isActive={activeCategory === name}
                    setActiveCategory={setActiveCategory}
                  />
                ))}
            </AnimatePresence>
            {/* <motion.button
                transition={{ duration: 0, ease: "easeInOut" }}
                className={cn(
                  "relative w-fit text-[14px] font-semibold group border-2 border-amber-500/30 py-0.75 px-3 md:py-2 md:px-4 mb-2 rounded-xl",
                  "cursor-pointer transition-all duration-50 ease-out select-none shadow-xs shadow-white/8 hover:shadow-[0_0_30px_rgba(255,190,0,0.8)]",
                  "bg-amber-500/15 hover:bg-amber-800/40 text-amber-200 tracking-wide hover:scale-103 active:scale-98 transition-transform duration-500",
                )}
              >
                more...
              </motion.button> */}
          </motion.aside>

          {/* divider - SVG */}
          <motion.div
            layout
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
            <MagneticButton
              text="Explore All Resources"
              to={`${(activeCategory && "explore/" + activeCategory) || "/explore"}`}
              icon={Rocket01Icon}
            />
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "w-full text-white/80 text-center px-4 md:px-6 pt-20 md:pt-28",
        )}
      >
        <div
          className={cn(
            " text-xl md:text-[32px] flex flex-col items-center gap-2 lg:flex-row md:gap-3 mx-auto w-fit selection:bg-amber-600/30 selection:text-white",
          )}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1
              className={cn(
                "wavy-underline-pulse tracking-[-0.03em] w-fit bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700 text-shadow-lg text-shadow-amber-700/20 hover:tracking-tighter transition-all duration-500",
              )}
            >
              140+ <span className="font-serif">Developer Resources</span>
            </h1>
          </motion.div>
        </div>
      </motion.h1>
    </>
  );
}

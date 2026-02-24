/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeIn } from "motion/react";
import Categories from "../components/Categories";
import Card from "../components/Card";
import SkeletonHome from "../components/SkeletonHome";
import { cn } from "../lib/utils";

export default function Home() {
  const [data, setData] = useState([]);
  const [carddata, setcardData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("video");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      await fetch(import.meta.env.VITE_PRIVATE_WEBSITE_COLLECTION_URL)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setcardData(data["video"]);
          setLoading(false);
        });
    }
    getData();
  }, []);

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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "w-full text-white/80 text-center px-4 md:px-6 font-semibold font-beba pt-20 md:pt-30",
        )}
      >
        <div
          className={cn(
            " text-xl md:text-[28px] flex flex-col gap-2 lg:flex-row md:gap-3 bg-clip-text text-transparent bg-linear-to-b from-amber-400 to-amber-700 mx-auto w-fit  tracking-wider selection:bg-amber-600/30 selection:text-white",
          )}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span
              className={cn(
                "wavy-underline-pulse w-fit bg-clip-text text-transparent bg-linear-to-b from-amber-400 to-amber-700",
              )}
            >
              130+
            </span>
          </motion.div>
          <span className="font-mono text-xl md:text-[30px]">Development Resources,One Click away</span>
        </div>
      </motion.header>

      {/* categories */}
      <section
        className={cn("grow w-full flex flex-col gap-4 md:gap-8 px-1 md:px-14")}
      >
        <motion.aside
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          aria-label="Category selection"
          className={cn(
            "z-40 max-w-4xl mx-auto shrink-0 flex flex-wrap justify-center rounded-xl gap-1 md:gap-2 w-full h-fit px-2 md:py-3 md:pt-4 text-white backdrop-blur-sm",
          )}
        >
          {Object.keys(data).map((name, index) => (
            <Categories
              key={index}
              name={name}
              index={index}
              setcardData={setcardData}
              data={data}
              isActive={activeCategory === name}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </motion.aside>

        {/* divider */}
        <motion.span 
          initial={{width:"0%"}}
          animate={{width:"99%"}}
          transition={{duration:0.7, delay:0.4, originX:50, ease: "easeOut"}}
          className=" h-[1.5px] mx-auto -mt-2 mb-2 bg-white/30 ">
        </motion.span>

        {/* Cards Section */}
        <motion.section
          layout
          aria-label="Resources grid"
          className={cn(
            "z-10 container bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] content-start md:-mt-3",
          )}
        >
          <AnimatePresence mode="popLayout">
            {Object.values(carddata).map((item) => (
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
          </AnimatePresence>
        </motion.section>
      </section>
    </section>
  );
}

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBtn from "../components/SideBtn";
import Card from "../components/Card";
// eslint-disable-next-line no-unused-vars
import { easeIn, motion } from "motion/react";

export default function Home() {
  const [data, setData] = useState([]);
  const [carddata, setcardData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ui_components");

  useEffect(() => {
    async function getData() {
      await fetch("./data/data.json")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setcardData(data["ui_components"]);
        });
    }
    getData();
  }, []);

  return (
    <>
      <main
        id="main-content"
        className="min-h-screen h-fit max-w-[1300px] flex flex-col gap-10 md:gap-10"
      >
        <h1 className="sr-only">WebTree Resources Directory</h1>

        {/* Screen reader live region for announcing category changes */}
        <div className="sr-only" aria-live="polite" role="status">
          {activeCategory
            ? `Showing ${activeCategory.split("_").join(" ")} resources`
            : ""}
        </div>

        <nav className="h-16 md:h-22 z-90 backdrop-blur-2xl fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px]">
          <Navbar />
        </nav>

        <header className="text-white/70 text-center font-beba w-full backdrop-blur-2xl md:backdrop-blur-none pt-20 md:pt-32">
          <h1 className="md:text-xl tracking-wider">
            Collection of Frontend Resources
          </h1>
        </header>

        <motion.section
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: easeIn }}
          className="grow  w-full flex flex-col md:flex-row lg:flex-row justify-center gap-10 px-1  md:px-14"
        >
          <aside
            aria-label="Category selection"
            className="z-40 sticky md:top-44 top-16 shrink-0 grid grid-cols-2 rounded-md
            md:grid-cols-1 gap-2 md:gap-0 w-full md:w-fit h-fit px-2 py-3 pt-5 
            text-white md:border border-white/40 bg-neutral-800/60 backdrop-blur-md shadow-lg 
            md:bg-transparent md:backdrop-blur-none md:shadow-none"
          >
            {Object.keys(data).map((name, index) => (
              <SideBtn
                key={index}
                name={name}
                index={index}
                setcardData={setcardData}
                data={data}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </aside>

          <section
            aria-label="Resources grid"
            className="z-10 container  overflow-hidden bg-transparent grow grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-4 gap-[10px] content-start md:-mt-3"
          >
            {Object.values(carddata).map((item) => (
              <Card
                key={item.id}
                title={item.name}
                logo={item.preview}
                link={item.link}
                desc={item.desc}
              />
            ))}
          </section>
        </motion.section>
      </main>
    </>
  );
}

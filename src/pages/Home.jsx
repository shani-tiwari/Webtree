import { useEffect, useState } from "react";
import SideBtn from "../components/SideBtn";
import Card from "../components/Card";
import SkeletonHome from "../components/SkeletonHome";

export default function Home() {
  const [data, setData] = useState([]);
  const [carddata, setcardData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("videos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      await fetch(import.meta.env.VITE_PRIVATE_WEBSITE_COLLECTION_URL)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setcardData(data["videos"]);
          setLoading(false);
        });
    }
    getData();
  }, []);

  if (loading) {
    return <SkeletonHome />;
  }

  return (
    <>
      <main
        id="main-content"
        className="w-full h-fit max-w-[1300px] flex flex-col gap-10 md:gap-10"
      >
        <h1 className="sr-only">WebTree Resources Directory</h1>

        {/* Screen reader live region for announcing category changes */}
        <div className="sr-only" aria-live="polite" role="status">
          {activeCategory
            ? `Showing ${activeCategory.split("_").join(" ")} resources`
            : ""}
        </div>

        <header className="w-full  text-white/80 text-center px-4 md:px-6 font-semibold font-beba pt-20 md:pt-30">
          <div className="flex flex-col md:flex-row items-center gap-2 bg-clip-text text-transparent bg-linear-to-b from-amber-500 to-amber-800 mx-auto w-fit md:text-[26px] text-2xl tracking-wider selection:bg-amber-600/30 selection:text-white">
            <div>
              <span className="wavy-underline-pulse w-fit mr-1 bg-clip-text text-transparent bg-linear-to-b from-amber-400 to-amber-800">
                100+
              </span>
            </div>
            <span className="">
              Frontend Resources, One Click Away
            </span>
          </div>
        </header>

        <section className="grow  w-full flex flex-col gap-4 md:gap-8 px-1  md:px-14">
          <aside
            aria-label="Category selection"
            className="z-40 shrink-0 flex flex-wrap justify-center rounded-xl gap-1 md:gap-2 w-full h-fit px-2 md:py-3 md:pt-4 text-white backdrop-blur-sm"
          >
            {Object.keys(data).map((name, index) => (
              <SideBtn
                key={index}
                name={name}
                index={index}
                setcardData={setcardData}
                data={data}
                isActive={activeCategory === name}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </aside>

          <section
            aria-label="Resources grid"
            className="z-10 container bg-transparent grow grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-4 gap-[14px] content-start md:-mt-3"
          >
            {Object.values(carddata).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.name}
                logo={item.logo}
                link={item.link}
                desc={item.desc}
                category={activeCategory}
              />
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

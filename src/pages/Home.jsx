import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBtn from "../components/SideBtn";
import Card from "../components/Card";

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
      <main className="min-h-screen h-fit max-w-[1300px] bg-linear-to-b from-neutral-900 to-neutral-800 flex flex-col gap-10 md:gap-14">
        <nav className=" relative w-full h-22 z-60 ">
          <Navbar />
        </nav>

        <section className="grow w-full flex flex-col md:flex-row lg:flex-row justify-center  gap-10 px-2 md:px-14  ">
          <aside className="z-40 sticky bg-black/10 rounded-xl md:top-36 top-20 shrink-0 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0  overflow-y-auto w-full md:w-fit h-fit px-2 py-3 pt-4 text-white md:border border-white/40 ">
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

          <div className="z-10 container bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 content-start">
            {Object.values(carddata).map((item) => (
              <Card
                key={item.id}
                title={item.name}
                logo={item.preview}
                link={item.link}
                desc={item.desc}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

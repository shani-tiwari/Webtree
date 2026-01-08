import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [data, setData] = useState({});
  const [carddata, setcardData] = useState({});

  useEffect(() => {
    async function getData() {
      await fetch("./data/data.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    getData();
  }, []);

  return (
    <>
      <main className="min-h-screen h-fit bg-gray-600 flex flex-col">
        <nav className=" relative w-full h-22 ">
          <Navbar />
        </nav>

        <header className=" h-24  w-full top-32 text-center pt-5">
          <h1 className="text-xl font-semibold bg-linear-to-b  from-gray-500/70 to-gray-200 bg-clip-text text-transparent">
            {" "}
            Ui Components | Design Ideas | Fonts | Color Pallate | Animation |
            Backgrounds | Images | Svg Icons
          </h1>
        </header>

        <section className="grow w-full flex justify-center  gap-4 px-14 pb-20 ">
          <aside className="w-fit h-fit px-4 py-2 text-white border border-white/40 rounded-lg">
            {Object.keys(data).map((name, index) => (
              <div
                onClick={() => setcardData(data[name])}
                className="border text-center py-1 px-4 mb-2 rounded-md cursor-pointer hover:bg-gray-500/50 transition-all duration-300 ease-out"
              >
                <p key={index}>{name}</p>
              </div>
            ))}
          </aside>

          <div className="container bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 content-start">
            {Object.values(carddata).map((item) => (
              <div
                key={item.id}
                className="bg-gray-800/40 border border-white/10 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300 hover:scale-[1.02] group cursor-pointer backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2 border-b border-white/5 pb-2">
                  <img
                    src={item.preview}
                    alt={item.name}
                    className="w-6 h-6 rounded-sm "
                  />
                  <h3 className="font-medium text-gray-100 group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

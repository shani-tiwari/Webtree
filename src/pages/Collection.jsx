import { useCollection } from "../context/CollectionContext";
import { Link } from "react-router";
import Card from "../components/Card";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { MoveLeft } from "lucide-react";

export default function Collection() {
  const { collection } = useCollection();

  return (
    <main className="relative max-w-[1300px] w-full flex flex-col gap-10 md:gap-10 mx-auto px-4 md:px-14 pb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="z-90 absolute top-21 left-2 md:left-8 md:top-34"
      >
        <Link
          to="/"
          className="group flex items-center  gap-2 text-white/70 py-1 px-2 md:px-5 rounded-full 
              bg-black/40 backdrop-blur-md border border-white/5 
             hover:text-amber-50 hover:bg-black/50
              transition-all duration-300 shadow-lg ring-2 ring-zinc-400/50"
        >
          <MoveLeft
            className="group-hover:-translate-x-1 group-hover:text-lg transition-transform duration-300"
            size={20}
          />
        </Link>
      </motion.div>

      <header className="relative  text-white/70 text-center font-beba w-full backdrop-blur-xl md:backdrop-blur-none pt-20 md:pt-32">
        <h1 className="text-2xl md:text-5xl tracking-wider">My Collection</h1>
        <p className="text-sm md:text-base mt-2 opacity-80 text-white/70">
          Your personally curated list of resources
        </p>
      </header>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grow w-full"
      >
        {collection.length === 0 ? (
          <div className="text-center text-zinc-400/70 py-20 flex flex-col items-center gap-4">
            <p className="text-lg">Your collection is empty.</p>
            <p className="text-base">
              Add items by clicking the "+ Add" button on any resource card.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]  content-start">
            {collection.map((item) => (
              <Card
                key={item.id || item.name}
                {...item}
                title={item.name || item.title}
                logo={item.preview || item.logo}
                desc={item.desc}
                category={item.category}
                allowRemove={true}
              />
            ))}
          </div>
        )}
      </motion.section>
    </main>
  );
}

import { useCollection } from "../context/CollectionContext";
import Card from "../components/Card";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import GoBack from "../components/GoBack";
import Divider from "../components/Divider";
import { useLocation } from "react-router";

export default function Collection() {
  const { collection } = useCollection();
  const location = useLocation();

  return (
    <main className="relative max-w-[1300px] w-full flex flex-col gap-10 md:gap-10 mx-auto px-4 md:px-14 pb-20">


      <header className="relative  text-white/70 text-center font-beba w-full backdrop-blur-xl md:backdrop-blur-none pt-20 md:pt-32">
        <h1 className="text-2xl md:text-6xl tracking-widest font-bold font-bebas-neue bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-500 ">
          My Collection
        </h1>
        <p className="text-sm md:text-base font-mono mt-2 opacity-80 text-white/70">
          Your personally curated list of resources
        </p>
        <p className="text-sm md:text-base font-mono mt-2 opacity-80 text-green-300">
          Added Items - {collection.length}
        </p>
      </header>

       {/* back button & divider */}
        <motion.span 
          initial={{width:"0%"}}              
          viewport={{ once: true }}
          whileInView={{width:"100%"}}
          transition={{duration:0.6, delay:0.3, originX:50, ease: "easeOut"}}
          className="z-90 h-[0.5px] block mx-auto -mt-4 md:mt-0 mb-2 bg-white/40 relative">
          { location.pathname === "/collection" && 
            <GoBack />
          }
        </motion.span>

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

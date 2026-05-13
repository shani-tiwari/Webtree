// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import Card from "../features/collection/Card";
import { cn } from "../../utils/utils.js";

export default function CardsGrid({ carddata, activeCategory, show }) {
  return (
    <div className="relative w-full min-h-fit">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.section
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-label="Resources grid"
          className={cn(
            "w-full z-10 px-2 md:px-4 lg:px-0 container left-0 right-0 mx-auto bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]",
            "content-start mt-2 md:mt-12"
          )}
        >
          {
            carddata.slice(0, show === 'less' ? 4 : carddata.length).map((item, index) => {
              return <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Card
                  id={item.id}
                  title={item.name}
                  logo={item.logo}
                  link={item.link}
                  desc={item.desc}
                  category={activeCategory}
                  isNew={item.new}
                />
            </motion.div>
          })}
        </motion.section>
      </AnimatePresence>
    </div>
  )
}

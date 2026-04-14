// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import Card from "../features/collection/Card";
import { cn } from "../../utils/utils.js";

export default function CardsGrid({ carddata, activeCategory, show }) {
  return (
    <motion.section
      layout
      aria-label="Resources grid"
      className={cn(
        "z-10 container bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]",
        "content-start mt-2 md:mt-12 transition-all duration-300"
      )}
    >
      <AnimatePresence mode="popLayout">
        {/* if show is 'less' then show only 5 cards */}
        {
          carddata.slice(0, show === 'less' ? 4 : carddata.length).map((item) => {
            return <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              exit={{ opacity: 0, scale: 0.9 }}
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
        })}
      </AnimatePresence>
    </motion.section>
  )
}

import Card from "../features/collection/Card";
import { cn } from "../../utils/utils.js";

export default function CardsGrid({ carddata, activeCategory, show }) {
  return (
    <div className="relative w-full min-h-fit">
        <section
          key={activeCategory}
          aria-label="Resources grid"
          className={cn(
            "w-full z-10 px-2 md:px-4 lg:px-0 container left-0 right-0 mx-auto bg-transparent grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5",
            " mt-4 sm:mt-10 md:mt-9 bg-white/1 backdrop-blur-xs"
          )}
        >
          {
            carddata.slice(0, show === 'less' ? 3 : carddata.length).map((item) => {
              return <Card
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  logo={item.logo}
                  link={item.link}
                  desc={item.desc}
                  category={activeCategory}
                  isNew={item.new}
                />
          })}
        </section>
    </div>
  )
}

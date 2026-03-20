import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import ReviewCard from "../components/features/reviews/ReviewCard";
import ReviewForm from "../components/features/reviews/ReviewForm";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignCircleIcon } from "@hugeicons/core-free-icons";
import GoBack from "../components/layout/GoBack";
import { useLocation } from "react-router";

import { useReviewsData } from "../hooks/useReviewsData";

export default function Reviews() {
  const location = useLocation();
  const { reviews, loading } = useReviewsData();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-black/95 pt-24 pb-20 selection:text-amber-500">
      <h1 className="sr-only">Community Reviews</h1>

      {/* Ambient backgrounds */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-amber-600-op5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto md:px-6 relative md:mt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl uppercase font-bebas-neue  tracking-wider bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-500 mb-1"
            >
              Reviews
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 px-4 md:px-0 font-mono max-w-2xl leading-tight tracking-wide"
            >
              See what others are saying about Webtree and share your own experience
            </motion.p>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3 }}
          >
            <button
               onClick={() => setIsFormOpen(true)}
               className="group flex items-center justify-center gap-2 px-6 py-3 cursor-pointer rounded-full bg-amber-500 hover:bg-amber-600 text-white selection:text-white font-bold transition-all duration-300 active:scale-95 shadow-[0_0_20px_var(--color-amber-500-op20)] hover:shadow-[0_0_30px_var(--color-amber-500-op40)]"
            >
               <HugeiconsIcon icon={PlusSignCircleIcon} size={20} className="font-bold group-hover:rotate-90 transition-transform duration-300 " />
               Add Your Review
            </button>
          </motion.div>
        </div>

        {/* back button & divider */}
        <motion.span 
          initial={{width:"0%"}}              
          viewport={{ once: true }}
          whileInView={{width:"90%"}}
          transition={{duration:0.6, delay:0.3, originX:50, ease: "easeOut"}}
          className="z-90 h-[0.5px] block mx-auto lg:min-w-full -mt-4 md:mt-0 mb-2 bg-white/40 relative">
          { location.pathname === "/reviews" && 
            <GoBack />
          }
        </motion.span>

        {/* Reviews Grid */}
        <div className="flex px-3 flex-wrap gap-8 mt-10 justify-center ">
          {loading ? (
             <div className="text-center animate-pulse">
               <p className="text-zinc-500 font-mono text-lg">Loading amazing reviews...</p>
             </div>
          ) : (
            reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.4 }}
                className="flex"
              >
                <ReviewCard {...review} />
              </motion.div>
            ))
          )}
        </div>
      </div>

      <ReviewForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}

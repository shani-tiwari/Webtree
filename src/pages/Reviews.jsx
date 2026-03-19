import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import { Link } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoveLeftIcon, PlusSignCircleIcon } from "@hugeicons/core-free-icons";

const REVIEWS_URL = import.meta.env.VITE_PRIVATE_WEBSITE_REVIEWS_URL;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetch(REVIEWS_URL)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch reviews:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-black/95 pt-24 pb-20 selection:text-amber-500">
      <h1 className="sr-only">Community Reviews</h1>

      {/* Ambient backgrounds */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-amber-600-op5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      {/* Back Button */}
      {/* <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="z-90 absolute top-20 left-2 lg:left-38 lg:top-24"
      >
        <Link
          to="/"
          className="group flex items-center gap-2 text-amber-600 py-1 px-2 md:px-5 rounded-full 
              bg-black/40 backdrop-blur-md border border-white/5 
             hover:text-amber-500 hover:bg-black/50 active:scale-97
              transition-all duration-300 shadow-lg ring-2 ring-zinc-400/50"
        >
          <HugeiconsIcon icon={MoveLeftIcon} className="group-hover:-translate-x-1 group-hover:text-lg transition-transform duration-300" size={20} />
        </Link>
      </motion.div> */}

      <div className="max-w-7xl mx-auto md:px-6 relative md:mt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl uppercase lg:text-6xl font-beba tracking-wider bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-500 mb-4"
            >
              Reviews
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 font-mono max-w-2xl leading-tight tracking-wide"
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

         {/* Animated line */}
          <motion.span 
              initial={{width:"0%"}}
              whileInView={{width:"97%"}}
              viewport={{ once: true }}
              transition={{duration:0.6, delay:0.3, ease: "easeOut"}}
              className="block mx-auto rounded-full  h-[1.3px] bg-white/30 -mt-6">
          </motion.span>

        {/* Reviews Grid */}
        <div className="flex px-2 flex-wrap gap-8 mt-8 justify-center ">
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

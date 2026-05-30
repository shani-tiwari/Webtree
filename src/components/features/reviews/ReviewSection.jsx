import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  MessageAdd01Icon,
  Navigation03Icon
} from "@hugeicons/core-free-icons";
import { cn } from "../../../utils/utils.js";

import { useReviewsData } from "../../../hooks/useReviewsData";





export default function ReviewSection() {

  const { reviews, loading } = useReviewsData();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto scroll logic for a subtle panning effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [reviews]);

  return (
    <section className="w-full max-w-[1300px] mx-auto mt-20 mb-10 overflow-hidden relative selection:text-amber-500">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 px-4 md:px-14 gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // viewport={{ once: true }}
            className="text-4xl font-black text-white/90 md:text-5xl italic tracking-tight hover:tracking-tighter transition-all duration-500"
          >
            Review{" "}
            <span className={cn("text-neutral-500 italic")}>Feedback</span>
          </motion.h2>
          <p className="text-zinc-400 font-mono text-sm mt-0.5 hover:tracking-tighter transition-all duration-500">
            What developers say about{" "}
            <span className="text-amber-600">webtree</span>{" "}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/reviews"
            className={cn(
              "group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-zinc-900/70 backdrop-blur-sm text-shadow-lg text-shadow-black/30",
              "text-white/80 hover:bg-zinc-800 hover:text-white hover:scale-103 hover:shadow-2xs shadow-white/50 transition-all duration-250 font-mono text-sm active:scale-97",
            )}
          >
            View All
            <HugeiconsIcon icon={Navigation03Icon} size={18} className="text-shadow-lg text-shadow-white group-hover:rotate-x-0 group-hover:rotate-y-0 lg:rotate-x-180 rotate-y-180  transition-transform duration-500 " />
          </Link>

          <button
            onClick={() => setIsFormOpen(true)}
            className={cn(
              "group flex items-center justify-center gap-2 px-5 py-2.5 cursor-pointer rounded-full bg-amber-500/20 backdrop-blur-xs border border-amber-500/40 text-amber-500 text-shadow-lg text-shadow-black/30 hover:bg-amber-600/30 ",
              " hover:scale-103 transition-all duration-250 font-bold text-sm active:scale-95 shadow-2xs hover:shadow-amber-500/50",
            )}
          >
            Add Review
            <HugeiconsIcon 
            // icon={PlusSignCircleIcon} 
            icon={MessageAdd01Icon} 
            size={20}
              className="group-hover:scale-120 rotate-3 transition-transform duration-500 cursor-pointer"
            />
          </button>

        </div>
      </div>

      {/* Animated line */}
      <motion.span
        initial={{ width: "0%" }}
        viewport={{ once: true }}
        whileInView={{ width: "95%" }}
        transition={{ duration: 0.6, delay: 0.3, originX: 50, ease: "easeOut" }}
        className="z-90 h-[0.5px] block mx-auto -mt-4 md:mt-0 mb-2 bg-white/40 relative"
      ></motion.span>

      {/* Scrollable Reviews Container */}
      <div className="relative w-full pb-4">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar px-8 md:px-24 py-4 mask-fade-edges backdrop-blur-xs "
          style={{ scrollBehavior: "smooth" }}
        >
          {loading ? (
            <div className="w-full text-center py-10 text-zinc-500 font-mono italic animate-pulse">
              Loading reviews...
            </div>
          ) : reviews.length > 0 ? (
            reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className=" flex "
              >
                <ReviewCard {...review} />
              </motion.div>
            ))
          ) : (
            <div className="w-full text-center py-10 text-zinc-500 font-mono italic">
              No reviews yet. Be the first to add one!
            </div>
          )}
        </div>
      </div>

      {/* Review Form Modal */}
      <ReviewForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}

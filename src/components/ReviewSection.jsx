import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { useReviews } from "../context/ReviewContext";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
// import { cn } from "../lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Navigation03Icon, PlusSignCircleIcon, PlusSignIcon } from "@hugeicons/core-free-icons";

export default function ReviewSection() {
  const { reviews } = useReviews();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto scroll logic for a subtle panning effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let animationFrameId;
    // eslint-disable-next-line no-unused-vars
    let scrollPos = 0;
    // eslint-disable-next-line no-unused-vars
    const scrollSpeed = 0.5; // pixels per frame
    
    return () => {
      if(animationFrameId) cancelAnimationFrame(animationFrameId);
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
            className="text-3xl md:text-4xl italic font-extrabold tracking-wide bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-500"
          >
            Review & Feedback
          </motion.h2>
          <p className="text-zinc-400 font-mono text-sm mt-2">What developers say about Webtree</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            to="/reviews"
            className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-zinc-900/50 text-white/80 hover:bg-zinc-800 hover:text-white transition-all duration-300 font-mono text-sm active:scale-95"
          >
             View All
             <HugeiconsIcon icon={Navigation03Icon} size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.3 transition-transform" />
          </Link>
          <button
             onClick={() => setIsFormOpen(true)}
             className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500/80 hover:text-black transition-all duration-300 font-bold text-sm active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.1)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            <HugeiconsIcon icon={PlusSignCircleIcon} size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            Add Review
          </button>
        </div>
      </div>

       {/* Animated line */}
          <motion.span 
              initial={{width:"0%"}}
              whileInView={{width:"100%"}}
              viewport={{ once: true }}
              transition={{duration:0.6, delay:0.3, ease: "easeOut"}}
              className="block mx-auto  h-[1.3px] bg-white/30 -mt-4 md:mt-0 mb-4">
          </motion.span>

      {/* Scrollable Reviews Container */}
      <div className="relative w-full pb-4">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-linear-to-r from-black/85 to-transparent blur-sm z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-linear-to-l from-black/85 to-transparent blur-sm z-10 pointer-events-none" />
        
        <div 
           ref={scrollContainerRef}
           className="flex gap-6 overflow-x-auto hide-scrollbar px-4 md:px-14 snap-x snap-mandatory py-4"
           style={{ scrollBehavior: 'smooth' }}
        >
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="snap-center"
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

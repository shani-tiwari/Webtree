import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
// import { cn } from "../lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Navigation03Icon, PlusSignCircleIcon, PlusSignIcon } from "@hugeicons/core-free-icons";

const REVIEWS_URL = import.meta.env.VITE_PRIVATE_WEBSITE_REVIEWS_URL;

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  // Fetch reviews from API
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
            className="text-3xl md:text-4xl italic font-extrabold tracking-wide hover:tracking-wider transition-all duration-300 bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-500"
          >
            Review & Feedback
          </motion.h2>
          <p className="text-zinc-400 font-mono text-sm mt-2">What developers say about <span className="text-amber-600">webtree</span> </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            to="/reviews"
            className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full hover:scale-105 border border-white/10 bg-zinc-900/50 text-white/80 hover:bg-zinc-800 hover:text-white transition-all duration-300 font-mono text-sm active:scale-95"
          >
             View All
             <HugeiconsIcon icon={Navigation03Icon} size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.3 transition-transform" />
          </Link>
           <button
              onClick={() => setIsFormOpen(true)}
              className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-500-op10 border border-amber-500-op30 text-amber-500 hover:bg-amber-500-op80 hover:scale-105 hover:text-black transition-all duration-300 font-bold text-sm active:scale-95 shadow-[0_0_15px_var(--color-amber-500-op10)] hover:shadow-[0_0_20px_var(--color-amber-500-op40)]"
           >
            <HugeiconsIcon icon={PlusSignCircleIcon} size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            Add Review
          </button>
        </div>
      </div>

       {/* Animated line */}
        <motion.span 
                initial={{width:"0%"}}              
                viewport={{ once: true }}
                whileInView={{width:"95%"}}
                transition={{duration:0.6, delay:0.3, originX:50, ease: "easeOut"}}
                className="z-90 h-[0.5px] block mx-auto -mt-4 md:mt-0 mb-2 bg-white/40 relative">
            </motion.span>

      {/* Scrollable Reviews Container */}
      <div className="relative w-full pb-4">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-linear-to-r from-black/85 to-transparent blur-sm z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-linear-to-l from-black/85 to-transparent blur-sm z-10 pointer-events-none" />
        
        <div 
           ref={scrollContainerRef}
           className="flex gap-6 justify-center overflow-x-auto hide-scrollbar px-4 md:px-14 snap-x snap-mandatory py-4"
           style={{ scrollBehavior: 'smooth' }}
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
                className="snap-center flex "
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

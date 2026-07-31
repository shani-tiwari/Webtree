import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { ReviewCard, ReviewForm } from "../components/features/reviews";
import { HugeiconsIcon } from "@hugeicons/react";
import { BubbleChatAddIcon, Idea01Icon } from "@hugeicons/core-free-icons";
import { GoBack } from "../components/layout";
import { useLocation } from "react-router";

import { useReviewsData } from "../hooks/useReviewsData";
import Masonry from "react-masonry-css";
import { Helmet } from "react-helmet";

export default function Reviews() {
  const location = useLocation();
  const { reviews, loading } = useReviewsData();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      y: 0,
      behavior: "smooth",
    });
  });

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1,
  };

  return (
    <>
      {/* helmet - SEO */}
      <Helmet>
        <title>WebTree | Developer Resources</title>
        <meta name="description" content="Webtree help developers to find & save best development resources in one place.."/>
        <meta name="author" content="Shani Tiwari" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#030303" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ShaniDevelops" />
        <meta name="twitter:title" content="About Webtree - Collection of Web Development Resources"/>
        <meta name="twitter:description"content="Webtree help developers to find & save best development resources in one place.."/>
        <meta name="twitter:image"content="https://webtree.shaniweb.com/og-image.png"/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="webtree" />
        <meta property="og:url" content="https://webtree.shaniweb.com/about" />
        <meta property="og:title"content="Webtree - Collection of Web Development Resources"/>
        <meta property="og:description"content="Webtree help developers to find & save best development resources in one place.."/>
        <meta property="og:image"content="https://webtree.shaniweb.com/og-image.png"/>
      </Helmet>

      <section className="min-h-screen w-full relative overflow-hidden bg-black/80 backdrop-blur-sm pt-24 pb-20 selection:text-amber-500">
        <h1 className="sr-only">Community Reviews</h1>

        {/* Ambient backgrounds */}
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-zinc-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zinc-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto md:px-6 relative md:mt-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left md:ml-16">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-fit mx-auto md:mx-0 text-5xl md:text-7xl italic flex items-center gap-4 tracking-tighter font-black hover:tracking-tight transition-all duration-500 bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-500 mb-1"
              >
                Reviews{" "}
                <HugeiconsIcon
                  icon={Idea01Icon}
                  size={42}
                  className="hover:text-amber-500 transition-all duration-100 text-amber-500/80 mt-1 md:mt-3"
                />
              </motion.span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-neutral-500 px-4 md:px-0 font-mono max-w-2xl leading-tight tracking-tighter "
              >
                See what others are saying about Webtree and share your own
                experience
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setIsFormOpen(true)}
                className="group flex items-center justify-center gap-2 px-6 py-3 cursor-pointer rounded-full bg-amber-500/70 hover:bg-amber-600 border border-amber-400/30 hover:scale-102 text-white selection:text-white font-bold transition-all duration-200 active:scale-95 shadow-[0_0_20px_var(--color-amber-500-op20)] hover:shadow-[0_0_30px_var(--color-amber-500-op40)]"
              >
                <HugeiconsIcon
                  icon={BubbleChatAddIcon}
                  className="text-xl font-bold group-hover:scale-105 transition-transform duration-300 "
                />
                Add Your Review
              </button>
            </motion.div>
          </div>

          {/* back button & divider */}
          <motion.span
            initial={{ width: "0%" }}
            viewport={{ once: true }}
            whileInView={{ width: "90%" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              originX: 50,
              ease: "easeOut",
            }}
            className="z-90 h-[0.5px] block mx-auto lg:min-w-full -mt-4 md:mt-0 mb-2 bg-white/40 relative"
          >
            {location.pathname === "/reviews" && <GoBack />}
          </motion.span>

          {/* Reviews Grid */}
          {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-8 px-3 mt-10">
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
                className=" break-inside-avoid"
              >
                <ReviewCard {...review} />
              </motion.div>
            ))
          )}
        </div> */}
          <div className="px-3 mt-10">
            {loading ? (
              <div className="text-center animate-pulse">
                <p className="text-zinc-500 font-mono text-lg">
                  Loading amazing reviews...
                </p>
              </div>
            ) : (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-8"
                columnClassName="flex flex-col gap-8 items-center"
              >
                {reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                    className="flex justify-center "
                  >
                    <ReviewCard {...review} />
                  </motion.div>
                ))}
              </Masonry>
            )}
          </div>
        </div>

        <ReviewForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </section>
    </>
  );
}

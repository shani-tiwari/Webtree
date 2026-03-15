import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CancelCircleIcon } from "@hugeicons/core-free-icons";
import { useReviews } from "../context/ReviewContext";
import { cn } from "../lib/utils";

export default function ReviewForm({ isOpen, onClose }) {
  const { addReview } = useReviews();
  const [formData, setFormData] = useState({
    name: "",
    xProfile: "",
    gender: "male",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    addReview(formData);
    
    // Reset form & close
    setFormData({ name: "", xProfile: "", gender: "male", text: "" });
    onClose();
  };

  const [rows, setRows] = useState(3);

  const resizeTextarea = (e) => {
    setRows(e.target.scrollHeight < 120 ? 3 : Math.min(6, Math.ceil(e.target.scrollHeight / 24)));
  };




  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           onClick={onClose}
           className="fixed inset-0 z-96 flex items-center justify-center bg-black p-3 md:p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[95%] sm:max-w-md lg:max-w-lg bg-[#0a0a0a] md:mt-14 border border-zinc-800 rounded-[20px] md:rounded-3xl p-4 md:p-8 relative shadow-2xl overflow-hidden max-h-dvh"
          >
            {/* Background Accents */}
            <div className="hidden md:block absolute -top-20 -left-20 w-40 h-40 bg-amber-600/10 blur-[50px] rounded-full pointer-events-none" />
            
            <button
               onClick={onClose}
               className="absolute top-4 right-4 md:top-6 md:right-6 text-zinc-500 hover:text-white transition-colors z-10"
            >
              <HugeiconsIcon icon={CancelCircleIcon} size={24} />
            </button>

            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700 mb-6 text-center">
              Add Your Review
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4 mt-2 md:mt-0">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full">
                {/* Name Field */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-zinc-400 text-xs md:text-sm font-mono">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={30}
                    placeholder="Shani Tiwari"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-sans text-sm md:text-base"
                  />
                </div>

                {/* X Profile Field */}
                <div className="flex flex-col gap-1 md:gap-1.5 flex-1">
                  <label className="text-zinc-400 text-xs md:text-sm font-mono lowercase">X (Twitter) Profile</label>
                  <input
                    type="text"
                    name="xProfile"
                    value={formData.xProfile}
                    onChange={handleChange}
                    maxLength={15}
                    placeholder="@shanidevelops"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-sans text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Gender Selection */}
              <div className="flex flex-col gap-1 md:gap-1.5">
                <label className="text-zinc-400 text-xs md:text-sm font-mono ">Avatar Gender</label>
                <div className="flex gap-3 md:gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: "male" }))}
                    className={cn(
                      "flex-1 py-1.5 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base",
                      formData.gender === "male" 
                        ? "bg-amber-500/10 border-amber-500/50 text-amber-500" 
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                    )}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: "female" }))}
                    className={cn(
                      "flex-1 py-1.5 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base",
                      formData.gender === "female" 
                        ? "bg-amber-500/10 border-amber-500/50 text-amber-500" 
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                    )}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Review Text Field */}
              <div className="flex flex-col gap-1 md:gap-1.5 mt-1 md:mt-2">
                <label className="text-zinc-400 text-xs md:text-sm font-mono lowercase">Your Feedback *</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  required
                  placeholder="What do you think about Webtree?"
                  rows={rows}
                  onInput={resizeTextarea}
                  className="resize-none w-full bg-zinc-900/50 border border-zinc-800 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-mono text-xs md:text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 md:mt-4 w-full bg-linear-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-2.5 md:py-3 px-6 rounded-lg md:rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] active:scale-[0.98] text-sm md:text-base"
              >
                Submit Review
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

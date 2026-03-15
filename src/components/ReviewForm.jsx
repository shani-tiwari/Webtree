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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           onClick={onClose}
           className="fixed inset-0 z-100 flex items-end justify-center bg-black/80 backdrop-blur-sm p-2"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-6 relative shadow-2xl overflow-hidden"
          >
            {/* Background Accents */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-600/10 blur-[50px] rounded-full pointer-events-none" />
            
            <button
               onClick={onClose}
               className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <HugeiconsIcon icon={CancelCircleIcon} size={24} />
            </button>

            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700 mb-6 text-center">
              Add Your Review
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-400 text-sm font-mono lowercase">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-sans"
                />
              </div>

              {/* X Profile Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-400 text-sm font-mono lowercase">X (Twitter) Profile</label>
                <input
                  type="text"
                  name="xProfile"
                  value={formData.xProfile}
                  onChange={handleChange}
                  placeholder="@username"
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-sans"
                />
              </div>

              {/* Gender Selection */}
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-400 text-sm font-mono lowercase">Avatar Gender</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: "male" }))}
                    className={cn(
                      "flex-1 py-2 px-4 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300",
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
                      "flex-1 py-2 px-4 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300",
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
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-zinc-400 text-sm font-mono lowercase">Your Feedback *</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  required
                  placeholder="What do you think about Webtree?"
                  rows={4}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none font-mono text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-full bg-linear-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] active:scale-[0.98]"
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

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CancelCircleIcon, CancelSquareIcon, EnteringGeoFenceIcon, UserCheck01Icon } from "@hugeicons/core-free-icons";
import { useReviews } from "../context/ReviewContext";
import { cn } from "../lib/utils";

export default function ReviewForm({ isOpen, onClose }) {
  const { addReview, reviews } = useReviews();
  
  const [formData, setFormData] = useState({
    name: "",
    xProfile: "",
    gender: "male",
    text: "",
  });

  const [validationStatus, setValidationStatus] = useState(null); // null, 'exists', 'available'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "xProfile") {
      setValidationStatus(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    // Normalize and check validity before submission
    const currentX = formData.xProfile.replace("@", "").trim().toLowerCase();
    if (currentX) {
      const exists = reviews.some(
        (review) => review.xProfile.replace("@", "").trim().toLowerCase() === currentX
      );

      if (exists) {
        setValidationStatus("exists");
        return;
      }
    }

    addReview(formData);

    // Reset form & close
    setFormData({ name: "", xProfile: "", gender: "male", text: "" });
    setValidationStatus(null);
    onClose();
  };

  const [rows, setRows] = useState(3);

  const resizeTextarea = (e) => {
    setRows(e.target.scrollHeight < 120 ? 3 : Math.min(6, Math.ceil(e.target.scrollHeight / 24)));
  };

  const checkValidity = (e) => {
    e?.preventDefault();
    if (!formData.xProfile.trim()) return;

    const currentX = formData.xProfile.replace("@", "").trim().toLowerCase();
    const exists = reviews.some(
      (review) => review.xProfile.replace("@", "").trim().toLowerCase() === currentX
    );

    setValidationStatus(exists ? "exists" : "available");
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
            
            {/* close button */}
            <button
               onClick={onClose}
               className="absolute top-4 right-4 md:top-6 md:right-6 text-zinc-400 hover:text-zinc-200 hover:scale-105 transition-all duration-300 z-10"
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
                  <div className="relative">
                    <input
                      type="text"
                      name="xProfile"
                      value={formData.xProfile}
                      onChange={handleChange}
                      maxLength={15}
                      placeholder="@shanidevelops"
                      className={cn(
                        "w-full bg-zinc-900/50 border rounded-lg md:rounded-xl px-3 py-2 md:py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all font-sans text-sm md:text-base",
                        validationStatus === "exists"
                          ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                          : validationStatus === "available"
                          ? "border-green-500/50 focus:border-green-500/50 focus:ring-green-500/50"
                          : "border-zinc-800 focus:border-amber-500/50 focus:ring-amber-500/50"
                      )}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={checkValidity}
                        className={cn(
                          "flex items-center justify-center font-mono px-2 py-0.5 md:py-1 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300",
                          validationStatus === "exists"
                            ? "bg-red-500 text-white"
                            : validationStatus === "available"
                            ? "bg-green-500 text-white pointer-events-none opacity-50"
                            : "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                        )}
                      >
                        { validationStatus === "available" ? 
                            <HugeiconsIcon icon={UserCheck01Icon} size={18} className={cn("transition-colors text-white font-bold")} /> 
                            : 
                            validationStatus === "exists" ?
                            <HugeiconsIcon icon={CancelSquareIcon} size={18} className={cn("transition-colors text-white font-bold")} />
                            :
                            <HugeiconsIcon icon={EnteringGeoFenceIcon} size={18} className={cn("transition-colors text-white font-bold")} />
                        }
                      </button>
                    </div>
                    {validationStatus === "exists" && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 -bottom-5 text-[10px] text-red-500 font-mono"
                      >
                        * pre existed
                      </motion.p>
                    )}
                  </div>
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
                className="mt-2 md:mt-4 w-full tracking-wider bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-500/80 hover:to-amber-600/80 text-white font-bold py-2.5 md:py-3 px-6 rounded-lg md:rounded-xl transition-all duration-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] active:scale-[0.98] text-sm md:text-base"
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

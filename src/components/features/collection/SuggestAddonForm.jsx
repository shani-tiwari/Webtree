import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiContentGenerator01Icon,
  CancelCircleIcon,
} from "@hugeicons/core-free-icons";
import emailjs from "@emailjs/browser";
import { cn } from "../../../utils/utils.js";

export default function SuggestAddonForm({ isOpen, onClose }) {
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!suggestion) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_9wh2vje",
        "template_x9kgcwu",
        {
          name: suggestion,
          email: "",
          xProfile: "",
          gender: "",
          message: "",
        },
        "Qmvgk6TmgzEtWkpwC",
      );

      setSubmitMessage("Suggestion sent successfully!");

      setTimeout(() => {
        setSuggestion("");
        setSubmitMessage("");
        setIsSubmitting(false);
        onClose();
      }, 1000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitMessage("Failed to send. Please try again.");
      setIsSubmitting(false);
    }
  };

  // scroll none when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-96 flex items-center justify-center bg-black/60 backdrop-blur-xl p-3 md:p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[95%] sm:max-w-md bg-[#0a0a0a] border border-zinc-600 rounded-[20px] md:rounded-3xl p-5 md:p-7 relative shadow-2xl overflow-hidden"
          >
            {/* Background Accents */}
            <div className="hidden md:block absolute -top-20 -left-20 w-40 h-40 bg-zinc-600-op10 blur-[50px] rounded-full pointer-events-none" />

            {/* close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-10 md:right-6 text-zinc-400 hover:text-zinc-200 hover:scale-105 active:scale-90 transition-all duration-300 z-10"
            >
              <HugeiconsIcon icon={CancelCircleIcon} size={24} />
            </button>

            <h2 className="text-zinc-200 text-xl md:text-2xl font-bold mb-8 mt-2 text-center">
              Suggest Add-on
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-400 text-sm font-mono lowercase pl-2">
                  Website Suggestion (Link or Name)
                </label>
                <input
                  type="text"
                  required
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="https://webtree.shaniweb.com" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500/50 focus:ring-1 focus:ring-zinc-500/50 transition-all font-mono text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "mt-4 w-full flex items-center justify-center gap-2 tracking-wider border-2 border-zinc-500 bg-linear-to-r from-zinc-600 to-zinc-800 hover:from-zinc-500 hover:to-zinc-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                  isSubmitting && "animate-pulse",
                )}
              >
                {isSubmitting ? "Sending..." : "Submit Suggestion"}
                <HugeiconsIcon icon={AiContentGenerator01Icon} size={20} className="mt-0.5" />
              </button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn(
                    "text-center text-sm font-mono mt-2",
                    submitMessage.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500",
                  )}
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CancelCircleIcon,
  CancelSquareIcon,
  EnteringGeoFenceIcon,
  UserCheck01Icon,
} from "@hugeicons/core-free-icons";
import emailjs from "@emailjs/browser";
import { cn } from "../../../utils/utils.js";

const REVIEWS_URL = import.meta.env.VITE_PRIVATE_WEBSITE_REVIEWS_URL;

export default function ReviewForm({ isOpen, onClose }) {
  const [reviews, setReviews] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    xProfile: "",
    gender: "male",
    text: "",
  });

  const [validationStatus, setValidationStatus] = useState(null); // null, 'exists', 'available'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  React.useEffect(() => {
    if (isOpen) {
      fetch(REVIEWS_URL)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error("Failed to fetch reviews:", err));
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "xProfile") {
      setValidationStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    // Check for duplicates
    const currentX = formData.xProfile?.replace("@", "").trim().toLowerCase();

    const exists = reviews.some((review) => 
      (currentX && review.xProfile?.replace("@", "").trim().toLowerCase() === currentX) 
    );

    if (exists) {
      setValidationStatus("exists");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_9wh2vje",
        "template_x9kgcwu",
        {
          name: formData.name,
          email: "",
          xProfile: formData.xProfile,
          gender: formData.gender,
          message: formData.text,
        },
        "Qmvgk6TmgzEtWkpwC",
      );

      setSubmitMessage("your review will be added soon");

      setTimeout(() => {
        setFormData({
          name: "",
          xProfile: "",
          gender: "male",
          text: "",
        });
        setValidationStatus(null);
        setSubmitMessage("");
        setIsSubmitting(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitMessage("Failed to send. Please try again.");
      setIsSubmitting(false);
    }
  };

  const [rows, setRows] = useState(3);

  const resizeTextarea = (e) => {
    setRows(
      e.target.scrollHeight < 120
        ? 3
        : Math.min(6, Math.ceil(e.target.scrollHeight / 24)),
    );
  };

  const checkValidity = (e) => {
    e?.preventDefault();
    const currentX = formData.xProfile?.replace("@", "").trim().toLowerCase();

    if (!currentX) return;

    const exists = reviews.some( (review) =>
        ( review.xProfile?.replace("@", "").trim().toLowerCase() === currentX )
    );

    setValidationStatus(exists ? "exists" : "available");
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
          className="fixed inset-0 z-96 flex items-center justify-center bg-black p-3 md:p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[95%] mt-10 sm:max-w-md lg:max-w-lg bg-[#0a0a0a] md:mt-14 border border-zinc-800 rounded-[20px] md:rounded-3xl p-4 md:p-7 relative shadow-2xl overflow-hidden"
          >
            {/* Background Accents */}
            <div className="hidden md:block absolute -top-20 -left-20 w-40 h-40 bg-amber-600-op10 blur-[50px] rounded-full pointer-events-none" />

            {/* close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-9 md:right-6 text-zinc-400 hover:text-zinc-200 hover:scale-105 active:scale-90 transition-all duration-300 z-10"
            >
              <HugeiconsIcon icon={CancelCircleIcon} size={24} />
            </button>

            <h2 className="wavy-underline-pulse left-[50%] translate-x-[-50%]  text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-amber-300 to-amber-700 mb-6">
              Add Your Review
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 md:gap-4 mt-2 md:mt-0"
            >
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full">
                {/* Vibe selection in place of Name */}
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-zinc-400 text-xs md:text-sm font-mono lowercase">
                    (choose your vibe) *
                  </label>
                  <div className="grid grid-cols-6 gap-2 md:gap-3">
                    {[
                      { hex: "#1e1b4b", label: "Indigo" },
                      { hex: "#4a3f35", label: "Taupe" },
                      { hex: "#7f1d1d", label: "Crimson" },
                      { hex: "#7c2d12", label: "Orange" },
                      { hex: "#4a044e", label: "Fuchsia" },
                      { hex: "#0f392b", label: "Forest" },
                    ].map((color) => (
                      <button
                        key={color.hex}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, name: color.hex }))}
                        className={cn(
                          "group relative h-10 md:h-12 rounded-2xl border-2 transition-all duration-300",
                          formData.name === color.hex 
                            ? "border-amber-500 scale-105 shadow-[0_0_10px_rgba(245,158,11,0.3)]" 
                            : "border-zinc-400/60 hover:border-zinc-300/90 hover:scale-102"
                        )}
                        style={{ backgroundColor: color.hex }}
                        aria-label={`Select ${color.label} vibe`}
                      >
                        {formData.name === color.hex && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                          </div>
                        )}
                        <span className="sr-only">{color.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 w-full">
                {/* X Profile Field */}
                <div className="flex flex-col gap-1 md:gap-1.5 flex-1">
                  <label className="text-zinc-400 text-xs md:text-sm font-mono lowercase">
                    X (Twitter) Profile *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="xProfile"
                      required
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
                            : "border-zinc-800 focus:border-amber-500-op50 focus:ring-amber-500-op50",
                      )}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={checkValidity}
                        className={cn(
                          "flex items-center justify-center font-mono px-2 py-0.5 md:py-[6px] rounded-lg hover:scale-105 active:scale-95 transition-all duration-300",
                          validationStatus === "exists"
                            ? "bg-red-500 text-white"
                            : validationStatus === "available"
                              ? "bg-green-500 text-white pointer-events-none opacity-50"
                              : "bg-amber-500 text-black shadow-lg shadow-amber-500-op20",
                        )}
                      >
                        {validationStatus === "available" ? (
                          <HugeiconsIcon
                            icon={UserCheck01Icon}
                            size={18}
                            className={cn(
                              "transition-colors text-white font-bold",
                            )}
                          />
                        ) : validationStatus === "exists" ? (
                          <HugeiconsIcon
                            icon={CancelSquareIcon}
                            size={18}
                            className={cn(
                              "transition-colors text-white font-bold",
                            )}
                          />
                        ) : (
                          <HugeiconsIcon
                            icon={EnteringGeoFenceIcon}
                            size={18}
                            className={cn(
                              "transition-colors text-white font-bold",
                            )}
                          />
                        )}
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
                <label className="text-zinc-400 text-xs md:text-sm font-mono ">
                  avatar gender
                </label>
                <div className="flex gap-3 md:gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, gender: "male" }))
                    }
                    className={cn(
                      "flex-1 py-1.5 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base",
                      formData.gender === "male"
                        ? "bg-amber-500-op10 border-amber-500-op50 text-amber-500"
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700",
                    )}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, gender: "female" }))
                    }
                    className={cn(
                      "flex-1 py-1.5 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base",
                      formData.gender === "female"
                        ? "bg-amber-500-op10 border-amber-500-op50 text-amber-500"
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700",
                    )}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Review Text Field */}
              <div className="flex flex-col gap-1 md:gap-1.5 mt-1 md:mt-2">
                <label className="text-zinc-400 text-xs md:text-sm font-mono lowercase">
                  Your Feedback *
                </label>
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
                disabled={isSubmitting}
                className={cn(
                  "mt-2 md:mt-4 w-full tracking-wider bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-500-op80 hover:to-amber-600-op80 text-white font-bold py-2.5 md:py-3 px-6 rounded-lg md:rounded-xl transition-all duration-500 shadow-[0_0_20px_var(--color-amber-500-op20)] active:scale-[0.98] text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed",
                  isSubmitting && "animate-pulse",
                )}
              >
                {isSubmitting ? "Sending..." : "Submit Review"}
              </button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn(
                    "text-center text-sm font-mono mt-2",
                    submitMessage.includes("soon")
                      ? "text-amber-500"
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

import { cn } from "../../utils/utils.js";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { CancelCircleIcon, Rocket01Icon } from "@hugeicons/core-free-icons";



export default function InstallDialogue() {

  const [installPrompt, setInstallPrompt] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e.isTrusted);
      console.log(e);
      setIsDismissed(false);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice?.outcome === "accepted") {
      setInstallPrompt(null);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  // const isVisible = !installPrompt ;

  return (
    <AnimatePresence>
      {installPrompt && (
        <motion.aside
          initial={{ opacity: 0, x: 30, scale: 0.65 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
          style={{ display: isDismissed ? "none" : "block" }}
          aria-label="Install WebTree Application"
          role="dialog"
          aria-modal="false"
          className={cn(
            "w-full md:w-fit absolute bg-[#0a0a0a]/95 backdrop-blur-xl border border-zinc-700/70 hover:border-amber-500/50 transition-colors duration-300",
            "rounded-2xl p-4 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.08)]",
            "relative overflow-hidden selection:bg-amber-600/30 selection:text-white"
          )}
        >
            <div className="w-full flex items-center justify-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={handleInstall}
                className={cn(
                  "group select-none flex items-center justify-center gap-2 text-black font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl",
                  "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500",
                  "shadow-md shadow-amber-500/25 hover:shadow-amber-500/40",
                  "active:scale-95 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                )}
              >
                <span>Install App</span>
                <HugeiconsIcon icon={Rocket01Icon} size={16} className="text-black group-hover:translate-x-0.5 mt-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleDismiss}
                className="group flex gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-zinc-200 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-200 cursor-pointer font-mono"
              >
                Not now  <HugeiconsIcon icon={CancelCircleIcon} size={16} className="text-white/90 font-bold group-hover:rotate-90 md:mt-0.5 transition-transform" />
              </button>
            </div>
        </motion.aside>
       )} 
    </AnimatePresence>
  );
}
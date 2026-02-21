import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartLineData02Icon,
  LogoutCircle01Icon,
} from "@hugeicons/core-free-icons";
import Socials from "./Socials";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black/80 mt-10 px-4 relative selection:bg-amber-600/30  selection:text-white"
    >
      <div className="max-w-[1300px] mx-auto px-1 md:px-14 py-4">
        <p className="text-neutral-200 text-2xl font-semibold tracking-wide">
          About WebTree
        </p>
        <p className="h-[0.2px] w-full bg-white/30 rounded-full mt-4"></p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-[1300px] mx-auto px-1 md:px-14 pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {/* Our Mission */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-linear-to-b from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg select-none">
              ४
            </span>
            <h3 className="text-xl font-bold text-white tracking-wide">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            WebTree was born from a simple need: to cut through the noise of the
            modern web. We curate the finest frontend magic—from Tailwind
            components and Framer prototypes to essential performance
            tools—helping you build better, faster.
          </p>
        </div>

        {/* Why WebTree? */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-linear-to-b from-gray-700 to-gray-800 flex items-center justify-center text-white">
              <HugeiconsIcon icon={ChartLineData02Icon} size={18} />
            </span>
            <h3 className="text-xl font-bold text-white tracking-wide">
              Why WebTree?
            </h3>
          </div>
          <ul className="text-gray-400 space-y-2">
            <li className="flex gap-2">
              <span className="text-amber-500">→</span>
              <span>
                <strong>Hand-Curated:</strong> Every resource is verified for
                quality and utility.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">→</span>
              <span>
                <strong>One-Click Magic:</strong> Zero friction access to the
                tools you need right now.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">→</span>
              <span>
                <strong>Community Driven:</strong> Built by developers who
                understand the craft.
              </span>
            </li>
          </ul>
        </div>

        {/* Product Roadmap */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-linear-to-b from-gray-700 to-gray-800 flex items-center justify-center text-amber-500">
              ⚡
            </span>
            <h3 className="text-xl font-bold text-white tracking-wide">
              Roadmap
            </h3>
          </div>
          <div className="space-y-[10px]">
            <div className="py-2 px-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm font-semibold text-white">
                • Backend & Infrastructure
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Expanding our curated collections to server-side excellence.
              </p>
            </div>
            <div className="py-2 px-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm font-semibold text-white">
                • AI Tools & Workflows
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Integrating next-gen automation for your dev environment.
              </p>
            </div>
            <div className="py-2 px-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm font-semibold text-white">
                • Interactive Tutorials
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Learn to master the tools you find here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Home from "./pages/Home";
import React from "react";
const Collection = React.lazy(() => import("./pages/Collection"));
import { Routes, Route } from "react-router";
import { cn } from "./lib/utils";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">       
        Skip to main content
      </a>
      <div className="relative flex flex-col h-full w-full  justify-center bg-black">
        {/* background */}
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[70px_70px]",
            "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>

        {/* website */}
        <Navbar />

        <div className="relative z-10 w-full flex justify-center">
          <React.Suspense
            fallback={
              <div className="text-white text-center p-10">Loading...</div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
            </Routes>
          </React.Suspense>
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;

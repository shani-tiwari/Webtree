import Home from "./pages/Home";
import React from "react";
import { Routes, Route, useLocation } from "react-router";
import { cn } from "./lib/utils";
import About from "./pages/About";
import Socials from "./pages/Socials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const Collection = React.lazy(() => import("./pages/Collection"));

function App() {
  const location = useLocation();
  const isFullScreenRoute = ["/about", "/connect"].includes(location.pathname);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="relative flex flex-col min-h-screen w-full bg-black/97">
        {/* background */}
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[70px_70px]",
            "bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]",
          )}
        />

        {/* website */}

        <Navbar />

        <main
          id="main-content"
          className="relative z-10 w-full flex flex-col items-center grow"
        >
          <React.Suspense
            fallback={
              <div className="text-white text-center p-10">Loading...</div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/connect" element={<Socials />} />
            </Routes>
          </React.Suspense>

          {location.pathname === "/" && (
            <>
              <About />
              <Socials />
            </>
          )}
        </main>

        {!isFullScreenRoute && (
          <>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </div>
    </>
  );
}

export default App;

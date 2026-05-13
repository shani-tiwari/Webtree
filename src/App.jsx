import Home from "./pages/Home";
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";
import { cn } from "./utils/utils.js";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";

// const Blog = React.lazy(() => import("./pages/Blog.jsx"));
const Footer = React.lazy(() => import("./components/layout/Footer"));
const Socials = React.lazy(() => import("./pages/Socials"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const Explore = React.lazy(() => import("./pages/Explore"));
const Collection = React.lazy(() => import("./pages/Collection"));
const ScrollToTop = React.lazy(() => import("./components/layout/ScrollToTop"));

function App() {
  const location = useLocation();
  const isFullScreenRoute = ["/about", "/connect", "/reviews"].includes(
    location.pathname,
  );

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
          className="relative z-30 w-full flex flex-col items-center"
        >
          <React.Suspense
            fallback={
              <div className="text-white text-center p-10">Loading...</div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/explore"
                element={<Navigate to="/explore/tools" replace />}
              />
              <Route path="/explore/:category" element={<Explore />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/connect" element={<Socials />} />
              <Route path="/reviews" element={<Reviews />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
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

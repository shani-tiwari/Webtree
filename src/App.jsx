import Home from "./pages/Home";
import bgImage from "./assets/webtree-bg.jpg";

function App() {

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div
        className="relative min-h-screen w-full bg-neutral-900 mx-auto flex justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Subtle dark overlay to ensure readability of text and UI */}
        <div
          className="absolute inset-0 bg-neutral-950/40 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full flex justify-center">
          <Home />
        </div>

       
      </div>
    </>
  );
}

export default App;

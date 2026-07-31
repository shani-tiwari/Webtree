import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { CollectionProvider } from "./context/CollectionContext";
import { registerSW } from "virtual:pwa-register";
import "./index.css";

registerSW({ immediate: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <CollectionProvider>
          <App />
        </CollectionProvider>
      </BrowserRouter>
  </StrictMode>
);

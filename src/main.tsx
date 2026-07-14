// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MapProvider from "./context/MapProvider";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <MapProvider>
      <App />
    </MapProvider>
  // </StrictMode>,
);

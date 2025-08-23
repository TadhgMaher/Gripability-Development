import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TinaProvider, TinaCMS } from "tinacms";
import App from "./App.tsx";
import "./index.css";

// Configure TinaCMS
const cms = new TinaCMS({
  enabled: process.env.NODE_ENV !== "production",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TinaProvider cms={cms}>
      <App />
    </TinaProvider>
  </StrictMode>
);

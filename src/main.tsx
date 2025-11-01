import React from "react"; // <--- Import React for StrictMode
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Best practice: Wrap in StrictMode.
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

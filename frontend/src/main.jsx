import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MoodContextProvider } from "./context/MoodContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoodContextProvider>
      <App />
    </MoodContextProvider>
  </React.StrictMode>
);

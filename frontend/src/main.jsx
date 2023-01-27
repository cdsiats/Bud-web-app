import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MoodContextProvider } from "./context/MoodContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MoodContextProvider>
        <App />
      </MoodContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

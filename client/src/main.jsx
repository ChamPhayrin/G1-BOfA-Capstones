import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the App component with AuthProvider to give it access to authentication context */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

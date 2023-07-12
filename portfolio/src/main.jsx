import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// React Router V4 - Browser Router
import { BrowserRouter } from "react-router-dom";
// Router accepts one child, therefore we pass it in main.jsx

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap app in component for info related to routing to other components */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

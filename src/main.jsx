import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TextProvider from "./context/TextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TextProvider>
    <App />
  </TextProvider>
);

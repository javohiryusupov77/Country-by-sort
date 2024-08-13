import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CoinProvider } from "./components/ContextProvide.jsx";
import { FlagsProvider } from "./components/FlagsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoinProvider>
      <FlagsProvider>
        <App />
      </FlagsProvider>
    </CoinProvider>
  </React.StrictMode>
);

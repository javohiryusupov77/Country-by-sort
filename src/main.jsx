import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CoinProvider } from "./components/ContextProvide.jsx";
import { CurrencyProvider } from "./components/CurrencyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoinProvider>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </CoinProvider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CounterProvider } from "./context/Counter.jsx";
import { ProductsProvider } from "./context/ProductsContext";
import { StudentProvider } from "./context/StudentContext.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <CartProvider> <StudentProvider>
      <CounterProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CounterProvider>
    </StudentProvider></CartProvider>
  </React.StrictMode>
);

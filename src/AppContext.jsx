// AppContext.js
import React from 'react';
import { CounterProvider } from './context/Counter';
import { ProductsProvider } from './context/ProductsContext';

const AppContextProvider = ({ children }) => {
  return (
    <CounterProvider>
      <ProductsProvider>
        {children}
      </ProductsProvider>
    </CounterProvider>
  );
};

export { AppContextProvider };

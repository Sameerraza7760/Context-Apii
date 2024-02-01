import React, { createContext, useReducer, useContext, useEffect } from "react";

// Initial state
const initialState = {
  cartItems: [],
};

const AddToCart = "AddToCart";
const DeleteToCart = "DeleteToCart";
const DeleteAllItemToCart = "DeleteAllItemToCart";

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case AddToCart:
      return { cartItems: [...state.cartItems, action.payload] };
    case DeleteToCart:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return { cartItems: updatedCartItems };

    case DeleteAllItemToCart:
      return { cartItems: [] };
    case "LoadCartState":
      return action.payload;
    default:
      return state;
  }
};

// Context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const savedCartState = localStorage.getItem("cartState");
    if (savedCartState) {
      try {
        const parsedState = JSON.parse(savedCartState);
        dispatch({ type: "LoadCartState", payload: parsedState });
      } catch (error) {
        console.error("Error parsing cart state from local storage:", error);
      }
    }
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// ...

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

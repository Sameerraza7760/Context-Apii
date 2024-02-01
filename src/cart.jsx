// Cart.jsx
import React from "react";
import { useCart } from "./context/CartContext";

function Cart() {
  const { state, dispatch } = useCart();
  console.log("hi", state);
  const handleDeleteAllItems =  () => {
    dispatch({ type: "DeleteAllItemToCart" });
  };
  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        <button
          style={{ backgroundColor: "orange" }}
          onClick={handleDeleteAllItems}
        >
          DeleteAllItem
        </button>
        {state?.cartItems?.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              className="cart-item-image"
              src={item.thumbnail}
              alt={item.name}
            />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>

              <button
                style={{ backgroundColor: "blue" }}
                onClick={() =>
                  dispatch({ type: "DeleteToCart", payload: item.id })
                }
              >
                DeleteToCart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        {/* <p>Total: ${calculateTotal()}</p> */}
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );

//   // Function to calculate the total price
//   function calculateTotal() {
//     return state?.cartItems
//       .reduce((total, item) => total + item.price, 0)
//       .toFixed(2);
//   }
}

export default Cart;

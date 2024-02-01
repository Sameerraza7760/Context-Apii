import React, { createContext, useContext } from "react";
import "./App.css";
import Counter from "./Counter";
import Product from "./Product";
import { CounterContext } from "./context/Counter";
import { ApiProductContext } from "./context/ProductsContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

function Home() {
  const { count } = useContext(CounterContext);
  const { products } = useContext(ApiProductContext);
  const { dispatch } = useCart()
  const navigate = useNavigate();
  const onAddToCart=(product)=>{
console.log(product);
dispatch({ type: "AddToCart", payload: product })
  }

  return (
    <>
       <button
        style={{ backgroundColor: "pink", border: "none" }}
        onClick={() => navigate("/Cart")}
      >
        Cart
      </button>
      <h1>{count}</h1>
      <button
        style={{ backgroundColor: "lightblue", border: "none" }}
        onClick={() => navigate("/Form")}
      >
        FormHere
      </button>
      <Counter />
      <Product />
      <div className="product-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={product.thumbnail}
        alt={product.name}
      />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <button style={{backgroundColor:"green"}} onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Home;

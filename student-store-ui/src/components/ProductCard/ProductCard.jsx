import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product, cart, setCart }) {
  function addToCart(product) {
    const checkProduct = cart?.find((item) => item?.id === product.id);
    if (checkProduct) {
      const updatedCart = cart?.map((item) => {
        if (item?.id === product.id) {
          console.log(cart);
          return { ...item, quantity: item.quantity + 1 };
        }

        console.log("hello" + product.quantity);
        return item;
      });
      setCart(updatedCart);
    } else {
      // spread operator and what it can take in?
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log("this is first ty");
      console.log(cart);
    }
  }

  function removeFromCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);
    if (checkProduct?.quantity === 1) {
      const updatedCart = cart?.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart?.map((item) => {
        if (item.id === product.id) {
          console.log(cart);
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      console.log(cart);
      setCart(updatedCart);
    }
  }

  return (
    <section className="product">
      <Link className="link" to={"products/" + product.id}>
        <img id="product-image" src={product.image} />
      </Link>
      <p className="productsName">{product.name}</p>
      <div style={{ fontSize: "1.25em" }}>⭐️⭐️⭐️⭐️⭐️</div>
      <p className="productsPrice">
        {product.price.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="bothButtons">
        <button
          className="addButt"
          onClick={() => {
            addToCart(product);
          }}
        >
          +
        </button>
        <button
          className="decButt"
          onClick={() => {
            removeFromCart(product);
          }}
        >
          -
        </button>
      </div>
      <div>{cart?.find((item) => item.id === product.id)?.quantity}</div>
    </section>
  );
}

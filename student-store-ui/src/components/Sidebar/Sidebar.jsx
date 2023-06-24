import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import CheckOut from "../CheckOut/CheckOut";

export default function Sidebar({ product, cart, setCart }) {
  const [isActive, setActive] = useState(null);
  let subTotal = 0;
  const taxes = 0.0875;
  let newTotal = 0;

  const toggleSidebar = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  cart?.forEach((product) => {
    subTotal += product.quantity * product.price;

    console.log(product.quantity, product.price);
  });

  return !isActive ? (
    <section className="sidebar-closed">
      <>
        <button className="openCart" onClick={toggleSidebar}>
          Open Cart
        </button>
      </>
    </section>
  ) : (
    <section className="sidebar-open">
      <>
        <button className="closedCart" onClick={toggleSidebar}>
          Close Cart
        </button>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <div>Cart is Currently Empty</div>
        ) : (
          <>
            <p className="table-title">
              <b>Name</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>Quantity</b>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <b>Price</b>
            </p>
            <div className="cart-list">
              {cart?.map((product, idx) => {
                return (
                  <div className="cart-item" key={idx}>
                    {product.name} &nbsp;&nbsp;&nbsp;&nbsp; {product.quantity}x{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    {product.price.toLocaleString("us-EN", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                );
              })}
            </div>

            <div className="table-title1">
              <b>Subtotal:</b>
              {"$"}
              {subTotal.toFixed(2)}
            </div>
            <div className="table-title1">
              <b>Tax:</b> ${(newTotal = subTotal * taxes).toFixed(2)}
            </div>
            <div className="table-title1">
              <b>Total:</b>${(subTotal + newTotal).toFixed(2)}
            </div>
            <CheckOut product={product} cart={cart} setCart={setCart} />
          </>
        )}
      </>
    </section>
  );
}

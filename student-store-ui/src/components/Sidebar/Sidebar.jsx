import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import CheckOut from "../CheckOut/CheckOut";

export default function Sidebar({ product, cart, setCart }) {
  const [isActive, setActive] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  let subTotal = 0;
  const taxes = 0.0875;
  let newTotal = 0;

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const toggleSidebar = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  cart?.forEach((product) => {
    subTotal += product.quantity * product.price;

    console.log(product.quantity, product.price);
  });
  return (
    <div>
      {!isActive ? (
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
              <>
                <div>No items added to cart yet. Start shopping now!</div>
              </>
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
                        {product.name} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {product.quantity}x &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {product.price.toLocaleString("us-EN", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </div>
                    );
                  })}
                </div>

                <div className="table-title1">
                  <b>Subtotal: </b>
                  {"$"}
                  {subTotal.toFixed(2)}
                </div>
                <div className="table-title1">
                  <b>Tax: </b> ${(subTotal * taxes).toFixed(2)}
                </div>
                <div className="table-title1">
                  <b>Total: </b>${(subTotal + subTotal * taxes).toFixed(2)}
                </div>
              </>
            )}
            <h2>Payment Info</h2>
            <div class="name-field">
              <label className="label">Name</label>
              <div clclassNameass="control ">
                <input
                  name="name"
                  className="checkout-form-input"
                  type="text"
                  placeholder="Student Name..."
                  value={nameInput}
                  onChange={handleNameInputChange}
                />
              </div>
            </div>

            <div className="email-field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  name="email"
                  class="checkout-form-input"
                  type="email"
                  placeholder="student@codepath.org"
                  value={emailInput}
                  onChange={handleEmailInputChange}
                />
              </div>
            </div>
            <CheckOut
              product={product}
              cart={cart}
              setCart={setCart}
              name={nameInput}
              email={emailInput}
            />
          </>
        </section>
      )}
    </div>
  );
}

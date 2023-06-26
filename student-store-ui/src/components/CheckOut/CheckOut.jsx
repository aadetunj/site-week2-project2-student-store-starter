import * as React from "react";
import "./CheckOut.css";
import { useState } from "react";

export default function CheckOut({ product, cart, setCart, name, email }) {
  const [checkOut, setCheckout] = useState(null);
  let subTotal = 0;
  const taxes = 0.0875;
  let newTotal = 0;

  cart?.forEach((product) => {
    subTotal += product.quantity * product.price;
  });

  const toggleCheckOut = (e) => {
    e.preventDefault();
    setCheckout(!checkOut);
  };

  const clearCart = (e) => {
    e.preventDefault();
    setCart([]);
    console.log(cart);
  };

  return !checkOut ? (
    <div className="check-out">
      <button className="checkOutbutton" onClick={toggleCheckOut}>
        Checkout
      </button>
    </div>
  ) : (
    <div className="check-out">
      <ul>
        <h2>Check Out Info</h2>
        <h3>Receipt</h3>
        <p>
          Showing receipt for {name} available at {email}:
        </p>
        {cart?.map((product, idx) => {
          {
            return (
              <li key={idx}>
                &bull; {product.quantity} total {product.name} purchased at a
                cost of ${product.price.toFixed(2)} for a total cost of &nbsp; $
                {(product.price * product.quantity).toFixed(2)}
                <br></br>
              </li>
            );
          }
        })}
        &bull; Before taxes, the subtotal was ${subTotal.toFixed(2)}
        <br></br>
        &bull; After taxes and fees were applied, the total comes out to $
        {(subTotal + subTotal * taxes).toFixed(2)}
      </ul>
      <div className="centerbutt">
        <button className="checkOutbutton" onClick={toggleCheckOut}>
          Close Receipt
        </button>
      </div>
      <div className="centerbutt">
        <button className="checkOutbutton" onClick={clearCart}>
          Exit
        </button>
      </div>
    </div>
  );
}

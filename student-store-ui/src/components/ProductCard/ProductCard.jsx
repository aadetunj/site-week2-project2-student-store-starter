import * as React from "react";
import "./ProductCard.css";

export default function ProductCard({ name, image, id, price }) {
  return (
    <section className="product">
      <img id="product-image" src={image} />
      <p className="productsName">{name}</p>
      
      <div style = {{fontSize: "1.25em"}} >⭐️⭐️⭐️⭐️⭐️</div>  
    
      <p className="productsPrice">
        {price.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </section>
  );
}

import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({name, image, id, price}) {
  let productID = id

  return (
    
    <section className="product">
      <img id="product-image" src={image} />
      <p className="productsName">{name}</p>
      <p className="productsPrice">
        {price.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </section>
    
  );
}
import * as React from "react";
import "./Home.css";
import { useState } from "react";

export default function Home({ products }, newVal) {
  const [filterProducts, setFilterProducts] = useState(products);

  function createProduct(info) {
    return (
      <section className="product">
        <img id="product-image" src={info.image} />
        <p className="productsName">{info.name}</p>
        <p className="productsPrice">${info.price}</p>
      </section>
    );
  }

  return (
    <div className="product-list">
      {/* {console.log(products)} */}

      {products?.map((product) => createProduct(product))}
    </div>
  );
}

// current errors:
// keeps trying to display the image of the icon in the hero hearder, might have to import it!

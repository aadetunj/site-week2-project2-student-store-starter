import * as React from "react";
import "./Home.css";
import { useState } from "react";
import Search from "../Search/Search";

export default function Home({ products }) {
  const [value, setValue] = useState("");

  const filterProducts = products?.filter((product) => {
    return product.name.toLowerCase().includes(value.toLowerCase());
  });

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
    <>
      <div>
        <Search value={value} setValue={setValue} />

        <div className="categories">
          <ul className="category-menu">
            <li className="is-active">
              <button className="cloth">All Categories</button>
            </li>
            <li>
              <button className="cloth">Clothing</button>
            </li>
            <li>
              <button className="cloth">Food</button>
            </li>
            <li>
              <button className="cloth">Accessories</button>
            </li>
            <li>
              <button className="cloth">Tech</button>
            </li>
          </ul>
        </div>

        <div className="product-list">
          {filterProducts?.map((product) => createProduct(product))}
        </div>
      </div>
    </>
  );
}

// current errors:
// keeps trying to display the image of the icon in the hero hearder, might have to import it!

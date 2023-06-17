import * as React from "react";
import "./Home.css";
import { useState } from "react";
import Search from "../Search/Search";
import SubNavbar from "../SubNavbar/SubNavbar";
import { Link } from "react-router-dom";

export default function Home({ products }) {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  console.log(products)
  const filterProducts = products?.filter((product) => {
    return (product.name.toLowerCase().includes(value.toLowerCase()) && product.category.toLowerCase().includes(category.toLowerCase()));
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

       {/* add the subnabar here */}


        <SubNavbar category={category} setCategory={setCategory}/>

        <div className="product-list">
          {filterProducts?.map((product) => createProduct(product))}
        </div>
      </div>
    </>
  );
}

// current errors:
// keeps trying to display the image of the icon in the hero hearder, might have to import it!

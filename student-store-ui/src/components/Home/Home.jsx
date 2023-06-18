import * as React from "react";
import "./Home.css";
import { useState } from "react";
import Search from "../Search/Search";
import SubNavbar from "../SubNavbar/SubNavbar";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Hero from "../Hero/Hero";

export default function Home({ products }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  // console.log(products);
  const filterProducts = products?.filter((product) => {
    return (
      product.name.toLowerCase().includes(value.toLowerCase()) &&
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  });

  return (
    <>
      <div>
      <Hero />
        <Search value={value} setValue={setValue} />

        {/* add the subnabar here */}

        <SubNavbar category={category} setCategory={setCategory} />

        <div className="product-list">
          {filterProducts?.map((product, idx) => {
            return (
              <Link className="link" to={"products/" + product.id}>
                <ProductCard name={product.name} image ={product.image} id = {product.id} price ={product.price} key = {idx}/>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

// current errors:
// keeps trying to display the image of the icon in the hero hearder, might have to import it!

import * as React from "react";
import "./Home.css";
import { useState } from "react";
import Search from "../Search/Search";
import SubNavbar from "../SubNavbar/SubNavbar";
import ProductCard from "../ProductCard/ProductCard";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Sidebar from "../Sidebar/Sidebar";

export default function Home({ products, cart, setCart }) {
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
        <Sidebar cart={cart} setCart={setCart} />
        <Hero />
        <Search value={value} setValue={setValue} />
        {/* add the subnabar here */}

        <SubNavbar category={category} setCategory={setCategory} />
        <div className="title-and-product-grid">
          <div className="best-seller-title">
            <b>Best Sellers</b>
          </div>
          <div className="product-list" id="product-list">
            {filterProducts?.map((product) => {
              return (
                <ProductCard
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
        <About />
        <Contact />
      </div>
    </>
  );
}

// current errors:
// keeps trying to display the image of the icon in the hero hearder, might have to import it!

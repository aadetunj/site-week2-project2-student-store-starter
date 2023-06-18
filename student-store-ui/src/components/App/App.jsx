import * as React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import "./App.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import Footer from "../Footer/Footer";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState([]);

  // const [value, setValue] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      // do stuff
      setProducts(response.data.products);
    });
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />

          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Routes>
        <Footer></Footer>
        </main>
      </BrowserRouter>
    </div>
  );
}

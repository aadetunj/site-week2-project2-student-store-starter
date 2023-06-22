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
  const url = "http://localhost:3001/";

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
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home products={products} />} />
              <Route path="products/:id" element={<ProductDetails />} />
            </Route>
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

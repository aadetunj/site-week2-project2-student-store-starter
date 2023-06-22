import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      });
  }, []);

  console.log(product);
  return (
    <>
      <div className="product-detail" key={id}>
        <div className="product-container">
          <div
            className="product-name"
            style={{
              justifyContent: "center",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "2rem",
            }}
          >
            {product?.name}!
          </div>
          <div
            className="product-image"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <img
              src={product?.image}
              alt={product?.name}
              style={{
                width: "50%",
                borderRadius: "10px",
                maxWidth: "60vh",
                maxHeight: "90vh",
              }}
            />
          </div>
          <p style={{ display: "flex", justifyContent: "center" }}>
            {product?.description}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Link to={"/"}>
              <button className="backButton">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

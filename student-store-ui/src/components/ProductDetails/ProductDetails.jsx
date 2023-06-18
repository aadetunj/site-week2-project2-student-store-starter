import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  // console.log("heyyyyyyyyyy"+ id);
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
              style={{ width: "50%", borderRadius: "10px" }}
            />
          </div>
          <p style={{ display: "flex", justifyContent: "center" }}>
            {product?.description}
          </p>
          <div
            className="backButton"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Link to={"/"}>
              <button style={{ fontSize: "18px" }}>Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

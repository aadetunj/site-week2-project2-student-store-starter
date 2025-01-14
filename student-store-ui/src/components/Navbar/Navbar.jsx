import * as React from "react";
import "./Navbar.css";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="site-title">
          <b>A-A-A?</b>
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <a href="#Contact">Contact Us</a>
          </li>
          <li>
            <a href="#product-list">Buy Now</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

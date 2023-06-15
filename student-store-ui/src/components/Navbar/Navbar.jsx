import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">Logo Init?</a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Buy Now</a>
        </li>
      </ul>
    </nav>
  )
}

import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setActive] = useState(null);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return !isActive ? (
    <section className="sidebar-closed">
      <>
        <button className="openCart" onClick={toggleSidebar}>
          Open Cart
        </button>
      </>
    </section>
  ) : (
    <section className="sidebar-open">
      <>
        <button className="closedCart" onClick={toggleSidebar}>
          Close Cart
        </button>
        <h1>Your Cart</h1>
        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>

        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>

        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>

        <div>yurrrrrrrrrrr</div>
        <div>yurrrrrrrrrrr</div>
      </>
    </section>
  );
}

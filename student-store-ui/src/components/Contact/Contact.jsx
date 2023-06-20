import * as React from "react";
import "./Contact.css";

export default function About() {
  return (
    <div id="Contact" className="contact">
      <div className="contentContact">
        <h3>Contact Us</h3>
        <div className="summary">
          <ul className="info">
            <li>
              <span className="label">Email:</span>
              <span>code@path.org</span>
            </li>
          </ul>
          <div className="media">
            {/* <img
              src="/assets/happy_person.517b658d.svg"
              alt="codepath large"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

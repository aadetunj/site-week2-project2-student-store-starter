import * as React from "react";
import "./Contact.css";

export default function About() {
  return (
 
    <div id ="Contact" className="allContactStuff">
      <h3 className="h3contact">Contact Us</h3>
      <div className="summaryContact">
        <div className="text2">
          <p>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; code@path.org</p>
          <p>Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1-800-CODEPATH</p>
          <p>Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 123 Fake Street, San Francisco, CA</p>
      
        </div>
        <div className="mediaContact">
          <img
            style={{ maxWidth: "60%", height: "auto", borderRadius: "0.5rem" }}
            src="https://s.hdnux.com/photos/01/22/32/67/21605843/4/1200x0.jpg"
            alt="codepath large"
          ></img>
        </div>
      </div>
    </div>
  );
}

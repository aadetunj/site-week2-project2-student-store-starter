import * as React from "react";
import "./About.css";

export default function About() {
  return (
    <div id ="About" className="allMinis">
        <h3 className="h3about">About</h3>
      <div className="summaryAbout">
        <div className="text1">
          <p>
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <p>
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
          <p>
            All proceeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
        <div className="mediaAbout">
          <img style={{borderRadius: "1rem"}}
            src="https://pbs.twimg.com/profile_images/1527299950073217024/H3Kw4tkF_400x400.jpg"
            alt="codepath large"
          ></img>
        </div>
      </div>
    </div>
  );
}

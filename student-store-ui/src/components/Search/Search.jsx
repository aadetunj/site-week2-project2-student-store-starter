import { useState } from "react";
import "./Search.css";

function Search({ searchQuery, valSetter }) {
  // const [val, setval] = useState("");
  // function handleOnClick(event) {
  //   event.preventDefault();
  //   props.handleSearch();
  // }
  {
    console.log("this is search " + searchQuery);

    console.log(val)
  }
  return (
    <form style={{ marginTop: "15vh", textAlign: "center" }}>
      <input
        placeholder="Search..."
        // defaultValue={""}
        value={searchQuery}
        onChange={(e) => {
          // e.preventDefault();
          // valSetter(e.target.value);
          valSetter(searchQuery)
        }}
        type="search"
        style={{ width: "50vh", padding: "10px", borderRadius: "0.25rem" }}
      />

    </form>
    
  );

  console.log("this is search " + val);
}

export default Search;

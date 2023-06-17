import { useState } from "react";
import "./Search.css";

function Search({ value, setValue }) {
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <form style={{ marginTop: "15vh", textAlign: "center" }}>
      <input
        placeholder="Search..."
        onChange={handleChange}
        type="input"
        style={{ width: "50vh", padding: "10px", borderRadius: "0.25rem" }}/>
    </form>
  );
}

export default Search;

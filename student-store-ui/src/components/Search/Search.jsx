import "./Search.css";

function Search({ value, setValue }) {
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <form style={{ marginTop: "15vh", textAlign: "center", justifyContent: "center" }}>
      <input className="searchBar"
        placeholder="Search..."
        onChange={handleChange}
        type="input"
        style={{ width: "80vh", padding: "10px", borderRadius: "0.5rem", height: "3rem"}}
      />
    </form>
  );
}

export default Search;

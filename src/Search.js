import React from "react";

function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Songs:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a song to search..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
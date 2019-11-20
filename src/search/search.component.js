import React from "react";
import "./search.scss";
export default function Search({ search = "", setSearch }) {
  return (
    <div className="SearchContainer">
      {/* should debounce this change, but this is just for fun. */}
      {/* <input
        type="text"
        name="SearchBar"
        placeholder="search"
        value={search}
        onChange={setSearch}
      /> */}
    </div>
  );
}

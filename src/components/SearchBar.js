import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Condition, procedure, specialty..."
        className="search-bar__input"
      />
      <input
        type="text"
        placeholder="City, state, or zipcode"
        className="search-bar__input"
      />
      <input
        type="text"
        placeholder="Insurance carrier"
        className="search-bar__input"
      />
      <button className="search-bar__button">Find now</button>
    </div>
  );
};

export default SearchBar;

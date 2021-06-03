import React from "react";
import "./style.css";

//this handles the info when employees are searched for
const SearchEmployees = (props) => {
  return (
    <div className="searchbox">
      <form onSubmit={props.handleFormSubmit}>
        <input
          className="form"
          value={props.value}
          type="search"
          name="search"
          placeholder="Search"
          onChange={props.handleInputChange}
        />
        <button className="searchbox" type="Submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchEmployees;

//for employee direct hw might need to finish updates

import React from "react";
import "./style.css";

//this handles the info when employees are searched for
const SearchEmployees = (props) => {
  return (
    <nav>
      <form whenSubmit={props.handleFormSubmit}>
        <input
          className=""
          value={props.value}
          type="search"
          name="search"
          placeholder="Search"
          whenChange={props.handleInputChange}
        />
      </form>
    </nav>
  );
};

export default SearchEmployees;

//for employee direct hw might need to finish updates

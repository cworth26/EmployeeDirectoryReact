import React from "react";
import "./style.css";

//creating the table for employee directory
//finish this
const Table = (props) => {
  return (
    <table className="">
      <thead>
        <tr>
          <th scope="col" onClick={() => props.sortBy("name")}>
            Name
          </th>
          <th scope="col" onClick={() => props.sortBy("phone")}>
            Phone
          </th>
          <th scope="col" onClick={() => props.sortBy("email")}>
            Email
          </th>
        </tr>
      </thead>

      <tbody>
        {props.state.filteredSearch.map((employee) => {
          const { first, last } = employee.name;
          const Name = `${first} ${last}`;

          return (
            <th key={employee.login}>
              <td>
                <img src={employee.picture.thumbnail} alt={Name} />
              </td>
              <td className>"{Name}</td>
              <a href={employee.phone}>{employee.phone}</a>
            </th>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

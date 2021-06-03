import React from "react";
import "./style.css";

//creating the table for employee directory
//finish this
const Table = (props) => {
  return (
    <table className="">
      <thead>
        <tr>
          <th scope="col" onClick={() => props.sortBy("firstname")}>
            Name
          </th>
          <th scope="col">
            Phone
            <span onClick={() => props.sortBy("email")}>Email</span>
          </th>
          <th scope="col">Email</th>
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
              <a href={`{employee.phone}`}>{employee.phone}</a>
              <a href={`{employee.email}`}>{employee.email}</a>
            </th>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

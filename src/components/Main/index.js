import React, { Component } from "react";
import SearchEmployees from "../SearchEmployees";
import Table from "../Table";
import API from "../../utils/API";

//setting up class component
//done
class EmployeeInfo extends Component {
  state = {
    employees: [],
    search: "",
    filteredSearch: [],
    sortEmployees: this.initialSortEmployees,
  };

  get initialSortEmployees() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  }

  //this will invoke after the first lifecycle, this will load the random employees
  //done
  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredSearch: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  //function that handles changes & filters by employee name
  //done
  handleInputChange = (e) => {
    const value = e.target.value;
    //merging new & previous state (what setstate does)
    this.setState({ search: value });
    this.filteredSearch(value.toLowerCase().trim());
  };

  //function that handles inputs made by users on the submit form
  //done
  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  //revisit this!
  //done?
  // get initialSortEmployees() {
  //   return {
  //     name: "",
  //     phone: "",
  //     email: "",
  //     dob: "",
  //   };
  // }

  //create the ability to sort by employee name
  //need help with this
  sortBy = (key) => {
    let sortInstructions = this.state.filteredSearch;
    if (this.state.sortEmployees[key]) {
      this.setState({
        filteredSearch: sortInstructions.reverse(),
        sortEmployees: {
          ...this.initialSortEmployees,
        },
        //i'm lost
      });
    }
  };

  //create the ability to filter by employee HERE
  //done?
  filteredSearch = (input) => {
    if (input) {
      this.setState({
        filteredSearch: this.state.employees.filter((employee) => {
          return employee.name.first.toLowerCase().includes(input);
        }),
      });
    } else {
      this.setState({ filteredSearch: this.state.employees });
    }
  };

  //finish setting this up
  //done?
  render() {
    return (
      <>
        <SearchEmployees
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <Table
          state={this.state}
          sortBy={this.sortBy}
          filteredSearch={this.filteredSearch}
        />
      </>
    );
  }
}

//sending info out
export default EmployeeInfo;

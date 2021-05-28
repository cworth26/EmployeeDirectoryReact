import React from "react";
import SearchEmployees from "../SearchEmployees";
import API from "../utils/API";

//setting up class component 
class EmployeeInfo extends Component {
  state = {
    employees: [],
    search: "",
    filteredSearch: [],
    sortEmployees: this.initialSortEmployees,
  };
}

//this will invoke after the first lifecycle
componentDidMount() {
  API.returnEmployees()
  .then((res) =>
  this.setState({
    employees: res.data.results,
    filteredSearch: res.data.results,
  })
  )
  .catch((err) => console.log(err));
}

//function that handles changes & filters by employee name
handleInputChange = (e) => { 
  const value = e.target.value;
//merging new & previous state    
  this.setState({ search: value });
  this.filteredSearch(value.toLowerCase().trim());
};

handleFormSubmit = (e) => {
  e.preventDefault();
};

//revisit this!
// get initialSortEmployees () {
//   return {
//     name: "",
//     phone: "",
//     email: "",
//     dob: "",
//   };
// };

//finish setting this up
render () {
  return (
<>
<div>
<SearchEmployees
state={this.state}
sortBy={this.sortBy}
filteredSearch={this.filteredSearch}
/>
</div>
</>
  );
}

export default EmployeeInfo;

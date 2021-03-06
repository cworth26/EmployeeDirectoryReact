import React from "react";
import "./style.css";

const DirectoryHeader = () => {
  return (
    <header>
      <h1>Welcome to your Employee Directory!</h1>
      <p>Filter or Search through your Employees!</p>
    </header>
  );
};

// class DirectoryHeader extends Component {
//   constructor(props) {
//     super(props);
//     //storing the initial date of the 'DirectoryHeader' component & this holds the information to be rendered!
//     this.state = {
//       message: "Welcome to Your Employee Directory",
//       instructions: "Filter or Search!",
//     };
//   }

// styles = {
//   color: "blue",
//   fontStyle: "bold",
// };

//this is what will be displayed on the page for web visitors
//   render() {
//     return (
//       <div className="App">
//         <h3>{this.state.message}</h3>
//         <h4>{this.state.instructions}</h4>
//       </div>
//     );
//   }
// }
export default DirectoryHeader;

//keep for employee directory assignment

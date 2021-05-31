import React from "react";
import DirectoryHeader from "./components/DirectoryHeader";
import "./App.css";
import EmployeeInfo from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <DirectoryHeader />
      <EmployeeInfo />
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBxQ5Qgf13mwPIrQsEVWmPmzPVqyfoxenk";

// Create a new component that should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />  
    </div>
  );
};

// Take this component's generated HTML and put in onto the DOM
ReactDOM.render(<App />, document.querySelector(".container"));

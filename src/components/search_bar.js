import React, { Component } from "react";

// define a new class called Searchbar and give it all the functionality of React.Component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" }; 
}

  render() {
    // returns an input box with an event handler attached that watches and runs the oninputchange func
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;

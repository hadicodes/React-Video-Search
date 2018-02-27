import React, { Component } from "react";


// define a new class called Searchbar and give it all the functionality of React.Component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    // returns an input box with an event handler attached that watches for text changes on the input
    return (
      <div>
        <input
          value = {this.state.term}  
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;

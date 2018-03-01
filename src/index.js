import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
// import VideoListItem from "./components/video_list_item";
const API_KEY = "AIzaSyBxQ5Qgf13mwPIrQsEVWmPmzPVqyfoxenk";

// Create a new component that should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: "surboards" }, videos => {
      console.log(videos);
      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />

      </div>
    );
  }
}
// Take this component's generated HTML and put in onto the DOM
ReactDOM.render(<App />, document.querySelector(".container"));

import React, { Component } from "react";

import Posts from "./containers/Posts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Posts</h1>
        <Posts />
      </div>
    );
  }
}

export default App;

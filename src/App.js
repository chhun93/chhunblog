import React, { Component } from "react";
import Header_Large from "./Header/Header_Large";
import Body from "./Components/Body";
import "./App.css";

class App extends Component {
  render = () => {
    return (
      <div>
        <Header_Large />
        <Body />
      </div>
    );
  };
}

export default App;
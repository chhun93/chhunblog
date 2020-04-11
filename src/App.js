import React, { Component } from "react";
import HeaderLg from "./Header/HeaderLg";
import Content from "./Components/Content";
import "./DecorateFiles/App.css";

class App extends Component {
  render = () => {
    return (
      <div>
        <HeaderLg />
        <Content />
      </div>
    );
  };
}

export default App;
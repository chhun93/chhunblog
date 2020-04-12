import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import HeaderLg from "./Header/HeaderLg";
import Content from "./Components/Content";
import WritePost from "./Components/WritePost";
import "./DecorateFiles/App.css";

class App extends Component {
  render = () => {
    return (
      <div>
      <HeaderLg/>
      <Content/>
      </div>
    );
  };
}

export default App;
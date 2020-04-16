import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import HeaderLg from "./Header/HeaderLg";
import Content from "./Components/Content";
import WritePost from "./Components/WritePost";

class App extends Component {
  render = () => {
    return (
      <HashRouter>
        <HeaderLg/>
        <Route path="/" exact={true} component={Content} />
        <Route path="/writePost" component={WritePost} />
      </HashRouter>
    );
  };
}

export default App;

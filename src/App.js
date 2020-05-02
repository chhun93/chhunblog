import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import HeaderLg from "./Components/Header/HeaderLg";
import Content from "./Components/Contents/Content";
import WritePost from "./Components/Contents/WritePost";

class App extends Component {
  render = () => {
    return (
      <HashRouter>
        <HeaderLg />
        <Route path="/" exact={true} component={Content} />
        <Route path="/writepost" component={WritePost} />
      </HashRouter>
    );
  };
}

export default App;

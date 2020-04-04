import React, { Component } from "react";
import HeaderLg from "./Header/LargeHeader";
import Posts from "./Contents/Posts";
import './DecorateFiles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderLg />
        <Posts />
      </div>
    );
  }
}

export default App;

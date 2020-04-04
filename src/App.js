import React, { Component } from "react";
import HeaderLg from "./Header/LargeHeader";
import Contents from "./Contents/Contents";
import './DecorateFiles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderLg />
        <Contents />
      </div>
    );
  }
}

export default App;

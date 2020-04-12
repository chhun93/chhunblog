import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../DecorateFiles/HeaderLg.css";
import WritePost from "../Components/WritePost";
class HeaderLg extends Component {
  render() {
    return (
      <div className="LgHeaderBar">
        <Navbar bg="white" className="justify-content-center">
          <Navbar.Brand href="/">TestHome</Navbar.Brand>
        </Navbar>
        <Nav>
          <Nav.Link href = "/writePost">TEST1</Nav.Link>
          <Nav.Link>TEST2</Nav.Link>
          <Nav.Link>TEST3</Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default HeaderLg;

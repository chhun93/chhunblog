import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../DecorateFiles/HeaderLg.css";

class HeaderLg extends Component {
  render() {
    return (
      <div className="LgHeaderBar">
        <Navbar bg="white" className="justify-content-center">
          <Navbar.Brand href="/">TestHome</Navbar.Brand>
        </Navbar>
        <Nav className="justify-content-center">
          <Link to="/writePost">
            <Nav.Link>TEST1</Nav.Link>
          </Link>
          <Nav.Link>TEST2</Nav.Link>
          <Nav.Link>TEST3</Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default HeaderLg;

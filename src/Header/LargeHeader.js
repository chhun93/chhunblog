import React, { Component } from "react";
import { Navbar, Nav, FormControl, Button, InputGroup } from "react-bootstrap";
import "./LargeHeader.css";
class LargeHeader extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="md-0">Hello_Header</Navbar.Brand>
        </Navbar>
        <Navbar bg="dark" variant="dark">
          <Nav className="md-0">
            <Nav.Link href="#test1">test1</Nav.Link>
            <Nav.Link href="#test2">test2</Nav.Link>
          </Nav>
          <InputGroup className="mb-3" size="sm">
            <FormControl placeholder="Search" />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Navbar>
      </div>
    );
  }
}

export default LargeHeader;

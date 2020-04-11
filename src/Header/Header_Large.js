import React, { Component } from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import "../DecorateFiles/Header_Large.css";

class Header_Large extends Component {
  state = {
    modal: false,
    NaviListTwo: "test2",
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    {
      this.state.modal
        ? this.setState({
            NaviListTwo: "test2",
          })
        : this.setState({
            NaviListTwo: "test3",
          });
    }
  };
  render() {
    return (
      <div className = "LgHeaderBar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Hello_Header</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              variant="dark"
              className="NaviListOne"
              onClick={this.toggle}
            >
              test1
            </Nav.Link>
            <Nav.Link className="NaviListTwo">
              {this.state.NaviListTwo}
            </Nav.Link>
            <Nav.Link className="NaviListThree">test4</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Header_Large;

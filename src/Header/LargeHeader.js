import React, { Component } from "react";
import { Navbar, Nav, FormControl, Button, InputGroup } from "react-bootstrap";
import "../DecorateFiles/LargeHeader.css";

class LargeHeader extends Component {
  state = {
    modal: false,
    title: "",
    contents: "",
    Navi_List_Two: "test2",
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    console.log(this.state.modal);
    if (this.state.modal === false) {
      this.setState({
        Navi_List_Two: "test3",
      });
    } else {
      this.setState({
        Navi_List_Two: "test2",
      });
    }
  };
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="md-0">Hello_Header</Navbar.Brand>
        </Navbar>
        <Navbar bg="dark" variant="dark" className="Navi_List">
          <Nav>
            <Button
            size="sm"
              variant="dark"
              className="Navi_List_one"
              onClick={this.toggle}
            >
              test1
            </Button>
            <Button 
            size="sm" variant="dark">{this.state.Navi_List_Two}</Button>
          </Nav>
          <InputGroup className="mb-3" size="sm" className="Navi_List_Input">
            <FormControl placeholder="Search" className="Navi_List_InputBox" />
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

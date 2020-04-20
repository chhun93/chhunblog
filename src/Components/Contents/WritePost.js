import React, { Component } from "react";
import { FormControl, Button, ButtonGroup } from "react-bootstrap";
import "../../DecorateFiles/WritePost.css";

class WritePost extends Component {
  state = {
    wtitle: "",
    wcontent: "",
  };
  writeChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="wContainer">
        <FormControl
          className="wTitle"
          placeholder="제목 35글자"
          maxLength="35"
          name="wtitle"
          onChange={this.writeChange}
        />
        <FormControl
          className="wContent"
          as="textarea"
          placeholder="본문"
          name="wcontent"
          onChange={this.writeChange}
        />
        <ButtonGroup className="d-flex justify-content-end">
          <Button
            className="mr-5 ml-5"
            size="sm"
            variant="secondary"
            onClick={this.toggleModalFlag}
          >
            Cancel
          </Button>
          <Button
            className="mr-5 ml-5"
            size="sm"
            variant="success"
            onClick={this.toggleModalFlag}
          >
            Save
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default WritePost;

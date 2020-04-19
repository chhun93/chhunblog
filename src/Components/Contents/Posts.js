import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../DecorateFiles/Posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFlag: false,
      key: props.id,
      title: props.title,
      body: props.body,
    };
  }
  toggleModalFlag = () => {
    this.setState({
      modalFlag: !this.state.modalFlag,
    });
  };
  whythismake = () => {};
  render() {
    const { title, body } = this.state;

    return (
      <div className="postBox">
        <div onClick={this.toggleModalFlag}>
          <div className="postTitle">{title}</div>
          <div className="postBody">{body}</div>
        </div>
        <Modal show={this.state.modalFlag} onHide={this.whythismake}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{body}</Modal.Body>
          <Modal.Footer>
            <Button
              size="sm"
              variant="secondary"
              onClick={this.toggleModalFlag}
            >
              Close
            </Button>
            <Button size="sm" variant="success" onClick={this.toggleModalFlag}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Posts;

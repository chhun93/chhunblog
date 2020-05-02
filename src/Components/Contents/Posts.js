import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import "../../DecorateFiles/Posts.css";

import { post_read,post_remove } from "../../Reducer/PostReducer";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFlag: false,
      key: props.postNo,
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
          <h4 className="postTitle">{title}</h4>
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
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Posts;

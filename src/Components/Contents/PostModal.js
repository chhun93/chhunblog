import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { post_read, modal_up } from "../../Reducer/PostReducer";

import "../../DecorateFiles/PostModal.css";

class PostModal extends Component {

  toggleModalFlag = () => {
    this.props.dispatch(modal_up());
  };

  whythismake = () => {};

  render() {
      
    const posts = this.props.posts;

    return (
      <Modal
        show={this.state.modalFlag}
        onHide={this.whythismake}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{posts.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{posts.body}</Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={this.toggleModalFlag}>
            Close
          </Button>
          <Button size="sm" variant="success" onClick={this.toggleModalFlag}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect()(PostModal);
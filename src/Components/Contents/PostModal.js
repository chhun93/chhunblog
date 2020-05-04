import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { modal_up } from "../../Reducer/PostReducer";
import "../../DecorateFiles/PostModal.css";

class PostModal extends Component {
  state = {};
  whythismake = () => {};
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
    console.log(nextProps);
  }

  render() {
    return (
      <Modal
        show={this.state.modalUp}
        onHide={this.whythismake}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.body}</Modal.Body>
        <Modal.Footer>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => this.props.dispatch(modal_up())}
          >
            Close
          </Button>
          <Button
            size="sm"
            variant="success"
            onClick={() => this.props.dispatch(modal_up())}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

let stateProps = (state) => {
  return {
    selectedPost: state.selectedPost,
    modalUp: state.modalUp,
  };
};

export default connect(stateProps)(PostModal);

import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "../DecorateFiles/Contents.css";

class Contents extends Component {
  state = {
    posts: [],
  };
  render = () => {
    return (
      <div>
        <Container className="Post_Container">
          <Row>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
          </Row>
          <Row>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
          </Row>

          <Row>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
            <Col>Hello_Posts</Col>
          </Row>
          <Row>
            <Col>
              <Spinner
                size="sm"
                animation="border"
                role="status"
                variant="secondary"
              />
            </Col>
            <Col>
              <Spinner
                size="sm"
                animation="border"
                role="status"
                variant="secondary"
              />
            </Col>
            <Col>
              <Spinner
                size="sm"
                animation="border"
                role="status"
                variant="secondary"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default Contents;

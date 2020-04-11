import React, { Component } from "react";
import "../DecorateFiles/Posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.id,
      title: props.title,
      body: props.body,
    };
  }
  render() {
    const { title, body } = this.state;

    return (
      <div className="postBox">
        <div className="postTitle">{title}</div>
        <div className="postBody">{body}</div>
      </div>
    );
  }
}

export default Posts;

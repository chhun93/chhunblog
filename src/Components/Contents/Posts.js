import React, { Component } from "react";
import { connect } from "react-redux";
import "../../DecorateFiles/Posts.css";

import { post_read, modal_up } from "../../Reducer/PostReducer";

class Posts extends Component {
  handlePostRead = (PostNo) => {
    this.props.dispatch(post_read(PostNo));
    this.props.dispatch(modal_up());
  };
  render() {
    const posts = this.props.posts;
    return (
      <div
        className="postBox"
        onClick={() => this.handlePostRead(posts.postNo)}
      >
        <h4 className="postTitle">{posts.title}</h4>
        <div className="postBody">{posts.body}</div>
      </div>
    );
  }
}

export default connect()(Posts);

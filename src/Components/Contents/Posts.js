import React, { Component } from "react";
import { connect } from "react-redux";
import PostModal from "./PostModal";
import "../../DecorateFiles/Posts.css";

import { post_read, modal_up } from "../../Reducer/PostReducer";

class Posts extends Component {
  handleUpdatePost = (postNo) => {
    this.props.dispatch(post_read(postNo), modal_up());
    console.log(postNo);
  };

  render() {
    const posts = this.props.posts;
    return (
      <div
        className="postBox"
        onClick={() => this.handleUpdatePost(posts.postNo)}
      >
        <h4 className="postTitle">{posts.title}</h4>
        <div className="postBody">{posts.body}</div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps)(Posts);

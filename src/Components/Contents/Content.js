import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import Posts from "./Posts";
import "../../DecorateFiles/Content.css";

class Content extends Component {
  state = {
    isLoading: true,
  };

  getPosts = async () => {
    this.setState({ isLoading: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getPosts();
    }, 2000);
  }

  render() {
    const { posts } = this.props;

    const postList = posts.map((posts) => (
      <Posts key={posts.postNo} title={posts.title} body={posts.body} />
    ));

    return (
      <div className="contentContainer">
        <div className="contentBody">
          {this.state.isLoading ? (
            <div className="loadingImg">
              <Spinner variant="success" animation="border" role="status" />
            </div>
          ) : (
            <div className="contentPostBox">{postList}</div>
          )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(Content);

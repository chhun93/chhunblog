import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";
import { Spinner } from "react-bootstrap";
import "../DecorateFiles/Body.css";

class Body extends Component {
  state = {
    postList: [],
    isLoading: true,
    pageDown: 0,
  };

  getPosts = async () => {
    const { data: postList } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("Readed");
    this.setState({ postList, isLoading: false });
  };

  componentDidMount() {
    this.getPosts();
  }

  clickBodyContainer() {}

  render() {
    const postListMap = this.state.postList.map((post) => (
      <Posts key={post.id} title={post.title} body={post.body} />
    ));

    return (
      <div className="bodyContainer" onClick={this.clickBodyContainer}>
        {this.state.isLoading ? (
          <Spinner
            className="loadingSpinner"
            animation="border"
            role="status"
          />
        ) : (
          <div className="bodyPostBox">{postListMap}</div>
        )}
      </div>
    );
  }
}

export default Body;

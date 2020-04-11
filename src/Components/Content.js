import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";
import { Spinner } from "react-bootstrap";
import "../DecorateFiles/Content.css";

class Content extends Component {
  state = {
    postList: [],
    isLoading: true,
  };
  // api 주소
  //"https://jsonplaceholder.typicode.com/posts"
  getPosts = async () => {
    //여기서 postList는 state변수를 가리키는것이 아님??
    const { data: postList } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ postList, isLoading: false });
    console.log("Readed : " + this.state.postList.length + "개");
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const postListMap = this.state.postList.map((post) => (
      <Posts key={post.id} title={post.title} body={post.body} />
    ));
    return (
      <div className="contentContainer">
        {this.state.isLoading ? (
          <Spinner
            className="loadingSpinner"
            animation="border"
            role="status"
          />
        ) : (
          <div className="contentPostBox">{postListMap}</div>
        )}
      </div>
    );
  }
}

export default Content;

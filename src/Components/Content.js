import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";
import { Spinner, ButtonGroup, Button } from "react-bootstrap";
import "../DecorateFiles/Content.css";

class Content extends Component {
  state = {
    postList: [],
    isLoading: true,
    contentIdx: 1,
    postCnt: 5,
    postStart: 0,
    postEnd: 0,
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
    this.setState({
      postEnd: this.state.postEnd + this.state.postCnt,
    });
  }

  changeIdxUp = () => {
    const { postList, contentIdx, postCnt, postStart, postEnd } = this.state;
    if (postEnd >= postList.length) return;
    this.setState({
      contentIdx: contentIdx + 1,
      postStart: postStart + postCnt,
      postEnd: postEnd + postCnt,
    });
  };
  changeIdxDown = () => {
    const { contentIdx, postCnt, postStart, postEnd } = this.state;
    if (postStart === 0) {
      console.log("x");
      return;
    }
    this.setState({
      contentIdx: contentIdx - 1,
      postStart: postStart - postCnt,
      postEnd: postEnd - postCnt,
    });
  };

  render() {
    const postListMap = this.state.postList.map((post) => (
      <Posts key={post.id} title={post.title} body={post.body} />
    ));
    const { isLoading, postStart, postEnd } = this.state;
    return (
      <div className="contentContainer">
        {isLoading ? (
          <Spinner
            className="loadingSpinner"
            animation="border"
            role="status"
          />
        ) : (
          <div className="contentPostBox">
            {postListMap.slice(postStart, postEnd)}
          </div>
        )}
        <ButtonGroup className="indexBtn" variant="secondary">
          <Button variant="secondary" onClick={this.changeIdxDown}>
            {" "}
            &lt;{" "}
          </Button>
          <Button className="experssIdx" variant="secondary">
            {postStart}~{postEnd}
          </Button>
          <Button variant="secondary" onClick={this.changeIdxUp}>
            {" "}
            &gt;{" "}
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Content;

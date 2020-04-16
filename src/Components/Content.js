import React, { Component } from "react";
import { Spinner, ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";
import Posts from "./Posts";
import "../DecorateFiles/Content.css";

class Content extends Component {
  state = {
    postList: [],
    isLoading: true,
    contentIdx: 1,
    postCnt: 8,
    postStart: 0,
    postEnd: 0,
  };

  getPosts = async () => {
    //여기서 postList는 state변수를 가리키는것이 아님??
    // const response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );

    // const postList = response.data;


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
    if (postStart === 0) return;
    this.setState({
      contentIdx: contentIdx - 1,
      postStart: postStart - postCnt,
      postEnd: postEnd - postCnt,
    });
  };

  createPgIdx = () => {
    const pagesBtn = [];
    for (
      let i = this.state.postStart;
      i < this.state.postStart + this.state.postCnt &&
      i < this.state.postList.length;
      i++
    ) {
      pagesBtn.push(<Button key={i} variant="success"> {i + 1} </Button>);
    }
    return pagesBtn;
  };

  render() {
    const postListMap = this.state.postList.map((post) => (
      <Posts key={post.id} title={post.title} body={post.body} />
    ));
    const { isLoading, postStart, postEnd } = this.state;
    return (
      <div className="contentContainer">
        <div className="contentBody">
          {isLoading ? (
            <div className="loadingImg">
              <Spinner variant="success" animation="border" role="status" />
            </div>
          ) : (
            <div className="contentPostBox">
              {postListMap.slice(postStart, postEnd)}
            </div>
          )}
        </div>
        <ButtonGroup className="indexBtn" size="sm">
          <Button variant="success" onClick={this.changeIdxDown}>
            &lt;
          </Button>
          {this.createPgIdx()}
          <Button variant="success" onClick={this.changeIdxUp}>
            &gt;
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Content;

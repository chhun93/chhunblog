import React, { Component } from "react";
import { connect } from "react-redux";
import WritePost from "../Components/Contents/WritePost";
import { writePostTitle, writePostContent } from "../Store/Modules/Counter";

class PostContainer extends Component {
  handleWriteTitle = postTitle =>{
    const {writePostTitle} = this.props;
    console.log("postTitle!!");
    writePostTitle(postTitle);
  }
  handleWriteContent = postContent =>{
    const {writePostContent} = this.props;
    console.log("postContent!!");
    writePostContent(postContent);
  }

  render() {
    const { postTitle } = this.props;
    return (
      <WritePost onWrite={this.handleWriteTitle} writed={(postTitle)} />
    );
  }
}
// props 로 넣어줄 스토어 상태값
const mapStateToProps = (state) => ({
  postTitle: state.Counter.postTitle,
 // postContent: state.Counter.postContent,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch) => ({
  writePostTitle: (postTitle) => dispatch(writePostTitle(postTitle)),
  //writePostContent: (postContent) => dispatch(writePostContent(postContent))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

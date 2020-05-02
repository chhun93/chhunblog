// 액션 타입 정의
const WRITE_POST_TITLE = "Counter/WRITE_POST_TITLE";
const WRITE_POST_CONTENT = "Counter/WRITE_POST_CONTENT";
// 액션 생성함수 정의
export const writePostTitle = postTitle => ({
  type: WRITE_POST_TITLE,
  postTitle
});

export const writePostContent = postContent => ({
  type: WRITE_POST_CONTENT,
  postContent
});

// 초기 STATE 값 정의
const initialState = {
  postTitle: "",
  postContent: "",
};

// 리듀서 작성
export default function Counter(state = initialState, action) {
  switch (action.type) {
    case WRITE_POST_TITLE:
      return {
        ...state,
        postTitle: action.title,
      };
    case WRITE_POST_CONTENT:
      return {
        ...state,
        postContent: action.content,
      };
    default:
      return state;
  }
}

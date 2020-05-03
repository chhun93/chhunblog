const POST_SAVE = "./Reducer/SAVE";
const POST_REMOVE = "./Reducer/REMOVE";
const POST_READ = "./Reducer/ONE";
const POST_LIST = "./Reducer/LIST";
const MODAL_UP = "./Reducer/MODAL";

export const post_save = (data) => ({ type: POST_SAVE, data });
export const post_remove = (postNo) => ({ type: POST_REMOVE, postNo: postNo });
export const post_read = (postNo) => ({ type: POST_READ, postNo: postNo });
export const post_list = () => ({ type: POST_LIST });
export const modal_up = () => ({ type: MODAL_UP });

const initialState = {
  postNo: 1,
  posts: [
    {
      postNo: 0,
      title: "test1_title",
      body: "test1_body",
    },
    {
      postNo: 1,
      title: "test2_title",
      body: "test2_body",
    },
    {
      postNo: 2,
      title:
        "test3_titletest3_titletest3_titletest3_titletest3_titletest3_titletest3_titletest3_title",
      body:
        "test3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_bodytest3_body",
    },
  ],
  selectedPost: {},
  modalUp: false,
};

export default function PostReducer(state = initialState, action) {
  let posts = state.posts;

  switch (action.type) {
    case POST_SAVE:
      let data = action.data;
      let postNo = state.postNo;

      if (!data.postNo) {
        return {
          postNo: postNo + 1,
          posts: posts.concat({ ...data, postNo: postNo }),
          selectedPost: {},
        };
      }
      return {
        ...state,
        posts: posts.map((postBox) =>
          data.postNo === postBox.postNo ? { ...data } : postBox
        ),
        selectedPost: {},
      };
    case POST_REMOVE:
      return {
        ...state,
        posts: posts.filter((postBox) => postBox.postNo !== action.postNo),
        selectedPost: {},
      };
    case POST_READ:
      return {
        ...state,
        selectedPost: posts.find((postBox) => postBox.postNo === action.postNo),
      };
    case MODAL_UP:
      let modalUp = state.modalUp;
      if (modalUp) return { modalUp: false };
      return { modalUp: true };
    default:
      return state;
  }
}

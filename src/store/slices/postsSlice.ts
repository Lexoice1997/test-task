import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostInfoState, PostState } from "../../types/post";
import { PostsState } from "../../types/posts";
import { fetchPosts } from "../actionCreators/postsActionCreator";

const initialState: PostsState = {
  posts: [],
  page: 1,
  totalPage: 1,
  isLoading: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPagePosts(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled.type]: (
      state,
      action: PayloadAction<PostInfoState[]>
    ) => {
      state.posts = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;

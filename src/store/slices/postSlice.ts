import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostInfoState, PostState } from "../../types/post";
import { fetchComments, fetchPost } from "../actionCreators/postActionCreator";
import { CommentsState } from "./../../types/post";

const initialState: PostState = {
  post: null,
  comments: null,
  userId: 1,
  postId: 1,
  isLoading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<number>) {
      state.userId = action.payload;
    },
    setPostId(state, action: PayloadAction<number>) {
      state.postId = action.payload;
    },
  },
  extraReducers: {
    [fetchPost.fulfilled.type]: (
      state,
      action: PayloadAction<PostInfoState>
    ) => {
      state.post = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchPost.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPost.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchComments.fulfilled.type]: (
      state,
      action: PayloadAction<CommentsState[]>
    ) => {
      state.comments = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchComments.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";
import { PostInfoState } from "../../types/post";

export const fetchPost = createAsyncThunk(
  "post, fetchPost",
  async (id: number, thunkAPI) => {
    try {
      const response = await $host.get<PostInfoState>(`posts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пост");
    }
  }
);

export const fetchComments = createAsyncThunk(
  "comments, fetchComments",
  async (id: number, thunkAPI) => {
    try {
      const response = await $host.get<PostInfoState>(`comments`, {
        params: {
          postId: id
        }
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить комментарии");
    }
  }
);

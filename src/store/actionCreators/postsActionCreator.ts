import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";
import { PostState } from "../../types/post";

interface FetchPostsProps {
  limit: number;
  page: number;
}

export const fetchPosts = createAsyncThunk(
  "posts, fetchPosts",
  async ({ limit = 10, page = 1 }: FetchPostsProps, thunkAPI) => {
    try {
      const response = await $host.get<PostState[]>(`posts`, {
        params: {
          _limit: limit,
          _page: page,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить постов");
    }
  }
);

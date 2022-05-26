import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";
import { UserInfoState } from "../../types/user";

export const fetchUser = createAsyncThunk(
  "user, fetchUser",
  async (id: number, thunkAPI) => {
    try {
      const response = await $host.get<UserInfoState>(`users/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователя");
    }
  }
);

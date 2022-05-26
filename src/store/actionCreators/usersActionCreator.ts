import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";
import { UserInfoState } from "../../types/user";

export const fetchUsers = createAsyncThunk(
  "users, fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await $host.get<UserInfoState[]>(`users`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

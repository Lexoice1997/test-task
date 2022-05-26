import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfoState } from "../../types/user";
import { UsersState } from "../../types/users";
import { fetchUsers } from "../actionCreators/usersActionCreator";

const initialState: UsersState = {
  users: null,
  isLoading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<UserInfoState[]>
    ) => {
      state.users = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;

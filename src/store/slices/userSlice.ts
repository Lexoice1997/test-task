import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfoState, UserState } from "../../types/user";
import { fetchUser } from "../actionCreators/userActionCreator";

const initialState: UserState = {
  userInfo: null,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled.type]: (
      state,
      action: PayloadAction<UserInfoState>
    ) => {
      state.userInfo = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [fetchUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;

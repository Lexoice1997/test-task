import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import postReducer from "./slices/postSlice";
import usersReducer from "./slices/usersSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  postsReducer,
  postReducer,
  usersReducer,
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

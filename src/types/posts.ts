import { PostInfoState } from "./post";

export interface PostsState {
  posts: PostInfoState[];
  page: number;
  totalPage: number;
  isLoading: boolean;
  error: string;
}
export interface PostState {
  post: PostInfoState | null;
  comments: CommentsState[] | null;
  userId: number;
  postId: number;
  isLoading: boolean;
  error: string;
}

export interface PostInfoState {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentsState {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

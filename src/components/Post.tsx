import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchUser } from "../store/actionCreators/userActionCreator";
import { fetchComments, fetchPost } from "./../store/actionCreators/postActionCreator";
import { CommentsState } from "./../types/post";

const Post = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.userReducer);
  const { userId, comments, postId, post, isLoading, error } = useAppSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    dispatch(fetchUser(userId));
    dispatch(fetchPost(postId));
    dispatch(fetchComments(postId));
  }, []);

  return (
    <div>
      <div>
        <h3>{post?.title}</h3>
        <p>{userInfo?.name}</p>
        <p>{post?.body}</p>
      </div>
      <div>
        {comments?.map((item: CommentsState) => {
          return (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;

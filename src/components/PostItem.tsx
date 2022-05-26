import { FC, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { postSlice } from "../store/slices/postSlice";
import { PostInfoState } from "../types/post";
import { fetchUser } from "./../store/actionCreators/userActionCreator";

const PostItem: FC<PostInfoState> = ({ id, userId, title, body }) => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.userReducer);
  const { setUserId, setPostId } = postSlice.actions;

  const navigate = useNavigate();

  const pathToPost = (idPost: number) => {
    navigate(`/posts/${idPost}`);
  };

  const onHandleIds = () => {
    dispatch(setUserId(userId));
    dispatch(setPostId(id));
    pathToPost(id);
  };

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, []);

  return (
    <div onClick={onHandleIds}>
      <h3>
        {id}. {title}
      </h3>
      <p>{userInfo && userInfo?.name}</p>
      <p>{body}</p>
    </div>
  );
};

export default PostItem;

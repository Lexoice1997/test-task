import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/hooks";
import { postsSlice } from "../store/slices/postsSlice";
import { PostInfoState, PostState } from "../types/post";
import { useAppDispatch } from "../hooks/hooks";
import { fetchPosts } from "./../store/actionCreators/postsActionCreator";
import { getPageCount } from "./../utils/pages";
import PostItem from "./PostItem";
import Pagination from "./UI/pagination/pagination";

const Posts = () => {
  const dispatch = useAppDispatch();
  const { setPagePosts } = postsSlice.actions;
  const { posts, page, isLoading, error } = useAppSelector(
    (state) => state.postsReducer
  );
  const [totalPages, setTotalPages] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const changePage = (page: number) => {
    dispatch(setPagePosts(page));
  };

  const fetchUsersCount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1"
    );
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(+totalCount, limit));
  };

  useEffect(() => {
    fetchUsersCount();
  }, []);

  useEffect(() => {
    dispatch(fetchPosts({ limit, page }));
  }, [page]);

  return (
    <>
      {posts.map((item: PostInfoState, index: number) => {
        return (
          <PostItem
            key={item.id}
            id={item.id}
            userId={item.userId}
            title={item.title}
            body={item.body}
          />
        );
      })}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </>
  );
};

export default Posts;

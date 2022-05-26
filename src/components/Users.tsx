import UserItem from "./UserItem";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import { fetchUsers } from "./../store/actionCreators/usersActionCreator";
import { UserInfoState } from "../types/user";

const Users = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.usersReducer
  );
  const [filterUsers, setFilterUsers] = useState(users);

  const onHandleFilterUsers = (title: string) => {
    const filter = users!.filter((post) =>
      post.name.toLowerCase().includes(title.toLowerCase())
    );

    setFilterUsers(filter);
  };

  console.log(filterUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <input
        type="text"
        onChange={(e) => onHandleFilterUsers(e.target.value)}
      />
      {filterUsers?.map((item: UserInfoState) => {
        return <UserItem key={item.id} props={item} />;
      })}
    </>
  );
};

export default Users;

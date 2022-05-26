import { FC } from "react";
import { UserInfoState } from "../types/user";

interface UserItemProps {
  props: UserInfoState;
}

const UserItem: FC<UserItemProps> = ({ props }) => {
  return (
    <div>
      <h3>
        {props.id}. {props.name} {props.username}
      </h3>
      <p>{props.email}</p>
      <p>{props.address.city}</p>
      <p>{props.phone}</p>
      <p>{props.company.name}</p>
      <p>{props.website}</p>
    </div>
  );
};

export default UserItem;

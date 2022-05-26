import { UserInfoState } from "./user";

export interface UsersState {
  users: UserInfoState[] | null;
  isLoading: boolean;
  error: string;
}
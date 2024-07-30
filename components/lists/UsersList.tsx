// Interfaces
import { User } from "@/interfaces/users";

// Components
import { UserCard } from "../cards/UserCard";

interface Props {
  users: User[];
}

export const UsersList = ({ users }: Props) => {
  return (
    <>
      {
        users.map((user: User) => (
          <UserCard user={user} key={user.id} />
        ))
      }
    </>
  );
}

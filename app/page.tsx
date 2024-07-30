// Services
import { getUsers } from "@/services/users";

// Components
import { UsersList } from "@/components/lists/UsersList";

export default async function Init() {
  const users = await getUsers();

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <UsersList users={users} />
      </div>
    </div>
  );
}
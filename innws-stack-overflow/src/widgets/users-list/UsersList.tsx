import { UserField } from "../../entities";
import { User } from "../../shared/types/users";

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => <UserField key={user.id} user={user} />)}
    </div>
  )
};

export default UsersList;
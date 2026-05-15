import UserCard from "./UserCard";

export default function UserList({
  users,
  deleteUser,
  editUser,
}) {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      ))}
    </div>
  );
}
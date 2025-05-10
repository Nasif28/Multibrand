import { useState } from "react";
import UserFormModal from "./UserFormModal";
import ViewUserModal from "./ViewUserModal";
import DeleteUserModal from "./DeleteUserModal";
import { useGetUsersQuery } from "@/redux/api";

const UserTable = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="overflow-x-auto">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          setSelectedUser(null);
          setModalType("edit");
        }}
      >
        + Add User
      </button>

      <table className="min-w-full border dark:border-gray-600 text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">DOB</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.phone}</td>
              <td className="p-2 border">{user.dob}</td>
              <td className="p-2 border">{user.status}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setModalType("view");
                  }}
                  className="text-green-500"
                >
                  View
                </button>
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setModalType("edit");
                  }}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setModalType("delete");
                  }}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalType === "edit" && (
        <UserFormModal user={selectedUser} onClose={() => setModalType(null)} />
      )}
      {modalType === "view" && (
        <ViewUserModal user={selectedUser} onClose={() => setModalType(null)} />
      )}
      {modalType === "delete" && (
        <DeleteUserModal
          user={selectedUser}
          onClose={() => setModalType(null)}
        />
      )}
    </div>
  );
};

export default UserTable;

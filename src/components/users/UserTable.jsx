import { useState } from "react";
import UserFormModal from "./UserFormModal";
import ViewUserModal from "./ViewUserModal";
import DeleteUserModal from "./DeleteUserModal";
import { useGetUsersQuery } from "@/redux/api";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Pencil,
  Trash,
  PlusCircle,
  CircleCheck,
  CircleX,
} from "lucide-react";

const USERS_PER_PAGE = 10;

const UserTable = () => {
  const { data: users = [], isLoading } = useGetUsersQuery();
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [page, setPage] = useState(1);

  const paginatedUsers = users.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  if (isLoading) return <p className="text-center py-4">Loading...</p>;

  return (
    <div >
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold text-gray-800 dark:text-white">
          User Management
        </span>
        <Button
          onClick={() => {
            setSelectedUser(null);
            setModalType("edit");
          }}
        >
          <PlusCircle className="h-4 w-4" />
          Add User
        </Button>
      </div>

     <div className="w-full max-w-full overflow-auto rounded-md border dark:border-gray-700 max-h-[70vh]">

        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">DOB</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {user.phone?.split("x")[0].trim()}
                </td>
                <td className="px-4 py-2">
                  {user.dob
                    ? new Date(user.dob).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })
                    : "-"}
                </td>

                <td className="px-4 py-2">
                  {user.status ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs text-green-600 bg-green-100 rounded dark:bg-green-800 dark:text-green-300">
                      <CircleCheck className="w-4 h-4" />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs text-red-600 bg-red-100 rounded dark:bg-red-800 dark:text-red-300">
                      <CircleX className="w-4 h-4" />
                      Inactive
                    </span>
                  )}
                </td>

                <td className="px-4 flex py-2 text-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      setSelectedUser(user);
                      setModalType("view");
                    }}
                  >
                    <Eye className="w-4 h-4 text-green-600" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      setSelectedUser(user);
                      setModalType("edit");
                    }}
                  >
                    <Pencil className="w-4 h-4 text-blue-600" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      setSelectedUser(user);
                      setModalType("delete");
                    }}
                  >
                    <Trash className="w-4 h-4 text-red-600" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>

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

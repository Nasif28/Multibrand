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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="space-y-4">
      {/* Fixed Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          User Management
        </h2>
        <Button
          onClick={() => {
            setSelectedUser(null);
            setModalType("edit");
          }}
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          Add User
        </Button>
      </div>

      {/* Table Box (bordered) */}
      <div className="border block rounded-md dark:border-gray-700 w-full">
        {/* Horizontal Scroll Only for Table Content */}
        <div className="overflow-x-auto block  w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>DOB</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone?.split("x")[0].trim()}</TableCell>
                  <TableCell>
                    {user.dob
                      ? new Date(user.dob).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })
                      : "-"}
                  </TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell className="text-center space-x-2">
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
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

      {/* Modals */}
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

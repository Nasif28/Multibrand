import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { CircleCheck, CircleX, Eye, Pencil, Trash } from "lucide-react";

const UserDataTable = ({ users, setSelectedUser, setModalType }) => {
  return (
  <div className="w-full overflow-x-auto">
     <Card className="relative">
      <CardHeader>
        <CardTitle>All Users</CardTitle>
      </CardHeader>

      <CardContent className="h-[300px] overflow-hidden p-0 relative">
        <div className="relative h-full w-full overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
<div className="min-w-[1000px] w-max relative">

            <table className="text-sm w-full border-separate border-spacing-0">
              <thead className="sticky top-0 z-20 bg-white dark:bg-gray-900 shadow">
                <tr>
                  <th className="px-4 py-2 border-b text-left sticky left-0 bg-white dark:bg-gray-900 z-30">
                    #
                  </th>
                  <th className="px-4 py-2 border-b text-left">Name</th>
                  <th className="px-4 py-2 border-b text-left">Email</th>
                  <th className="px-4 py-2 border-b text-left">Phone</th>
                  <th className="px-4 py-2 border-b text-left">DOB</th>
                  <th className="px-4 py-2 border-b text-left">Status</th>
                  <th className="px-4 py-2 border-b text-center sticky right-0 bg-white dark:bg-gray-900 z-30 min-w-[120px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-2 border-t sticky left-0 bg-white dark:bg-gray-900 z-10">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border-t">{user.name}</td>
                    <td className="px-4 py-2 border-t">{user.email}</td>
                    <td className="px-4 py-2 border-t">
                      {user.phone?.split("x")[0].trim()}
                    </td>
                    <td className="px-4 py-2 border-t">
                      {user.dob
                        ? new Date(user.dob).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })
                        : "-"}
                    </td>
                    <td className="px-4 py-2 border-t">
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

                    <td className="px-4 py-2 border-t text-center sticky right-0 bg-white dark:bg-gray-900 z-10 space-x-1 min-w-[120px]">
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
        </div>
      </CardContent>
    </Card>
   </div>
  );
};

export default UserDataTable;

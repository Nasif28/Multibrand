import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";

const ViewUserModal = ({ user, onClose }) => {
  if (!user) return null;

  const formattedDob = user.dob
    ? new Date(user.dob).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    : "";

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            User Details
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 text-sm text-gray-700 dark:text-gray-200 mt-4">
          <div className="flex justify-between">
            <span className="font-medium">Name:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Phone:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date of Birth:</span>
            <span>{formattedDob}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Status:</span>
            <Badge
              variant={user.status ? "default" : "outline"}
              className={user.status ? "bg-green-500" : "bg-gray-400"}
            >
              {user.status ? "Active" : "Inactive"}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewUserModal;

import { useDeleteUserMutation } from "@/redux/api";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";

const DeleteUserModal = ({ user, onClose }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deleteUser(user.id).unwrap();
      toast.success("User deleted successfully!");
      onClose();
    } catch (err) {
      toast.error("Delete error:", err);
    }
  };

  if (!user) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold">Delete User</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p>
            Are you sure you want to delete <strong>{user.name}</strong>?
          </p>
          <div className="flex justify-end gap-4 w-full">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>

            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserModal;

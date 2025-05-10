import { useDeleteUserMutation } from "@/redux/api";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const DeleteUserModal = ({ user, onClose }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deleteUser(user.id).unwrap();
      onClose(); // Close after deletion
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (!user) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p>
            Are you sure you want to delete <strong>{user.name}</strong>?
          </p>
          <div className="flex justify-end gap-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserModal;

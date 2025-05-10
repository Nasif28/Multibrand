import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const ViewUserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>View User</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 mt-4">
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Phone:</strong> {user.phone}
          </div>
          <div>
            <strong>Date of Birth:</strong> {user.dob}
          </div>
          <div>
            <strong>Status:</strong> {user.status}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewUserModal;

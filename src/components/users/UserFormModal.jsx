import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useEffect } from "react";
import { useCreateUserMutation, useUpdateUserMutation } from "@/redux/api";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  phone: z.string().min(10),
  dob: z.string(),
  status: z.enum(["Active", "Inactive"]),
});

const UserFormModal = ({ user, onClose }) => {
  const isEdit = !!user;
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dob: "",
      status: "Active",
    },
  });

  useEffect(() => {
    if (isEdit) reset(user);
  }, [user]);

  const onSubmit = async (data) => {
    try {
      if (isEdit) {
        await updateUser({ id: user.id, ...data }).unwrap();
      } else {
        await createUser(data).unwrap();
      }
      onClose();
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit User" : "Add New User"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <input
              {...register("name")}
              placeholder="Name"
              className="w-full p-2 border dark:bg-gray-800"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full p-2 border dark:bg-gray-800"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("phone")}
              placeholder="Phone"
              className="w-full p-2 border dark:bg-gray-800"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <input
              type="date"
              {...register("dob")}
              className="w-full p-2 border dark:bg-gray-800"
            />
          </div>
          <div>
            <select
              {...register("status")}
              className="w-full p-2 border dark:bg-gray-800"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {isEdit ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserFormModal;

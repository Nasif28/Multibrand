import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useCreateUserMutation, useUpdateUserMutation } from "@/redux/api";
import { toast } from "sonner";
import { userBroadcastChannel } from "@/lib/broadcast";
import { userSchema } from "@/lib/zodSchemas";

const UserFormModal = ({ user, onClose }) => {
  const isEdit = !!user;
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dob: "",
      status: true,
    },
  });

  useEffect(() => {
    if (isEdit) {
      reset({
        ...user,
        dob: user?.dob?.split("T")[0] ?? "",
        status: !!user?.status,
      });
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      if (isEdit) {
        await updateUser({ id: user.id, ...data }).unwrap();
        toast.success("User updated successfully!");
      } else {
        await createUser(data).unwrap();
        toast.success("User created successfully!");
      }

      userBroadcastChannel.postMessage("userUpdated");
      onClose();
    } catch (err) {
      toast.error("Error saving user.");
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-bold">
            {isEdit ? "Edit User" : "Add New User"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input {...register("name")} placeholder="Enter full name" />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input {...register("email")} placeholder="Enter email" />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Phone</Label>
            <Input {...register("phone")} placeholder="Enter phone number" />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input type="date" {...register("dob")} />
            {errors.dob && (
              <p className="text-sm text-red-500">{errors.dob.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <Select
              value={watch("status") === true ? "true" : "false"}
              onValueChange={(value) => setValue("status", value === "true")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="true">Active</SelectItem>
                <SelectItem value="false">Inactive</SelectItem>
              </SelectContent>
            </Select>

            {errors.status && (
              <p className="text-sm text-red-500">{errors.status.message}</p>
            )}
          </div>

          <div className="text-right">
            <Button className="w-full" type="submit">
              {isEdit ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserFormModal;

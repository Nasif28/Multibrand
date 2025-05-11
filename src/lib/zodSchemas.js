import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10,15}$/, "Phone must be 10–15 digits"),
  dob: z.string().min(1, "Date of birth is required"),
  status: z.boolean(),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Minimum 6 characters" }),
});

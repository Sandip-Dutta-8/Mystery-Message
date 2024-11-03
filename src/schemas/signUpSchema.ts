import { z } from "zod";

export const userNameValidation = z.string()
    .min(2, "Username should be atleast 2 characters")
    .max(20, "Username not be more than 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Should not contain special characters");

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message: 'Invalid email'}),
    password: z.string().min(6, {message: 'password must be atleast 6 characters'})
})
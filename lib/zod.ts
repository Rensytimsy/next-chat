import {object, string} from "zod";


export const  SignInSchema = object({
    email: string({required_error: "Please provide a valid email"})
        .min(1, "Email is required")
        .email("Please provide a valid email."),

    password: string({required_error: "Password is required"})
        .min(1, "Provide password")
        .min(8, "Password must be atleast 8 characters")
        .max(32, "Password too long")
});
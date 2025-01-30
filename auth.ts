import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "./lib/zod";
import { NextResponse } from "next/server";

export const {handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    type: "string", 
                    placeholder: "Enter user email",
                    label: "email"},
                password: {
                    type: "string",
                    placeholder: "string",label: "password"
                }
            },
            async authorize(credentials){
                let user = null;
                //passing credentials while signing up
                const parsedCredentials = SignInSchema.safeParse(credentials);
                if(!parsedCredentials.success){
                    console.log("Invalid credentials", parsedCredentials.error.errors)
                    return null
                }

                user = {
                    email: "timo@examplemail.com",
                    password: "123456789"
                }

                return user;
            }
        }), 
    ],
    callbacks: {
        authorized({request: { nextUrl },  auth}){
            const isLoggedIn = !!auth?.user;
            const {pathname} = nextUrl;
            if(pathname.startsWith("/auth/signin") && isLoggedIn){
                return  Response.redirect(new URL("/", nextUrl));
            }

            return !!auth;
        }
    },
    pages: {
        signIn: "/auth/signin"
    }
})
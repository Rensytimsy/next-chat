"use server"

import { AuthError } from "next-auth"
import {signIn, signOut} from "@/auth"

export default async function handleCredentialSignIn({email, password} : {email: string, password: string}){
    try{
        //Below we invoke the sign in method with the sign in type of credentials,   basically password username or email
        await signIn("credentials", {email, password, redirectTo: "/"});
    }catch(error){
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {
                        message: "Invalid credentials provided"
                    }
                default:
                    return {
                        message: "Opps! something went wrong"
                    }
            }
        }
        throw error;
    }
}

export async function SignOut(){
    await signOut();
}
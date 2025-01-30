import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {
                    type: "string",
                    placeholder: "username",label: "Username"
                },
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
                
                user = {
                    name: "timo",
                    email: "timo@examplemail.com",
                    password: "1234"
                }
                if(credentials.username !== user.name || credentials.email !== user.email || credentials.password !== user.password){
                    console.log("Invalid credentials passed");
                }

                return user;
            }
        }), 
    ]
})
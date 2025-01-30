import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        credentials: {},
        async authorize(credentials,) {
            let user = null;
                user = {
                    id: '1',
                    name: 'Aditya Singh',
                    email: 'jojo@jojo.com',
                    role: "admin"
                }

                if (!user) {
                    console.log("Invalid credentials");
                    return null;
                }

                return user;   
        },
    })]
});

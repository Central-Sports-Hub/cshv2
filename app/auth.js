import NextAuth from "next-auth";
import CredentialsProvider from "@auth/core/providers/credentials";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credential",
      credentials: {
        username: { type: String, required: true },
        password: { type: String, required: true },
      },
      authorize: async (credentials) => {
        const user = { id: 12, name: "steven", password: "admin" }; //dummy data
        //TODO: database and user verifacation right now set to hard code check creds with user var
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});

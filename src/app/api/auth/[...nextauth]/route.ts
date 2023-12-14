import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.GOOGLE_SECRET,
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };

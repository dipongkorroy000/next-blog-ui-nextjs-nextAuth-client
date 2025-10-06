import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // Use the server-side NEXTAUTH_SECRET variable (do not expose this as NEXT_PUBLIC_...)
  secret: process.env.NEXTAUTH_SECRET,
};

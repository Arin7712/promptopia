import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) {
        console.error("SignIn callback missing user or account");
        return false;
      }
      console.log("SignIn Callback Triggered");
      console.log("User:", user);
      console.log("Account:", account);
      return true;
    }
  }
})

export { handler as GET, handler as POST }
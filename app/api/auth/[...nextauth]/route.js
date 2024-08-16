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

      const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

      console.log("SignIn Callback Triggered");
      console.log("User:", user);
      console.log("Account:", account);
      return true;
    }
  }
})

export { handler as GET, handler as POST }
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      // You can add any session logic here if needed
      console.log('fkas');
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        // You can add any sign-in logic here if needed
        console.log('fk');
        return true;
      } catch (error) {
        console.log("Error during sign-in: ", error.message);
        return false;
      }
    },
  }
});

export { handler as GET, handler as POST };

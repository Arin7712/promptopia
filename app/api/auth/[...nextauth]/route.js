import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from '@utils/database'
import User from "@models/user";

console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ], 

    callbacks: {
        async session({ session }) {
            try {
                const sessionUser = await User.findOne({
                    email: session.user.email,
                });

                if (!sessionUser) {
                    throw new Error('User not found');
                }

                session.user.id = sessionUser._id.toString();
                return session;
            } catch (error) {
                console.log('Session callback error:', error);
                return null; // Return null if there's an error
            }
        },

        async signIn({ profile }) {
            try {
                await connectToDB();
                console.log('Database connection successful');

                // Check if a user already exists
                const userExists = await User.findOne({
                    email: profile.email,
                });

                // If not, create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(' ', '').toLowerCase(), // Removed extra space
                        image: profile.picture,
                    });
                }

                return true;
            } catch (error) {
                console.log('Sign-in callback error:', error);
                return false;
            }
        }
    }
});

export { handler as POST, handler as GET };

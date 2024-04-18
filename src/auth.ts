import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from './providers/prisma-provider';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async credentials => {
                try {
                    const { email, password } = credentials as {
                        email: string;
                        password: string;
                    };

                    const user = await prisma.users.findFirst({
                        where: {
                            email,
                            password,
                        },
                    });

                    if (!user) {
                        throw new Error('Invalid credentials');
                    }

                    return user;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
});

import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bycrpt from "bcryptjs";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            // Kredensial untuk autorisasi
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email"},
                password: { label: "Password", type: "password"},
            },
            // Erorr handling dan asinkronisasi
            async authorize(credentials) {
                // Validasi kredensial
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }

                // Cari user (email unik)
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                // Apakah user ada dan password ada
                if (!user || !user.password) {
                    throw new Error("Wrong credentials or user does not exist");
                }

                // Membandingkan password
                const isPasswordValid = await bycrpt.compare(
                    credentials.password,
                    user.password
                )

                // Jika password salah
                if (!isPasswordValid) {
                    throw new Error("Password is incorrect");
                }

                // Mengembalikan user jika password benar
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/auth/login", // signIn as login
    },
    callbacks: {
        // JWT callback
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token
        },

        // Session callback
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string
            }
            return session
        }
    }
}

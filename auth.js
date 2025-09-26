import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
// import { FirestoreAdapter } from "@auth/firebase-adapter"
// import { cert } from "firebase-admin/app"

export const { handlers, signIn, signOut, auth } = NextAuth({


    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
    })],
    // adapter: FirestoreAdapter({
    //     credential: cert({
    //         projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
    //         clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
    //         privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),

    //     }),
    // }),
    pages: {
        signIn: "/auth/login",
        signOut: "/page.js"
    },
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async session({ session }) {
            return session;
        },
    },
})


// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google"; // or "next-auth/providers/google" for older versions
// import GitHubProvider from "next-auth/providers/github"; // or "next-auth/providers/github" for older versions

// export const authOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         }),
//         GitHubProvider({
//             clientId: process.env.GITHUB_CLIENT_ID,
//             clientSecret: process.env.GITHUB_CLIENT_SECRET,
//         }),
//     ],
//     secret: process.env.AUTH_SECRET,
//     callbacks: {
//         async session({ session }) {
//             return session;
//         },
//     },
// };

// export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
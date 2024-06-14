// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after login
      if (url === '/dashboard') {
        return baseUrl + url;
      }
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);

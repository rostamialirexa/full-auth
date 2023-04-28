import NextAuth from 'next-auth'
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import DiscordProvider from "next-auth/providers/discord"
export default NextAuth({
  providers: [
    // OAuth authentication providers...


    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string
    }),

    // Passwordless / email sign in
  ],
  secret:process.env.NEXTAUTH_SECRET
})
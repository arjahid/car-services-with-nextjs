import loginUser from "@/app/actions/auth/loginUser"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { collectionNameObject } from "@/lib/dbConntect";
export const authOptions = {
  // Configure one or more authentication providers
  providers:[
  CredentialsProvider({
    name: 'Credentials',

    credentials: {
      username: { label: "Email", type: "text", placeholder: "Enter Email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        console.log("credentials",credentials);
 
      const user=await loginUser(credentials);
      console.log("user from authorize",user);

      if (res.ok && user) {
        return user
      }
     
      return null
    }
  }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
   GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
],
pages:{
    signIn:'/login'
},
// use when using another login
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
        // console.log('signIn callback', { user, account, profile, email, credentials });
        if(account){
            const {providerAccountId,provider}=account;
            const {email:user_email,image,name}=user;
            const userCollection=dbConnect(collectionNameObject.userCollection);
            const isExisted=await userCollection.findOne({providerAccountId});
            if(!isExisted){
                // create new user
                const newUser={
                    name:name || 'No Name',
                    email:user_email,
                    provider,
                    providerAccountId,
                    image:image || ''
                }
                await userCollection.insertOne(newUser);
            }
        }
      return true
    }},
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
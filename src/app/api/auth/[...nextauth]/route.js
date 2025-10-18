import loginUser from "@/app/actions/auth/loginUser"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";
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

      if ( user) {
        return user
      }
     
      return null
    }
  })
],
pages:{
    signIn:'/login'
}
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
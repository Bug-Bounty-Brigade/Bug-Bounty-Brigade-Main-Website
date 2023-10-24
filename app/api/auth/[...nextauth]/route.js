import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        console.log(name)
        let fullname = name;
        try {
          const res = await fetch("https://bug-bounty-brigade-backend.onrender.com/user/googlesignin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullname,
              email,
            }),
          })
          const data = await res.json();

          if (data.token) {
            // Access the token from the response data
            const token = data.token;
            console.log("Token:", token);
            if (res.ok) {
              // If response status code is OK (200)
              // set data to the response body
              // and return it
            }
            // Now you can use the token as needed in your frontend code
          } else {
            console.error("Token not found in the response");
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

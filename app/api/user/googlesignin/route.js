import GoogleUser from "@/models/Googleuser";
import {connect} from "../../../../dbConfig.ts";
connect()
export async function POST(request ,response) {
  const res = await request.json()
  console.log(res)
    const { fullname, email } = res;
    console.log(fullname, email)
    console.log(res.fullname)
    try {
      const user = await GoogleUser.findOne({ email });
      if (!user) {
        const newgoogleUser = await GoogleUser.create({
          email,
          fullname,
        });
      }
      const token = await GoogleUser.GenerateToken(fullname, email);
      console.log(token)
      return Response.json({ message: "Token generated", token });
    } catch (error) {
      console.error("user already exists");
      return Response.json({ error: "Internal server error" });
    }
}
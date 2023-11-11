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
      return response.status(200).json({ message: "Token generated", token });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error" });
    }
}
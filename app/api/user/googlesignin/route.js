import GoogleUser from "@/models/Googleuser";
import {connect} from "@/dbConfig/dbConfig";


connect()
export async function POST(req) {
    const { fullname, email } = req.body;
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
      return res.status(200).json({ message: "Token generated", token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
}
import GoogleUser from "@/models/Googleuser";
import userBlogData from "@/models/userBlogData";
import { connect } from "../../../../../dbConfig.ts";
connect()
export async function POST(request, response,
) {
  console.log(request)
  console.log(response)
  const res = await request.json()
  const { title, body, imageUrl } = res;
  console.log(title, body, imageUrl)
  console.log(response.params)
  try {
    const userId = response.params.id;
    // Check if the user exists
    const user = await GoogleUser.findById(userId);
    console.log(userId)
    console.log(user)
    if (!user) {
      return res.status(404).send('User not found');
    }
    // Fetch user details
    const email = user.email;
    const fullname = user.fullname;

    // Create an object with the image URL and other details
    const obj = {
      imageUrl: imageUrl,
      email: email,
      fullname: fullname,
      userId: userId,
      title: title,
      body: body,
    };

    console.log(obj);
    const item = await userBlogData.create(obj);
    // Send a success response
    return Response.json({ message: "File Uploaded Successfully" });
  } catch (error) {
    console.error("user already exists");
    console.log(error)
    return Response.json({ error: "Internal server error" });
  }
}
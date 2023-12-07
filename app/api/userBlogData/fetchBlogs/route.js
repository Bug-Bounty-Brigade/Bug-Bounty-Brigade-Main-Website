import userBlogData from "@/models/userBlogData";
import {connect} from "../../../../dbConfig.ts";
connect()

export async function GET(request){
    try {
        const allData = await userBlogData.find();
        console.log(allData)
        return Response.json({allData })
      } catch (err) {
        console.error(err);
      }
}
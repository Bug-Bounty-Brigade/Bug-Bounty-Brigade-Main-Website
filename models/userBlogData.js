import mongoose from "mongoose";

const userBlogSchema = new mongoose.Schema({
  imageUrl: String,
  email: String, // Add the email field
  fullname: String, // Add the fullname field
  userId: String, // Add the userId field
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Googleuser', // Replace 'Googleuser' with your user model name
  },
  title: String, // Add the title field for blog
  body: String, // Add the body field for blog
  userImage : String,
});

module.exports = mongoose.models.userblog || mongoose.model('userblog', userBlogSchema);
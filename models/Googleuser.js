import { createTokenForUser } from "../services/authentication";
const mongoose = require('mongoose');

import { Schema , model } from "mongoose";

    const googleuserSchema = new Schema(
        {
            email: {
                type: String,
                required: true,
                unique: true
            },
            fullname: {
                type: String,
                required: true,
            },
        },
        { timestamps: true }
    );
    googleuserSchema.static(
        "GenerateToken",
        async function (fullname, email) {
          const user = await this.findOne({ email });
          const token = createTokenForUser(user);
          return token;
        }
      );
module.exports = mongoose.models.GoogleUser || model("GoogleUser", googleuserSchema);
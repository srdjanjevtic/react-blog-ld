import { Schema } from "mongoose";
import mongoose from "mongoose";
import Post from "./post.model.js";
import Comment from "./comment.model.js";

const userSchema = new Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    savedPosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);


// Middleware to handle cascade delete of posts and comments
userSchema.pre('remove', async function(next) {
  try {
    await Post.deleteMany({ post: this._id });
    await Comment.deleteMany({ post: this._id });
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model("User", userSchema);

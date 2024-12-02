import { Schema } from "mongoose";
import mongoose from "mongoose";
import Comment from "./comment.model.js";

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    img: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    category: {
      type: String,
      default: "general",
    },
    content: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


// Middleware to handle cascade delete of comments
postSchema.pre('remove', async function(next) {
  try {
    await Comment.deleteMany({ post: this._id });
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model("Post", postSchema);

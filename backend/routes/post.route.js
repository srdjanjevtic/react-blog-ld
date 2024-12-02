import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  uploadAuth,
  featurePost,
} from "../controllers/post.controller.js";
import increaseVisit from "../middlewares/increaseVisit.js";
import { validate } from "../middlewares/validate.js";
import { createPostSchema, updatePostSchema } from "../validations/post.schema.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts);
router.get("/:slug", increaseVisit, getPost);
router.post("/", validate(createPostSchema), createPost);
router.delete("/:id", validate(updatePostSchema), deletePost);
router.patch("/feature", validate(updatePostSchema), featurePost);

export default router;

import express from "express"
import { addComment, deleteComment, getPostComments } from "../controllers/comment.controller.js"
import { validate } from "../middlewares/validate.js";
import { createCommentSchema, deleteCommentSchema } from "../validations/comment.schema.js";

const router = express.Router()

router.get("/:postId", getPostComments)
router.post("/:postId", validate(createCommentSchema), addComment)
router.delete("/:id", validate(deleteCommentSchema), deleteComment)

export default router
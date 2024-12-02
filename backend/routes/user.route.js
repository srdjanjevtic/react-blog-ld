import express from "express"
import { getUserSavedPosts, savePost, updateUserProfile } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/saved", getUserSavedPosts)
router.patch("/save", savePost)
router.patch("/profile", updateUserProfile)

export default router
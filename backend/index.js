import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import healthRouter from "./routes/health.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import dotenv from "dotenv";
import rateLimit from 'express-rate-limit';
dotenv.config();
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Define rate limiters
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again after 15 minutes'
});

// Apply global rate limiter to all routes
app.use(globalLimiter);

// Apply stricter rate limit to authentication routes
app.use('/users/login', authLimiter);
app.use('/users/register', authLimiter);

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json());

// Health check endpoints
app.use("/health", healthRouter);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/test",(req, res)=>{
  res.status(200).send("it works!")
})

// // app.get("/auth-state", (req, res) => {
// //   const authState = req.auth;
// //   res.json(authState);
// // });

// // app.get("/protect", (req, res) => {
// //   const {userId} = req.auth;
// //   if(!userId){
// //     return res.status(401).json("not authenticated")
// //   }
// //   res.status(200).json("content")
// // });

// // app.get("/protect2", requireAuth(), (req, res) => {
// //   res.status(200).json("content")
// // });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}!`);
});

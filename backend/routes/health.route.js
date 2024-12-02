import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now()
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

// Detailed health check including database status
router.get("/detailed", async (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
    database: {
      status: "UP",
      latency: "0ms"
    }
  };

  try {
    // Check database connection
    const startTime = Date.now();
    const dbState = mongoose.connection.readyState;
    const endTime = Date.now();

    healthcheck.database = {
      status: dbState === 1 ? "UP" : "DOWN",
      latency: `${endTime - startTime}ms`
    };

    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    healthcheck.database.status = "DOWN";
    res.status(503).send(healthcheck);
  }
});

export default router;

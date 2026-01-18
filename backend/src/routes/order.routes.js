import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Create order
router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  req.app.get("io").emit("order:new", order);
  res.json(order);
});

// Get all orders (admin)
router.get("/", async (req, res) => {
  res.json(await Order.find().populate("userId"));
});

export default router;

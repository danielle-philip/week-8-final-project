import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  res.json(await Product.find());
});

// Get single product
router.get("/:id", async (req, res) => {
  res.json(await Product.findById(req.params.id));
});

// Create product (admin-ready)
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// Delete product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;

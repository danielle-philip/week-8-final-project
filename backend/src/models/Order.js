import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, quantity: Number }],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "pending" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import authRoutes from "./src/routes/auth.routes.js";
import productRoutes from "./src/routes/product.routes.js";
import orderRoutes from "./src/routes/order.routes.js";
import { errorHandler } from "./src/middleware/error.middleware.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.set("io", io);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongo connected"));

server.listen(process.env.PORT || 5000, () => console.log("Server running"));

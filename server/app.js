import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import auth from "./routes/auth.js";
import cors from "cors";
config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);
// app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth', auth);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ "key": "rzp_test_j9in5uw2tvdckP"})
);

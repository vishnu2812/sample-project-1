import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
  key_id: "rzp_test_j9in5uw2tvdckP",
  key_secret: "DSulTqoikZ8fq5xrv9MoG5A1",
});

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);

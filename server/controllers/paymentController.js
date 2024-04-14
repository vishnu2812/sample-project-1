import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.js";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: (req.body.amount)*100,
      currency: "INR",
    };
    const order = await instance.orders.create(options); // Create the order object
    console.log(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "An error occurred while processing the checkout.",
    });
  }
};


export const paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
      .update(body)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Get the user ID from the request or from the session, depending on your application's setup
      const userId = req.user._id; // Assuming you're using authentication middleware to set req.user
      console.log(userId);
      // Create a new payment record in the database
      const payment = await Payment.create({
        userId,
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        amount: req.body.amount, // Assuming the amount is passed in the request body
        date: new Date(), // Current date and time
      });

      // Redirect to the payment success page with the Razorpay payment ID
      res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    } else {
      res.status(400).json({
        success: false,
        error: "Payment verification failed. Signature mismatch.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "An error occurred while processing the payment verification.",
    });
  }
};

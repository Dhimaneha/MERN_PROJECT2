import express from "express";
import { sendMessage } from "../controller/messageController.js";

const router = express.Router();
router.post("/send",sendMessage);
router.get("/send", (req, res) => {
    res.status(200).json({
        success: true,
        message: "GET request to /send is successful!",
    });
});

export default router;
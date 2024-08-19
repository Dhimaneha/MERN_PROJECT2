import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
    console.log('Request received at /send');
    
    try {
        const { name, email, subject, message } = req.body;

        // Validate request body
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            });
        }

        // Create and save the message
        await Message.create({ name, email, subject, message });

        // Send success response
        return res.status(200).json({
            success: true,
            message: "Message sent successfully!",
        });

    } catch (error) {

        // Handle validation errors
        if (error.name === "ValidationError") {
            let errorMessage = "";
            if (error.errors.name) {
                errorMessage += error.errors.name.message + " ";
            }
            if (error.errors.email) {
                errorMessage += error.errors.email.message + " ";
            }
            if (error.errors.subject) {
                errorMessage += error.errors.subject.message + " ";
            }
            if (error.errors.message) {
                errorMessage += error.errors.message.message + " ";
            }
            return res.status(400).json({
                success: false,
                message: errorMessage,
            });
        }

        // Handle other errors
        return res.status(500).json({
            success: false,
            message: "Unknown Error",
        });
    }
};

import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name Required!"],
        minLength: [3,"Name must contain atleast 3 characters!"],
    },
    email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide valid email!"],
    },
    subject: {
        type: String,
        required: [true, "Subject Required!"],
        minLength: [5,"Suject must contain atleast 5 character!"]
    },
    message: {
        type: String,
        required: [true,"Message Required!"],
        minLength:[10,"Message must contain atleast 10 character!"],
    },


});

export const Message= mongoose.model("Message",messageSchema);
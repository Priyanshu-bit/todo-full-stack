import mongoose from "mongoose";

const todoScehma = new mongoose.Schema({
    title: {
        type: String, 
        required:true
    },
    desc: {
        type: String,
        required:true
    }
})

const todoModel = mongoose.model("Todo", todoScehma);

export default todoModel;
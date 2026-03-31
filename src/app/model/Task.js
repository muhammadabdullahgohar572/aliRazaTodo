import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    addDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['completed', 'pending'], // Updated enum to lowercase
        default: 'pending',
    },
    userId: {
        type: mongoose.ObjectId,
        required: true,
    },
});

// Check if the model exists before creating it
export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);

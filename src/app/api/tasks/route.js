import { getResponseMessage } from "@/app/helper/responsemessage";
import { Task } from "@/app/model/Task";
import jwt from "jsonwebtoken";

export const GET = async () => {
    try {
        const GetData = await Task.find({});
        return getResponseMessage(true, 200, "Your Data Retrieved Successfully", GetData);
    } catch (error) {
        console.error("Error retrieving data:", error);
        return getResponseMessage(false, 500, "Failed to Retrieve Data");
    }
};

export const POST = async (request) => {
    const { title, content, status } = await request.json();
    try {
        const Token = request.cookies.get("authLogin")?.value;

        if (!Token) {
            return getResponseMessage(false, 401, "Authentication token is missing");
        }

        const data = jwt.verify(Token, process.env.TokenKey);

        const normalizedStatus = status.toLowerCase(); // Normalize status to match the enum

        const TaskPost = new Task({
            title,
            content,
            status: normalizedStatus, // Use normalized status
            userId: data._id,
        });

        const createdTask = await TaskPost.save();
        return getResponseMessage(true, 201, "Task Created Successfully", createdTask);
    } catch (error) {
        console.error("Error in POST request:", error.message);
        console.error("Stack Trace:", error.stack);

        if (error instanceof jwt.JsonWebTokenError) {
            return getResponseMessage(false, 401, "Invalid or Expired Token");
        }

        return getResponseMessage(false, 500, "Internal Server Error");
    }
};

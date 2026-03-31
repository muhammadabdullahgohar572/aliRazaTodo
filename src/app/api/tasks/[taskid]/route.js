
import { bdconnection } from "@/app/helper/bd";
import { Task } from "@/app/model/Task";
import { NextResponse } from "next/server";

// Ensure the database connection is established
await bdconnection()

export const GET = async (request, { params }) => {
  try {
    // Await `params` to fix the Next.js error
    const { taskid } = await params;

    // Find the task by ID
    const taskData = await Task.findById(taskid);

    if (!taskData) {
      return NextResponse.json(
        { message: "Task not found", status: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Task data retrieved successfully", status: true, data: taskData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving task data:", error);
    return NextResponse.json(
      { message: "Failed to retrieve task data", status: false, error: error.message },
      { status: 500 }
    );
  }
};


export const PUT = async (request,{params}) => {

  try {
    const{taskid}=await params;
    const {title,content,status}=await request.json()

    if (!taskid || (!title && !content && !status)) {
      return NextResponse.json({
        message: "Missing required fields or userId",
        status: false,
      });
    }
  
    const taskData = await Task.findByIdAndUpdate(taskid, {title, content, status }, {new: true});

    if (!taskData) {
      return NextResponse.json(
        { message: "Task not found", status: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Task data updated successfully", status: true, data: taskData },
      { status: 200 }
    );


  } catch (error) {
    console.error("Error Update task data:", error);
    return NextResponse.json(
      { message: "Failed to Update task data", status: false, error: error.message },
      { status: 500 })
  }

};

export const DELETE = async (request, { params }) => {
  try {
    const { taskid } = params;

    if (!taskid) {
      return NextResponse.json(
        { message: "Missing required field: taskid", status: false },
        { status: 400 }
      );
    }

    const taskData = await Task.findByIdAndDelete(taskid);

    if (!taskData) {
      return NextResponse.json(
        { message: "Task not found", status: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Task deleted successfully", status: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { message: "Failed to delete task", status: false, error: error.message },
      { status: 500 }
    );
  }
};


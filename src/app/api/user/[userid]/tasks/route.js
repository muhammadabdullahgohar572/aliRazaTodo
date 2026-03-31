import { Task } from "@/app/model/Task";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    
    try {

    const { userid } = params;   
    const tasks = await Task.find({ userId: userid });
    return NextResponse.json(tasks);
  

} catch (error) {
    console.error("Error retrieving tasks:", error);
    return NextResponse.json(
      { message: "Failed to retrieve tasks", status: false, error: error.message },
      { status: 500 }
    );
  }
};

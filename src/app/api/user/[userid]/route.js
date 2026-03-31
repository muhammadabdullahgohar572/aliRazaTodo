import { bdconnection } from "@/app/helper/bd";
import { Task } from "@/app/model/Task";
import { user } from "@/app/model/user";
import { NextResponse } from "next/server";

bdconnection();

export const PUT = async (request, { params }) => {
  try {
    const { userid } = params; // Extract userId from URL params
    const { name, email, about, profileurl, password } = await request.json();

    // Ensure required fields are present
    if (!userid || (!name && !email && !about && !profileurl && !password)) {
      return NextResponse.json({
        message: "Missing required fields or userId",
        status: false,
      });
    }

    // Update user with provided fields
    const updatedUser = await user.findByIdAndUpdate(
      userid,
      { name, email, about, profileurl, password }, // Fields to update
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }

    return NextResponse.json({
      user: updatedUser,
      message: "User has been updated successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error in PUT API:", error.message);
    return NextResponse.json({
      message: "User update failed",
      status: false,
      error: error.message,
    });
  }
};

export const GET = async (request, { params }) => {
  const { userid } = params; // Extract `userid` from `params`

  try {
    // Find the user by ID
    const userData = await user.findOne({ _id: userid });

    if (!userData) {
      return NextResponse.json(
        {
          message: "User not found",
          status: false,
        },
        { status: 404 }
      );
    }

    // Return the found user data
    return NextResponse.json(
      {
        message: "User data retrieved successfully",
        status: true,
        data: userData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return NextResponse.json(
      {
        message: "Failed to retrieve user data",
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  const { userid } = await params;
  console.log(userid);
  if (!userid) {
    return NextResponse.json(userid, {
      message: "User ID is required",
      status: false,
    });
  }
  try {
    const result = await Task.deleteOne({ _id: userid });
    console.log(result);
    return NextResponse.json({
      message: "User deleted successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error in DELETE API:", error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

import { bdconnection } from "@/app/helper/bd";
import { user } from "@/app/model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await bdconnection();
    const { email, password } = await request.json();

    // Find the user by email
    const User = await user.findOne({ email: email });
    if (!User) {
      throw new Error("User not found");
    }

    // Compare passwords
    const matched = bcrypt.compareSync(password, User.password);
    if (!matched) {
      throw new Error("Invalid password");
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        _id: User._id,
        name: User.name,
      },
      process.env.TokenKey,
      { expiresIn: "1d" } // Token expiration
    );

    // Create response with token in cookies
    const response = NextResponse.json({
      message: "Login success!",
      User: User,
    });

    response.cookies.set("authLogin", token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      httpOnly: true, // Prevent client-side access
     
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 400,
      }
    );
  }
};

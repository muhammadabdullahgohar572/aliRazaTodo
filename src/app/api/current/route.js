import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { user } from "@/app/model/user";
import { bdconnection } from "@/app/helper/bd";

export async function GET(request) {
  try {
    await bdconnection()
    const authToken = request.cookies.get("authLogin")?.value;
    const data = jwt.verify(authToken, process.env.TokenKey);
    const User = await user.findById(data._id).select("-password");
    return NextResponse.json(User);
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.json({ error: "Unauthorized or invalid token" }, { status: 401 });
  }
}


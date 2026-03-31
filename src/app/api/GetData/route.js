import { user } from "@/app/model/user";
import { NextResponse } from "next/server";

const { bdconnection } = require("@/app/helper/bd");

bdconnection();

export const GET = async (request) => {
  let userData = [];
  try {
    // Use `.lean()` to convert Mongoose objects to plain JavaScript objects
    userData = await user.find({});
  } catch (error) {
    console.log("Get Data error", error);
    return NextResponse.json({ message: "Failed to get data" });
  }

  return NextResponse.json(userData);
};

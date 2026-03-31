import { bdconnection } from "@/app/helper/bd"; // Ensure this connects to your database
import { user } from "@/app/model/user"; // Ensure this is your user model/schema
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// Mock GET handler
export const GET = () => {
  const users = [
    { id: 1, name: "John", phone: "123-456-7890", course: "Mathematics", counter: 0 },
    { id: 2, name: "Jane", phone: "987-654-3210", course: "Physics", counter: 0 },
    { id: 3, name: "Bob", phone: "456-789-0123", course: "Chemistry", counter: 0 },
  ];
  return NextResponse.json(users);
};

// POST handler
export const POST = async (request) => {
  try {
    await bdconnection(); // Ensure database connection works

    const { name, email, password, about, profileurl } = await request.json();

    // Check for existing user
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash password
    const saltRounds = parseInt(process.env.BCRYPT_SALT || "10");
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new user({
      name,
      email,
      password: hashedPassword,
      about,
      profileurl,
    });

    // Save user to the database
    await newUser.save();

    return NextResponse.json({
      message: "User successfully registered",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        about: newUser.about,
        profileurl: newUser.profileurl,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error", error: error.message }, { status: 500 });
  }
};

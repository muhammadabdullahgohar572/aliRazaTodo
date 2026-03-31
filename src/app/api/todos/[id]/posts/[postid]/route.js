import { bdconnection } from "@/app/helper/bd";
import { NextResponse } from "next/server";
bdconnection()
export const GET = async (request, { params }) => {
    const { id, postid } = params; // Correct spelling for "userid"
    
    console.log("This is user Username:",id); // Correct key name
    console.log("This is user postid:", postid);

    return NextResponse.json(
        { id, postid, message: "Parameters received successfully" },
        { status: 200 }
    );
};

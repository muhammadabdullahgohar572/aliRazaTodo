// Ensure you handle POST method and properly clear the cookie
import { NextResponse } from 'next/server';

export const POST = async () => {
  // Create the response object
  const response = NextResponse.json({
    message: "You have logged out!"
  }, {
    status: 200 // Changed to 200, as it is the correct response for success
  });

  // Clear the cookie by setting it to an expired date
  response.cookies.set("authLogin", "", {
    httpOnly: true, // Ensure cookie is not accessible through JavaScript
    secure: process.env.NODE_ENV === 'production', // Only set secure cookies in production
    expires: new Date(0) // Expire immediately
  });

  return response;
};

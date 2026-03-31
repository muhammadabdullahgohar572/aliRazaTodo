import { NextResponse } from "next/server";

export const getResponseMessage = (success, statusCode, messageText, data = null) => {
  return NextResponse.json(
    {
      message: messageText,
      success: success,
      data: data,
    },
    {
      status: statusCode, // Corrected the key to `status`, not `statusCode`
    }
  );
};

import { httAxios } from "../helper/HttpsHelper";
export const ADDTASK = async (task) => {
  try {
    const response = await httAxios.post("/api/tasks", task);
    console.log("Task added successfully:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The response from the API is available
      console.error("Error adding task:", error.response.data); // Log detailed error response
      console.error("Error status:", error.response.status); // Log status code
    } else {
      console.error("Error adding task:", error.message); // Log message if there's no response
    }
    throw error;  // Rethrow the error for further handling
  }
};

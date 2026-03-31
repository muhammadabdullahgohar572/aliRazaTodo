import axios from "axios";
import { httAxios } from "../helper/HttpsHelper";

export const userAdd = async (user) => {
  try {
    const response = await httAxios.post("/api/user", user);
    console.log("Task added successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const login = async (Login) => {
  try {
    const response = await httAxios.post("/api/login", Login);
    console.log("User successfully logged in:", response.data); // Debugging
    return response; // Return the entire response
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    // Send POST request to the logout endpoint
    const response = await axios.post("/api/logout");
    console.log("User successfully logged out:", response.data); // Debugging
    return response; // Return the entire response
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const gettask = async ({ userid }) => {
  try {
    // Send POST request to the logout endpoint
    const response = await httAxios.get(`/api/user/${userid}/tasks`);
    console.log("User successfully logged out:", response.data); // Debugging
    return response; // Return the entire response
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const currentuser = async () => {
  try {
    const response = await httAxios.get("/api/current");
    // console.log("User successfully logged in:", response.data); // Debugging
    return response.data; // Return the user data
  } catch (error) {
    console.error("Error fetching the current user:", error);
    throw error;
  }
};

export const currentuserDataDelete = async (taskId) => {
  try {
    // Send DELETE request to the API endpoint with the taskId
    const response = await httAxios.delete(`/api/user/${taskId}`);
    console.log("Task successfully deleted:", response.data); // Debugging
    return response; // Return the entire response
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

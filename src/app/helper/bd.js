import mongoose from "mongoose";

// Database connection function
export const bdconnection = async () => {
  try {
    // Check if MongoDB URL exists
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL environment variable is not defined.");
    }

    // Check if already connected
    if (mongoose.connection.readyState >= 1) {
      console.log("MongoDB is already connected.");
      return;
    }

    // Attempt MongoDB connection
    const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "work_manager",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("==============================================");
    console.log("MongoDB Connected Successfully:", connection.host);
    console.log("==============================================");
  } catch (error) {
    console.error("==============================================");
    console.error("BD Connection Error:", error.message);
    console.error("==============================================");
  }
};

import axios from "axios";

export const httAxios = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://tdodapp-msadt57dx-muhammad-abdullahs-projects-036c9e90.vercel.app"
      : "http://localhost:3000", // Include http:// for localhost
});

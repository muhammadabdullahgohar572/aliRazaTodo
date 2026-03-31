import axios from "axios";

export const httAxios = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://tdodapp.vercel.app"
      : "http://localhost:3000", // Include http:// for localhost
});

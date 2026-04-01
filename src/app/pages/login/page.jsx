"use client";

import React, { useContext, useState } from "react";

import { toast } from "react-toastify";
import { login } from "@/app/service/service";
import Head from "next/head";
import usercontext from "@/app/context/usercontext";
import { useRouter } from "next/navigation";
const Login = () => {
   const router = useRouter()
  const context = useContext(usercontext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await login(formData);

      if (response && response.data) {
        toast.success("User successfully logged in", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.href="/",
        context.setUser(response.data.User); 
        router.push("/");
        // Ensure setUser exists in the context
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ email: "", password: "" });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-blue-200">
        <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">
            Login
          </h1>

          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className={`flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

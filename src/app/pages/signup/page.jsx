"use client";

import { userAdd } from "@/app/service/service";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const metadata = { title: "Signup" };

const Signup = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleAddTask = async (e) => {
    e.preventDefault();

    try {
      const addtask = await userAdd(formData);
      toast.success("Your account has been created successfully!",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.location.href="/pages/login";
      router.push("/pages/login");  // Corrected the navigation path
    } catch (error) {
      console.error("Failed to add task:", error);
      toast.error("Failed to create an account. Please try again.");
    }
  };

  // Reset the form
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">
          Sign Up
        </h1>

        <form className="space-y-4" onSubmit={handleAddTask}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
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
            <label className="block text-sm font-medium text-gray-300">Password</label>
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

          {/* About Me Section */}
          <div>
            <label className="block text-sm font-medium text-gray-300">About Me</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="mt-1 p-3 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Tell us about yourself"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-red-600 ml-[20px] text-white font-semibold py-2 px-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

"use client";

import { useState, useEffect } from "react";
import no1 from "../../img/undraw_login_wqkt.png";
import Image from "next/image";
import { ADDTASK } from "@/app/service/addtask";
import { toast } from "react-toastify";

const metadata = {
  title: "Add task",
};

export default function TaskPage() {
  // Set document title using useEffect
  useEffect(() => {
    document.title = metadata.title;
  }, []);

  // State for form data
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "677ed4d8139f09a59e114bf4",
  });

  // Handle form submission
  const handleAddTask = async (e) => {
    e.preventDefault();
    console.log("Task added:", task);

    try {
      const addtask = await ADDTASK(task);
      console.log("Task added successfully:", addtask);
      toast.success("Task added successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Failed to add task:", error);
      toast.error("Failed to add task:", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Handle clear form
  const handleClear = () => {
    setTask({ title: "", content: "", status: "none", userId: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 my-4 p-8 rounded-lg shadow-md w-full max-w-md">
        <Image src={no1} alt="Task illustration" height={200} />
        <h1 className="text-2xl font-bold mb-4 text-center">
          Add your task here!!
        </h1>
        <form onSubmit={handleAddTask}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              value={task.title}
              className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring focus:ring-blue-500"
              placeholder="Enter task title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block mb-2 text-sm font-medium">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              onChange={(e) => setTask({ ...task, content: e.target.value })}
              value={task.content}
              className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring focus:ring-blue-500"
              placeholder="Enter task details"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block mb-2 text-sm font-medium">
              Status
            </label>
            <select
              id="status"
              name="status"
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              value={task.status}
              className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring focus:ring-blue-500"
            >
              <option value="none">---Select Status---</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Add Todo
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

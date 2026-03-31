"use client";

import usercontext from "@/app/context/usercontext";
import { currentuserDataDelete, gettask } from "@/app/service/service";
import { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  const context = useContext(usercontext);

  const fetchTasks = async (userid) => {
    try {
      const response = await gettask({ userid });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      if (!taskId) {
        console.warn("Task ID is missing or invalid.");
        alert("Task ID is missing. Please try again.");
        return;
      }
  
      const response = await currentuserDataDelete(taskId); // Pass taskId directly
      console.log("Task deleted:", response);
  
      // Remove the task from the local state
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };
  

  const toggleExpand = (taskId) => {
    setExpandedTaskId((prev) => (prev === taskId ? null : taskId));
  };

  useEffect(() => {
    if (context.user && context.user._id) {
      fetchTasks(context.user._id);
    }
  }, [context.user]);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">User Tasks</h1>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available.</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className={`shadow-lg rounded-md p-4 ${
                task.status === "completed" ? "bg-green-800 text-white" : "bg-gray-800 text-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleExpand(task._id)}
                    className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md"
                  >
                    {expandedTaskId === task._id ? "Collapse" : "Expand"}
                  </button>
                  <span
                    onClick={() => deleteTask(task._id)}
                    className="hover:bg-gray-700 bg-gray-900 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer"
                  >
                    <RxCross1 className="text-white" />
                  </span>
                </div>
              </div>
              {expandedTaskId === task._id && (
                <div className="mt-3">
                  <p>{task.content}</p>
                  <div className="flex justify-between mt-4 text-sm">
                    <p>
                      Status: <span className="font-bold">{task.status}</span>
                    </p>
                    <p>
                      Author: <span className="font-bold">{context.user?.name || "Unknown"}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowTasks;

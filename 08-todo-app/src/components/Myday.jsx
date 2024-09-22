import React, { useState, useEffect } from "react";
import TaskHistory from "./TaskHistory";

export default function Myday() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("default");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load tasks and completed tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    setTasks(savedTasks);
    setCompletedTasks(savedCompletedTasks);
  }, []);

  // Save tasks and completed tasks to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  // Function to add a new task
  const handleAddTask = () => {
    if (title && description && priority !== "default") {
      const newTask = { title, description, priority };
      setTasks([...tasks, newTask]);
      // Clear input fields after adding the task
      setTitle("");
      setDescription("");
      setPriority("default");
    } else {
      alert("Please fill all the fields");
    }
  };

  // Function to handle task completion (without navigating to another page)
  const handleCompleteTask = (taskIndex) => {
    const completedTask = tasks[taskIndex];
    setCompletedTasks([...completedTasks, completedTask]);

    // Remove the task from the tasks list
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  // Sort tasks by priority (High -> Medium -> Low)
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-12 gap-4">
        {/* Left side - Add Task Form */}
        <div class="col-span-6 bg-gray-100 rounded-lg p-4 border border-orange-500">
          <h3 class="text-lg font-bold mb-2">Add Task</h3>
          <div class="mb-2">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              class="w-full rounded-md px-2 py-1 border focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <textarea
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              class="w-full rounded-md px-2 py-1 border focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Description of the task"
            />
          </div>
          <div class="flex justify-between mb-2">
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              class="rounded-md px-16 py-1 h-8 border focus:outline-none focus:ring-1 focus:ring-orange-500"
            >
              <option value="default">Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              onClick={handleAddTask}
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Right side - Task History */}
        <div class="col-span-6 bg-gray-100 rounded-lg p-4">
          <TaskHistory
            tasks={sortedTasks}
            onCompleteTask={handleCompleteTask}
          />
        </div>
      </div>
    </div>
  );
}

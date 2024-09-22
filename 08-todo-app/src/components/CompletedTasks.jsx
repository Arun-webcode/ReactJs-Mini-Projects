import React, { useEffect, useState } from "react";

function CompletedTasks() {
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load completed tasks from localStorage when the component mounts
  useEffect(() => {
    const savedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    setCompletedTasks(savedCompletedTasks);
  }, []);

  // Function to handle deleting a completed task
  const handleDeleteTask = (taskIndex) => {
    const updatedCompletedTasks = completedTasks.filter(
      (_, index) => index !== taskIndex
    );
    setCompletedTasks(updatedCompletedTasks);
    localStorage.setItem(
      "completedTasks",
      JSON.stringify(updatedCompletedTasks)
    );
  };

  return (
    <div class="container mx-auto p-4">
      <h3 class="text-lg font-bold mb-2">Completed Tasks</h3>
      {completedTasks.length === 0 ? (
        <p>No completed tasks yet</p>
      ) : (
        completedTasks.map((task, index) => (
          <div
            key={index}
            class="bg-white p-4 rounded-lg shadow-lg flex items-center border mb-2"
          >
            <div>
              <p class="font-bold">{task.title}</p>
              <p class="text-gray-500 text-sm">{task.description}</p>
              <p class="text-sm">Priority: {task.priority}</p>
            </div>
            <input
              type="checkbox"
              class="h-5 w-5 text-orange-500 ml-4"
              checked
              readOnly
            />
            <button
              onClick={() => handleDeleteTask(index)}
              class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 ml-4"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CompletedTasks;

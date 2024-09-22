import React from "react";

function TaskHistory({ tasks, onCompleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
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
            onChange={() => onCompleteTask(index)} // Mark task as completed
          />
        </div>
      ))}
    </div>
  );
}

export default TaskHistory;

import React from "react";

export default function Myday() {
  return (
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 bg-gray-100 rounded-lg p-4  border border-orange-500">
          <h3 class="text-lg font-bold font-medium mb-2">Add Task</h3>
          <div class="mb-2">
            <input
              type="text"
              id="title"
              class="w-full rounded-md px-2 py-1 border focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <textarea
              id="description"
              rows="3"
              class="w-full rounded-md px-2 py-1 border focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Description of the task"
            ></textarea>
          </div>
          <div class="flex justify-between mb-2">
            <select
              id="priority"
              class="rounded-md px-16 py-1 h-8 border focus:outline-none focus:ring-1 focus:ring-orange-500"
            >
              <option value="default">Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button class="bg-blue-500 px-14 mt-12 text-white px-2 py-1 rounded-md hover:bg-blue-700 mt-4">
              Add Task
            </button>
          </div>
        </div>

        <div class="col-span-6 bg-gray-100 rounded-lg p-4">
          <div class="bg-white p-4 rounded-lg shadow-lg flex items-center border">
            <div>
              <p class="font-bold">Study for 3 hours in the first half</p>
              <p class="text-gray-500 text-sm">
                Revise React and complete todos
              </p>
            </div>
            <input
              type="checkbox"
              checked
              class="h-5 w-5 text-orange-500 ml-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

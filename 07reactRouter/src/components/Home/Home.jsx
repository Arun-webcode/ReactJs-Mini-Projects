import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <div className="text-center space-y-4 max-w-xl">
          <h1 className="text-4xl font-bold text-orange-600">Stay Motivated</h1>
          <p className="text-lg text-gray-700">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>
        </div>
        <button className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          <NavLink
            to="/myday"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-white-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Create Task
          </NavLink>
        </button>
      </main>
    </div>
  );
}

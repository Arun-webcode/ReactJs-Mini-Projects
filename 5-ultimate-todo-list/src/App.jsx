import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <header className="bg-gray-600 p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">Logo</div>
            <div className="flex space-x-6">
              <a href="#my-day" className="text-white hover:text-gray-200">
                My Day
              </a>
              <a href="#all-taste" className="text-white hover:text-gray-200">
                All Taste
              </a>
            </div>
          </nav>
        </header>
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
          <div className="text-center space-y-4 max-w-xl">
            <h1 className="text-4xl font-bold text-blue-600">Stay Motivated</h1>
            <p className="text-lg text-gray-700">
              "The only way to do great work is to love what you do." - Steve
              Jobs
            </p>
            <p className="text-lg text-gray-700">
              "Act as if what you do makes a difference. It does." - William
              James
            </p>
          </div>
          <button className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Create Task
          </button>
        </main>
      </div>
    </>
  );
}

export default App;

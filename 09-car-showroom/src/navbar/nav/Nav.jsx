import { mrttLogo } from "../../static/Images";
const Nav = () => {
  return (
    <div className="flex justify-between pl-2 pr-2 bg-gray-50 h-12 text-center fixed top-12 left-0 right-0">
      <div className="p-2 text-lg text-orange-500 font-bold tracking-widest	">
        <img src={mrttLogo} className="h-8 w-32" alt="" />
      </div>

      <div className="w-1/2 md:w-1/5 flex justify-between">
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm md:text-base hover:text-blue-400 text-center w-1/3 mt-2 mb-2 pl-1 pr-1 "
        >
          Log
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-orange-700 font-medium rounded-lg text-sm md:text-base  text-center w-1/2 mt-2 mb-2 pl-1 pr-1 hover:text-cyan-100"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Nav;

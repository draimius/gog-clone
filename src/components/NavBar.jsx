import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const NavBar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
            GOG Clone
          </p>
        </Link>
        <button
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default NavBar;

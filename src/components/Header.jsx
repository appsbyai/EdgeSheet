import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-gray-800 py-4 dark:bg-gray-900">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-300 hover:text-white">Trades</Link></li>
            <li><Link to="/performance" className="text-gray-300 hover:text-white">Performance</Link></li>
            <li><Link to="/accounts" className="text-gray-300 hover:text-white">Accounts</Link></li>
            <li><Link to="/labels" className="text-gray-300 hover:text-white">Labels</Link></li>
            <li><Link to="/exchanges" className="text-gray-300 hover:text-white">Exchanges</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-700 text-white"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <div>
            <span className="mr-2">Account</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
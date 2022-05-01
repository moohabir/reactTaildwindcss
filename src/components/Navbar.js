import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 bg-indigo-100 text-gray-600 md:bg-red-600 sm:bg-yellow-800 lg:bg-blue-800 ">
      <ul className="flex items-center justify-between h-full px-10 ">
        <Link to="/">
          <li> Home sweet</li>
        </Link>
        <Link to="/workcontainer">
          <li> Work Container </li>
        </Link>
        <Link to="/liveportal">
          <li> Live Portal </li>
        </Link>

        <Link to="/contact">
          <li className="bg-blue-300 rounded-full px-2 md:bg-red-400 text-white">
            {" "}
            Contact{" "}
          </li>
        </Link>
      </ul>
    </nav>
  );
}

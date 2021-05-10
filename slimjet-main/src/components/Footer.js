import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";


export default function Footer() {
  return (
    <div className="bg-red-600">
      <div className="grid grid-rows-1 grid-flow-col gap-4 p-4">
        <div className="row-start-1 row-span-1 py-3 ">
            <Router>
            <ul>
            <li>
                <NavLink
                to="/"
                exact
                className="inline-flex items-center rounded px-3 text-red-200 hover:text-red-100"
            >
              Home
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/post"
                className="inline-flex items-center rounded px-3 text-red-200 hover:text-red-100"
          >
                Blog Posts
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/about"
                className="inline-flex items-center rounded px-3 text-red-200 hover:text-red-100"
          >
                About
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/contact"
                className="rounded px-3 text-red-200 hover:text-red-100"
          >
                Contact
                </NavLink>
            </li>
            </ul>
          </Router>
        </div>

        <div className="row-start-1 row-span-1 py-3 text-red-200">
            <ul>
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </ul>
        </div>

        <div className="row-start-1 row-span-1 py-3 text-red-200">
            <ul>
              <li>45237524</li>
              <li>eksempel@juh.com</li>
              <li>Truls HT</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
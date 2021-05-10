import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import image from "../logo.png";

export default function NavBar() {
  return (
    <div className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <img src={image} alt="Logo" style={{height:'70px'}} className="inline-flex items-center py-3 my-6" />
          <h2>
            <NavLink
              to="/"
              activeClassName="text-white"
              exact
              className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-4xl font-bold cursive tracking-widest"
            >
              Slimjet
            </NavLink>
            </h2>
            
            <NavLink
              to="/"
              activeClassName="text-red-100 bg-red-700"
              exact
              className="inline-flex items-center py-3 my-6 rounded px-3 text-red-200 hover:text-red-100"
            >
              Home
            </NavLink>
          
          <NavLink
            to="/blog"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 my-6 rounded px-3 text-red-200 hover:text-red-100"
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 my-6 rounded px-3 text-red-200 hover:text-red-100"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 my-6 rounded px-3 text-red-200 hover:text-red-100"
          >
            Contact
          </NavLink>
          <NavLink
            to="/gallery"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 my-6 rounded px-3 text-red-200 hover:text-red-100"
          >
            Gallery
          </NavLink>
        </div>
        <div className="inline-flex py-3 my-6 px-3">
          <SocialIcon
            url="https://www.facebook.com/slimjetbrowser"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.slimjet.com/blog/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </div>
  );
}


import React from "react";
import image from "../wave.jpg";
import SlimjetInfo from "./SlimjetInfo";

export default function Home() {
  return (
    <div className="relative">
      <img
        src={image}
        alt="wave"
        className="absolute w-full h-full object-cover"
      />

      <div className="relative grid grid-rows-4 justify-center pt-12 lg:pt-64 px-8">
        <h1
          className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug"
        >
          Welcome to ad-free browsing
        </h1>
      <div className="justify-center"> </div>
        <a href='https://www.slimjet.com/download.php?version=win32&type=web&beta=&server='>
          <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded-full">Download</button>
        </a>
      </div>
      <SlimjetInfo/>
    </div>
  );
}

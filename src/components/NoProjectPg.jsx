import React from "react";
import noProjectImg from "../assets/no-projects.png";

const NoProjectPg = ({ handleNewProject }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <img src={noProjectImg} alt="No Projects" className="w-20 h-20" />
      <h2 className="font-semibold tracking-wider">No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button
        className="bg-gray-800 text-white py-2 px-8 mt-2 rounded-md"
        onClick={handleNewProject}
      >
        Create new Project
      </button>
    </div>
  );
};

export default NoProjectPg;

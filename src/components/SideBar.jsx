import React from "react";

const SideBar = ({
  handleNewProject,
  projectData,
  projectOpened,
  setProjectOpened,
}) => {
  const handleProject = (projSelected) => {
    setProjectOpened(projSelected);
  };
  return (
    <div className="w-1/6 max-w-1/6 min-w-1/2 bg-black h-full pt-12 px-4 rounded-tr-lg">
      <h1 className="text-white font-semibold tracking-wider text-xl">
        YOUR PROJECTS
      </h1>
      <button
        className="bg-gray-800 text-white py-2 px-8 mt-8 mb-8 rounded-md"
        onClick={handleNewProject}
      >
        + Add Project
      </button>
      <div className="flex flex-col gap-3 items-start">
        {projectData.map((eachProj, index) => {
          return (
            <button
              key={index}
              className="text-start text-white font-normal tracking-wider w-full hover:bg-gray-800 active:bg-gray-800 p-1 rounder-md"
              onClick={(e) => handleProject(eachProj)}
            >
              {eachProj.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

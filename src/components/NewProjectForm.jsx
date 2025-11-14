import React, { useRef, useState } from "react";

const NewProjectForm = ({
  handleCancelProject,
  newProjectStatus,
  setNewProjectStatus,
  projectData,
  setProjectData,
}) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDataRef = useRef();

  const handleAddProject = () => {
    if (
      titleRef.current.value.trim() &&
      descRef.current.value.trim() &&
      dueDataRef.current.value.trim()
    ) {
      setProjectData((prevData) => [
        ...prevData,
        {
          title: titleRef.current.value.trim(),
          description: descRef.current.value.trim(),
          dueDate: dueDataRef.current.value,
          tasks: [],
        },
      ]);
      setNewProjectStatus(false);
    } else {
      alert("please enter all fields");
    }
  };

  return (
    <div className="w-full pt-32 pl-20">
      <div className="flex justify-end w-5/6">
        <button
          className="text-black py-2 px-8 mt-2 "
          onClick={handleCancelProject}
        >
          Cancel
        </button>
        <button
          className="bg-black text-white py-2 px-8 mt-2 rounded-md"
          onClick={handleAddProject}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-8 w-5/6  pt-12">
        <div className="gap-2 flex flex-col">
          <label htmlFor="projTitle" className="font-semibold text-gray-800">
            TITLE
          </label>
          <input
            id="projTitle"
            ref={titleRef}
            className="px-4 py-2 bg-gray-300 border-b-4 border-gray-400 rounded-md"
            type="text"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <label className="font-semibold text-gray-800" htmlFor="projDesc">
            DESCRIPTION
          </label>
          <textarea
            id="projDesc"
            rows="4"
            cols="50"
            ref={descRef}
            className="px-4 py-2 bg-gray-300 border-b-4 border-gray-400 rounded-md"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <label className="font-semibold text-gray-800" htmlFor="projDate">
            DUE DATE
          </label>
          <input
            id="projDate"
            className="px-4 py-2 bg-gray-300 border-b-4 border-gray-400 rounded-md"
            type="date"
            ref={dueDataRef}
          />
        </div>
      </div>
    </div>
  );
};

export default NewProjectForm;

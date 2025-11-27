import Input from "./Input.jsx";
import React, { useRef, useState } from "react";
import Modal from "./Modal.jsx";

const NewProjectForm = ({
  handleCancelProject,
  newProjectStatus,
  setNewProjectStatus,
  projectData,
  setProjectOpened,
  setProjectData,
  onAdd,
  onCancle,
}) => {
  const modalRef = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  // old code

  const handleAddProject = () => {
    if (
      titleRef.current.value.trim() &&
      descRef.current.value.trim() &&
      dueDateRef.current.value.trim()
    ) {
      setProjectData((prevData) => [
        ...prevData,
        {
          title: titleRef.current.value.trim(),
          description: descRef.current.value.trim(),
          dueDate: dueDateRef.current.value,
          tasks: [],
        },
      ]);
      setNewProjectStatus(false);
      setProjectOpened();
    } else {
      alert("please enter all fields");
    }
  };

  return (
    <>
      <Modal ref={modalRef} btnCaption="Okay">
        <h1 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h1>
        <p className="text-stone-600 mb-4">
          Ooops! Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value in the input field.
        </p>
      </Modal>
      <div className="w-[36rem] mt-16">
        <menu className="flex justify-end items-center gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950 "
            onClick={onCancle}
          >
            Cancel
          </button>
          <button
            className="bg-stone-800 hover:bg-stone-950 text-stone-50 py-2 px-6 rounded-md"
            onClick={handleSave}
          >
            Add
          </button>
        </menu>
        <div>
          <Input labelText="Title" ref={title} idText="projTitle" />
          <Input
            labelText="Description"
            textArea
            ref={description}
            idText="projDesc"
          />
          <Input
            type="date"
            labelText="Due Date"
            ref={dueDate}
            idText="projDate"
          />
        </div>
      </div>
    </>
  );
};

export default NewProjectForm;

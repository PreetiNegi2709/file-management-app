import React, { useState, useRef } from "react";
import Modal from "./Modal";

const NewTask = ({ onAddTask }) => {
  const modalRef = useRef();
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    // forward the tesl enterd to app
    if (enteredTask.trim() === "") {
      modalRef.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={modalRef} btnCaption="Okay">
        <p>The value can't be empty</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;

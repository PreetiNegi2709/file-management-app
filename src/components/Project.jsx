import React, { useRef } from "react";

const Project = ({
  projectData,
  setProjectData,
  projectOpened,
  setProjectOpened,
  setNewProjectStatus,
  newProjectStatus,
}) => {
  const taskRef = useRef();

  const handleDelete = () => {
    setProjectData((prevData) =>
      prevData.filter((eachObj) => eachObj !== projectOpened)
    );
    setProjectOpened();
  };

  const handleTask = () => {
    let taskRefValue = taskRef.current.value.trim();
    if (taskRefValue) {
      setProjectOpened((prevData) => {
        const tempdata = { ...prevData };
        tempdata.tasks = [...tempdata.tasks, taskRefValue];
        return tempdata;
      });
      taskRef.current.value = "";
    } else {
      alert("Task can't be null");
    }
  };

  const handleClearTask = (eachTask) => {
    console.log(eachTask);
    // setProjectData(projectOpened.tasks.filter((x) => x != eachTask));
  };

  return (
    <div className="w-full py-12 pl-20">
      {/* project details */}
      <div className="w-3/4 ">
        <div className="flex w-full justify-between">
          <h1 className="text-gray-800 text-3xl font-bold">
            {projectOpened.title}
          </h1>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <section className="flex flex-col gap-4 border-b-4 border-gray-400">
          <p className="text-gray-400 text-lg font-semibold">
            {projectOpened.dueDate}
          </p>
          <p className="text-gray-600 text-lg font-semibold pb-8">
            {projectOpened.description}
          </p>
        </section>
      </div>
      {/* tasks */}
      <div className="w-3/4 pt-8">
        <h1 className="text-gray-800 text-2xl font-semibold">Tasks</h1>
        <div className="flex gap-8 pt-4">
          <input
            type="text"
            className="bg-gray-200 px-2 py-1 rounded-md w-1/2"
            ref={taskRef}
          />
          <button onClick={handleTask}>Add Task</button>
        </div>
        {projectOpened.tasks.length > 0 ? (
          <section className="bg-gray-100 mt-8 px-2 py-4 rounded-md shadow-xl">
            {projectOpened.tasks.map((eachTask, index) => {
              return (
                <div key={index} className="flex py-2 px-4 justify-between">
                  <p>• &nbsp; {eachTask}</p>
                  <button onClick={() => handleClearTask(eachTask)}>
                    Clear
                  </button>
                </div>
              );
            })}
          </section>
        ) : (
          <p className="mt-8">This project doesn't have any task yet.</p>
        )}
      </div>
    </div>
  );
};

export default Project;

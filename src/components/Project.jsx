import React, { useRef } from "react";
import Tasks from "./Tasks.jsx";

const Project = ({
  projectData,
  setProjectData,
  projectOpened,
  setProjectOpened,
  setNewProjectStatus,
  newProjectStatus,
  // new prop
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
  selectedProject,
}) => {
  // new code start
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // new code ended
  const taskRef = useRef();

  function formatDateShortMonth(dateString) {
    const date = new Date(dateString);

    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  // console.log(formatDateShortMonth(projectData[projectOpened].dueDate));

  const handleDelete = () => {
    setProjectData((prevData) => {
      const tempData = prevData.map((eachProj) => ({
        ...eachProj,
        tasks: [...eachProj.tasks],
      }));
      tempData.splice(projectOpened, 1);
      return tempData;
    });
    setProjectOpened();
  };

  const handleTask = () => {
    let taskRefValue = taskRef.current.value.trim();

    if (taskRefValue) {
      setProjectData((prevData) => {
        const tempData = prevData.map((eachProj) => ({
          ...eachProj,
          tasks: [...eachProj.tasks],
        }));
        tempData[projectOpened].tasks = [
          ...tempData[projectOpened].tasks,
          taskRefValue,
        ];
        return tempData;
      });
      taskRef.current.value = "";
    } else {
      alert("Task can't be null");
    }
  };

  const handleClearTask = (eachTask, index) => {
    // main project data handle (while adding the tasks)
    setProjectData((prevData) => {
      const tempData = prevData.map((eachProj) => ({
        ...eachProj,
        tasks: [...eachProj.tasks],
      }));
      tempData[projectOpened].tasks.splice(index, 1);
      return tempData;
    });
  };

  return (
    <div className="w-[35rem] mt-16 ">
      {/* new code */}
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex item-center justify-between">
          <h1 className="text-3xl font-bold mb-2 text-stone-600">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400 ">{formattedDate}</p>
        <p className="mb-4 whitespace-pre-wrap text-stone-400 ">
          {project.description}
        </p>
      </header>
      <Tasks
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
        selectedProject={selectedProject}
      />
    </div>
  );
};

export default Project;

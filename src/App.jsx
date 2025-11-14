import { useState } from "react";
import NoProjectPg from "./components/NoProjectPg";
import SideBar from "./components/sideBar";
import NewProjectForm from "./components/NewProjectForm";
import Project from "./components/Project";

// [{ title: "dummy", description: "dummy desc", dueDate: "dummy",tasks:[dummy1,dummy2,dummy3]},{},{},{}];
const allProjects = [
  {
    title: "dummy",
    description: "dummy desc",
    dueDate: "dummy",
    tasks: ["dummy1", "dummy2", "dummy3"],
  },
];

function App() {
  const [newProjectStatus, setNewProjectStatus] = useState(false);
  const [projectData, setProjectData] = useState(allProjects);
  const [projectOpened, setProjectOpened] = useState();
  const handleNewProject = () => {
    setNewProjectStatus(true);
  };

  const handleCancelProject = () => {
    setNewProjectStatus(false);
  };

  return (
    <>
      <div className="flex pt-8 h-screen">
        <SideBar
          handleNewProject={handleNewProject}
          projectData={projectData}
          projectOpened={projectOpened}
          setProjectOpened={setProjectOpened}
        />
        <main className="w-5/6 h-full">
          {newProjectStatus ? (
            <NewProjectForm
              handleCancelProject={handleCancelProject}
              newProjectStatus={newProjectStatus}
              setNewProjectStatus={setNewProjectStatus}
              projectData={projectData}
              setProjectData={setProjectData}
              setProjectOpened={setProjectOpened}
            />
          ) : projectOpened ? (
            <Project
              projectData={projectData}
              setProjectData={setProjectData}
              projectOpened={projectOpened}
              setProjectOpened={setProjectOpened}
              newProjectStatus={newProjectStatus}
              setNewProjectStatus={setNewProjectStatus}
            />
          ) : (
            <NoProjectPg handleNewProject={handleNewProject} />
          )}
        </main>
      </div>

      {/* when no project added */}
      {/* new project add -> add ask to the same project */}
    </>
  );
}

export default App;

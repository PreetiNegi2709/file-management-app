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

  // new state
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handledeleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleStartProjectName = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
    console.log("btn clicked");
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancleAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (proj) => proj.id !== prevState.selectedProjectId
        ),
      };
    });
  };
  // why not using prevstate?
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <Project
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handledeleteTask}
      tasks={projectsState.tasks}
      selectedProject={selectedProject}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProjectForm
        onAdd={handleAddProject}
        onCancle={handleCancleAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectPg onStartAddProject={handleStartProjectName} />;
  }

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };
  //new code ended

  const handleCancelProject = () => {
    setNewProjectStatus(false);
    // to avoid open previous project when cancled
    setProjectOpened();
  };

  return (
    <>
      <main className="flex h-screen my-8 gap-8">
        <SideBar
          handleNewProject={handleNewProject}
          projectData={projectData}
          projectOpened={projectOpened}
          setProjectOpened={setProjectOpened}
          setNewProjectStatus={setNewProjectStatus}
          //new props
          onStartAddProject={handleStartProjectName}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectsState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;

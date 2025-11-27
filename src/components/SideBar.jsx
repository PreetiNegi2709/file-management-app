import Button from "../ui/ux/Button.jsx";

const SideBar = ({
  handleNewProject,
  projectData,
  projectOpened,
  setProjectOpened,
  setNewProjectStatus,
  // new props
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  const handleProject = (projIndex) => {
    setProjectOpened(projIndex);
    setNewProjectStatus(false);
  };
  return (
    <aside className="w-1/3 bg-stone-900 py-16 px-8 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200 tracking-wider">
        YOUR PROJECTS
      </h1>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ";
          if (project.id === selectedProjectId) {
            cssClasses += "text-stone-200 bg-stone-800";
          } else {
            cssClasses += "text-stone-400 ";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;

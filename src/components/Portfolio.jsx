import { useState, useEffect } from "react";
import Project from "./Project";
import AddProject from "./AddProject";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  function handleAddProject(project) {
    setProjects([...projects, project]);
  }

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "https://portfolio-backend-seven-henna.vercel.app/api/projects"
        );
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Erreur fetch:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h3>Portfolio</h3>
      {projects.map((project, index) => (
        <Project key={project.title} project={project} index={index} />
      ))}

      <AddProject handleAddProject={handleAddProject} />
    </section>
  );
}

export default Portfolio;

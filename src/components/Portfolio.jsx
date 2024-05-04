import { useState, useEffect } from "react";
import Project from "./Project";
import AddProject from "./AddProject";
import FormToken from "./FormToken";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [token,setToken] = useState(sessionStorage.getItem("Superbe Token"));

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
      {token &&  <AddProject handleAddProject={handleAddProject} setToken={setToken} token={token}/>}
      {!token && <FormToken setToken ={setToken} token={token} />}
     
    </section>
  );
}

export default Portfolio;

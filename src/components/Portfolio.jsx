import { useState, useEffect } from "react";
import Project from "./Project";
import AddProject from "./AddProject";
import FormToken from "./FormToken";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem("Superbe Token"));

  function handleAddProject(project) {
    setProjects([...projects, project]);
  }

  function handleDeleteProject(id) {
    // Vérifier si l'ID du projet est fourni
    if (id) {
      // Créer une copie des projets
      const updatedProjects = [...projects];

      // Trouver l'index grace à l'ID

      const index = updatedProjects.findIndex((key) => key._id === id); // Recherche l'objet ayant l'ID 2

      //Retirer le projet
      updatedProjects.splice(index, 1);

      //Modifier l'état de projects
      setProjects(updatedProjects);
      alert(
        "Tu viens de supprimer un projet ..pratiquement.. comme je le fais ! Félicitations 🎊🥳🎉!"
      );
    } else {
      alert("L'ID du projet à supprimer n'a pas été fourni.");
    }
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

  if (projects.length === 0) {
    return (
      <section className="portfolio" id="portfolio">
        <p>Va bosser...</p>
      </section>
    );
  }

  return (
    <section className="portfolio" id="portfolio">
      <h3>Portfolio</h3>
      {projects.map((project, index) => (
        <Project
          key={project._id}
          project={project}
          index={index}
          token={token}
          handleDeleteProject={handleDeleteProject}
        />
      ))}
      {token && (
        <AddProject
          handleAddProject={handleAddProject}
          setToken={setToken}
          token={token}
        />
      )}
      {!token && <FormToken setToken={setToken} />}
    </section>
  );
}

export default Portfolio;

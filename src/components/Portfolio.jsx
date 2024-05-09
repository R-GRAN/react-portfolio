import { useState, useEffect } from "react";
import Project from "./Project";
import AddProject from "./AddProject";
import FormToken from "./FormToken";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem("Superbe Token"));
  const [privateToken, setPrivateToken] = useState(
    sessionStorage.getItem("token")
  );

  function handleAddProject(project) {
    setProjects([...projects, project]);
  }

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

  useEffect(() => {
    fetchProjects();
  }, []);

  async function handleDeleteProject(id) {
    // Vérifier si l'ID du projet est fourni
    if (id) {
      // Créer une copie des projets
      const updatedProjects = [...projects];

      // Trouver l'index grace à l'ID

      const index = updatedProjects.findIndex((key) => key._id === id); // Recherche l'objet ayant l'ID
      const projectTitle = updatedProjects[index].title;
      const check = prompt(
        `Tu es sur le point de supprimer le projet "${projectTitle}". Pour continuer, tape : Delete .`
      );

      if (check === "Delete") {
        if (token) {
          //Retirer le projet
          updatedProjects.splice(index, 1);

          //Modifier l'état de projects
          setProjects(updatedProjects);
          alert(
            `Félicitations 🎊🥳🎉 ! Tu viens de supprimer le projet "${projectTitle}"..pratiquement.. comme je le fais ! ( sauf que moi c'est pour de bon 😉 )`
          );
        } else if (privateToken) {
          const ParsedToken = JSON.parse(privateToken);

          try {
            fetch(
              `https://portfolio-backend-seven-henna.vercel.app/api/projects/${id}`,
              {
                method: "DELETE",
                headers: {
                  Authorization: `Bearer ${ParsedToken.token}`,
                },
              }
            ).then((res) => {
              if (!res.ok) {
                (error) => console.log("error", error);
              } else {
                fetchProjects();
                alert(`Projet "${projectTitle}" supprimé`);
              }
            });
          } catch (error) {
            console.log("error", error);
          }
        }
      } else if (check !== "Delete") {
        alert(
          `Tu sembles hésiter.. ou tu as raté quelque chose.. Essaie de nouveau, si tu veux vraiment supprimer ce projet.`
        );
        return;
      }
    }
  }

  return (
    <section className="portfolio" id="portfolio">
      <h3>Portfolio</h3>
      {projects.length === 0 && privateToken && <p>Va bosser mon grand !</p>}
      {projects.length === 0 && (
        <p>Il faudrait penser à alimenter ce portfolio !</p>
      )}
      {projects.map((project, index) => (
        <Project
          key={project._id}
          project={project}
          index={index}
          token={token}
          privateToken={privateToken}
          handleDeleteProject={handleDeleteProject}
        />
      ))}
      {(token || privateToken) && (
        <AddProject
          handleAddProject={handleAddProject}
          setToken={setToken}
          token={token}
          privateToken={privateToken}
        />
      )}

      {!token && !privateToken && <FormToken setToken={setToken} />}
    </section>
  );
}

export default Portfolio;

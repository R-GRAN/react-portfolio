import { useState, useEffect } from "react";
import Project from "./Project";

/* import booki from "@/assets/images/booki.webp";
import kasa from "@/assets/images/kasa.webp";
import grimoire from "@/assets/images/mon-vieux-grimoire.webp";
import portfolio from "@/assets/images/mon-vieux-grimoire.webp"; */

function Portfolio() {
  const [projects, setProjects] = useState([]);

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
    </section>
  );
  /*   return (
    <section className="portfolio" id="portfolio">
      <h3>Portfolio</h3>
      <article className="project">
        <div className="project-img-container">
          <img
            className="project-img"
            src={booki}
            alt="projet du projet Booki"
          />
        </div>

        <div className="project-block">
          <h4>Booki</h4>
          <p>Front-end</p>

          <p>
            Développement et intégration de l'interface front-end d'un site de
            location d’hébergements. Réalisé à partir d'une maquette Figma.
            Application entièrement responsive.
          </p>
          <a
            href="http://github.com/R-GRAN/OpenClassrooms_projet_2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulter le code
          </a>
        </div>
      </article>
      <article className="project light-reverse">
        <div className="project-img-container">
          <img className="project-img" src={kasa} alt="visuel du projet kasa" />
        </div>

        <div className="project-block">
          <h4>Kasa</h4>
          <p>Front-end</p>

          <p>
            Développement front-end d'un site de location d’hébergement en
            technologie React. Création des composants, des routes, étude et
            découpage des maquettes Figma. Application entièrement responsive.
          </p>
          <a
            href="http://github.com/R-GRAN/OpenClassrooms_projet_6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulter le code
          </a>
        </div>
      </article>
      <article className="project">
        <div className="project-img-container">
          <img className="project-img" src={grimoire} alt="visuel du projet" />
        </div>

        <div className="project-block">
          <h4>Mon vieux grimoire</h4>
          <p>Back-end</p>

          <p>
            Développement back-end d'un site de notation de livres en
            technologie Express JS et MongoDB. Développement d'une API et
            connexion à MongoDB, création d'un système d'authentification
            sécurisé avec des mots de passe hashés et des jetons.
          </p>
          <a
            href="http://github.com/R-GRAN/OpenClassrooms_projet_7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulter le code
          </a>
        </div>
      </article>
      <article className="project">
        <div className="project-img-container">
          <img className="project-img" src={portfolio} alt="visuel du projet" />
        </div>

        <div className="project-block">
          <h4>Mon vieux grimoire</h4>
          <p>Back-end</p>

          <p>
            Développement back-end d'un site de notation de livres en
            technologie Express JS et MongoDB. Développement d'une API et
            connexion à MongoDB, création d'un système d'authentification
            sécurisé avec des mots de passe hashés et des jetons.
          </p>
          <a
            href="http://github.com/R-GRAN/OpenClassrooms_projet_7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulter le code
          </a>
        </div>
      </article>
    </section>
  ); */
}

export default Portfolio;

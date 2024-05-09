import Collapse from "./Collapse";
import HandleProjectMenu from "./HandleProjectMenu";

function Project({ project, index, token, privateToken, handleDeleteProject }) {
  return (
    <article className={index % 2 === 0 ? "project" : "project light-reverse"}>
      <div className="project-img-container">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Consulter le code sur GitHub"
        >
          <img
            className="project-img"
            src={project.imageUrl}
            alt={`visuel du projet "${project.title}"`}
          />
          <div className="project-title">
            <span>Consulter le code sur GitHub</span>
          </div>
        </a>
      </div>
      <div className="project-block">
        <h4>{project.title}</h4>
        <h5>{project.category}</h5>

        <p>{project.description}</p>
        <div>
          <Collapse
            techniques={project.techniques}
            technos={project.technos}
            index={index}
          />
        </div>
        {(token || privateToken) && (
          <HandleProjectMenu
            _id={project._id}
            privateToken={privateToken}
            handleDeleteProject={handleDeleteProject}
            token={token}
          />
        )}
      </div>
    </article>
  );
}

export default Project;

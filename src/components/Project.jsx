import Scroller from "./Scroller";

function Project({ project, index }) {
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
            alt={"visuel du projet " + project.title}
          />
          <div className="project-title">
            <span>Consulter le code sur GitHub</span>
          </div>
      </a>
        </div>
      <div className="project-block">
        <h4>{project.title}</h4>
        <p>{project.category}</p>

        <p>{project.description}</p>
<div>

<Scroller props={project.techniques} index={index}/>
<Scroller props={project.technos} index={index}/>
</div>

      </div>
    </article>
  );
}

export default Project;

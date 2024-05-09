import { useState, useRef } from "react";

function AddProject(props) {
  const { handleAddProject, setToken, token, privateToken } = props;
  const formRef = useRef(null);
  const [file, setFile] = useState(null);

  function getUserId() {
    if (privateToken != null) {
      const parsedPrivateToken = JSON.parse(privateToken);
      return parsedPrivateToken.userId;
    } else if (token != null) {
      return token;
    }
  }
  const [project, setProject] = useState({
    userId: getUserId(),
    _id: Date.now(),
    title: "Un tout nouveau projet",
    category: "Front end",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellat unde doloribus placeat maxime debitis doloremque repudiandae veritatis ratione blanditiis porro enim voluptates commodi explicabo pariatur, dolorum vitae, laborum eveniet?",
    imageUrl: "",
    githubUrl: "https://github.com/R-GRAN/",
    techniques: [
      "Réaliser le découpage sur une maquette figma",
      "Déployer un site web",
      "Utiliser les design Pattern",
    ],
    technos: ["React", "MongoDB", "Sass", "HTML", "CSS", "Figma"],
  });

  async function addproject() {
    const parsedToken = JSON.parse(sessionStorage.getItem("token"));

    const bodyFormData = new FormData();
    bodyFormData.append("project", JSON.stringify(project));
    bodyFormData.append("image", file);

    try {
      const response = await fetch(
        `${"https://portfolio-backend-seven-henna.vercel.app/api/projects"}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${parsedToken.token}`,
          },
          body: bodyFormData,
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        alert(`Projet "${project.title}" créé !`);
        setProject({
          userId: getUserId(),
          _id: Date.now(),
          title: "",
          category: "",
          description: "",
          imageUrl: "",
          githubUrl: "https://github.com/R-GRAN/",
          techniques: [],
          technos: [],
        });

        return await response.json();
      }
    } catch (err) {
      console.error(err);
      return { error: true, message: err.message };
    }
  }

  function handleClick() {
    if (token) {
      sessionStorage.removeItem("Superbe Token");
      setToken(null);
      alert(
        "Tu as supprimé le Superbe Token 🪙, mais tu en as besoin pour gérer les projets ! Tu dois t'identifier à nouveau pour en récuperer un autre ! J'aurais peut être du te prévenir avant que tu ne l'effaces.. désolé 😇 "
      );
    } else {
      alert(
        "On ne peut supprimer l'insupprimable.. ou un truc du genre ! Bref, il semblerait qu'il n'y ait pas de Superbe Token par ici 🔍 !"
      );
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setProject({ ...project, [name]: value });
  }
  function handleChangeImg(evt) {
    const { name, files } = evt.target;
    setFile(evt.target.files[0]);
    if (token) {
      const imageUrl = URL.createObjectURL(files[0]);
      setProject({ ...project, [name]: imageUrl });
    }
  }
  function handleChangeIntoArray(evt) {
    const { name, value } = evt.target;
    const array = value.split("-");
    setProject({ ...project, [name]: array });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    formRef.current.reset();

    if (token) {
      handleAddProject(project);
      setProject({
        userId: getUserId(),
        _id: Date.now(),
        title: "",
        category: "",
        description: "",
        imageUrl: "",
        githubUrl: "https://github.com/R-GRAN/",
        techniques: [],
        technos: [],
      });
      alert(
        "Félicitations 🎊🥳🎉 ! Tu viens de poster un projet ..pratiquement.. comme je le fais ! ( sauf que moi c'est pour de bon 😉 )"
      );
    } else if (privateToken) {
      //handleAddProject(project);
      addproject();
    }
  }

  return (
    <div className="addProject">
      <h4>Remplir le formulaire </h4>
      <form
        ref={formRef}
        className="addProject-project-form"
        action=""
        method="get"
        onSubmit={(evt) => {
          handleSubmit(evt);
        }}
      >
        <div className="addProject-project-form-block">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            id="title"
            value={project.title}
            placeholder="Ex : Un nouveau projet"
            required
            onChange={(evt) => handleChange(evt)}
          />

          <label htmlFor="category">Categories : </label>
          <select
            name="category"
            id="category"
            value={project.category}
            required
            onChange={(evt) => handleChange(evt)}
          >
            <option value=""></option>
            <option value="Front end">Front end</option>
            <option value="Back end">Back end</option>
            <option value="Fullstack">Fullstack</option>
          </select>

          <label htmlFor="description">Description : </label>
          <textarea
            name="description"
            id="description"
            value={project.description}
            cols="30"
            rows="10"
            placeholder="Description du projet"
            required
            onChange={(evt) => handleChange(evt)}
          ></textarea>
        </div>
        <div className="addProject-project-form-image">
          <label htmlFor="imageUrl">ImageUrl : </label>
          <input
            className="inputFiles"
            type="file"
            name="imageUrl"
            id="imageUrl"
            accept="image/*"
            required
            onChange={(evt) => handleChangeImg(evt)}
          />

          <label htmlFor="githubUrl">GithubUrl : </label>
          <input
            type="text"
            name="githubUrl"
            id="githubUrl"
            value={project.githubUrl}
            placeholder="https://github.com/R-GRAN/"
            required
            onChange={(evt) => handleChange(evt)}
          />
          <label htmlFor="techniques">Techniques : </label>
          <input
            type="text"
            name="techniques"
            id="techniques"
            value={project.techniques.join("-")}
            placeholder="Format : Réaliser le découpage d'une maquette - Intégrer une librairie externe - Mettre en œuvre des opérations CRUD"
            onChange={(evt) => handleChangeIntoArray(evt)}
          />
          <label htmlFor="technos">Technos : </label>
          <input
            type="text"
            name="technos"
            id="technos"
            value={project.technos.join("-")}
            placeholder="Format : React - Yarn - MongoDB"
            onChange={(evt) => handleChangeIntoArray(evt)}
          />
          <input
            type="submit"
            value="Ajouter un projet"
            className="btn-class green"
          />
        </div>
      </form>
      {token && (
        <input
          type="button"
          className="btn-class orange rebond"
          value="Supprimer le Superbe Token 🪙"
          onClick={handleClick}
        />
      )}
    </div>
  );
}
export default AddProject;

import { useState, useRef } from "react";

function AddProject(props) {
  const { handleAddProject } = props;
  const formRef = useRef(null);

  const [identifiant, setIdentifiant] = useState("azerty");
  const [password, setPassword] = useState("password1234");
  const [project, setProject] = useState({
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
    technos: ["React", "MongoDB","Sass","HTML","CSS","Figma"],
  });

  function handleClick() {
    let token = sessionStorage.getItem("Superbe Token");
    if (token ?? false) {
      sessionStorage.removeItem("Superbe Token");
      alert(
        "Tu as supprimé le Superbe Token 🪙, essaie d'ajouter un projet sans.. essaie.."
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
    const imageUrl = URL.createObjectURL(files[0]);
    setProject({ ...project, [name]: imageUrl });
  }
  function handleChangeIntoArray(evt) {
    const { name, value } = evt.target;
    const array = value.split("-");
    setProject({ ...project, [name]: array });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    let token = sessionStorage.getItem("Superbe Token");
    if (identifiant === "azerty" && password === "password1234") {
      if (!token) {
        alert(
          "Tu viens d'être gratifié d'un Superbe Token 🪙 dans ton session storage ! Si si, va vérifier 😉"
        );
      } else {
        alert("Ne sois pas gourmand, un Superbe Token 🪙 à la fois ");
      }

      sessionStorage.setItem("Superbe Token", "🪙");
    } else {
      alert("Tout est déjà rempli, il faut juste t'identifier ! 💻");
      setIdentifiant("azerty");
      setPassword("password1234");
    }
  }

  return (
    <>
      <h3>Ajouter un projet</h3>
      <form
        action=""
        method="get"
        className="addProject-login-form"
        onSubmit={(evt) => handleSubmit(evt)}
      >
        <label htmlFor="identifiant">Identifiant : </label>
        <input
          type="text"
          name="identifiant"
          id="identifiant"
          placeholder="azerty"
          value={identifiant}
          onChange={(evt) => setIdentifiant(evt.target.value)}
        />
        <label htmlFor="password">Mot de passe : </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password1234"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <input type="submit" value="S'identifier" className="btn-class green" />
      </form>

      <form
        ref={formRef}
        className="addProject-project-form"
        action=""
        method="get"
        onSubmit={(evt) => {
          evt.preventDefault();
          let token = sessionStorage.getItem("Superbe Token");

          if (token === undefined || token === null) {
            alert(
              "Tu n'as plus le Superbe Token 🪙, tu dois t'identifier à nouveau pour en récuperer un autre ! J'aurais peut être du te prévenir avant que tu ne l'effaces.. désolé 😇"
            );
            return;
          } else {
            formRef.current.reset();
            handleAddProject(project);
            setProject({
              title: "",
              category: "",
              description: "",
              imageUrl: "",
              githubUrl: "https://github.com/R-GRAN/",
              techniques: [],
              technos: [],
            });
            alert(
              "Tu viens de poster un projet ..pratiquement.. comme je le fais ! Félicitations 🎊🥳🎉!"
            );
          }
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

          <input
            type="button"
            className="btn-class orange rebond"
            value="Supprimer le Superbe Token 🪙"
            onClick={handleClick}
          />
        </div>
      </form>
    </>
  );
}
export default AddProject;

import { useState, useRef } from "react";

function FormToken({ setToken, token }) {
  const [identifiant, setIdentifiant] = useState("azerty");
  const [password, setPassword] = useState("password1234");
  const formRef = useRef(null);
  const btnRef = useRef(null);

  function popUp() {
    const form = formRef.current;
    const btn = btnRef.current;

    btn.classList.add("display-none");
    form.classList.add("display-block");
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    if (identifiant === "azerty" && password === "password1234") {
      if (!token) {
        alert(
          "Tu viens d'être gratifié d'un Superbe Token 🪙 dans ton session storage ! Si si, va vérifier 😉"
        );
        sessionStorage.setItem("Superbe Token", "🪙");
        setToken(true);
      } else {
        alert("Ne sois pas gourmand, un Superbe Token 🪙 à la fois ");
      }
    } else {
      alert("Tout est déjà rempli, il faut juste t'identifier ! 💻");
      setIdentifiant("azerty");
      setPassword("password1234");
    }
  }

  return (
    <div className="formToken">
      <input
        type="button"
        value="Gerer les projets !"
        className="btn-class green"
        onClick={popUp}
        ref={btnRef}
      />

      <form
        ref={formRef}
        action=""
        method="get"
        className="addProject-login-form"
        onSubmit={(evt) => handleSubmit(evt)}
      >
        <h3>Gerer les projets</h3>
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
    </div>
  );
}

export default FormToken;

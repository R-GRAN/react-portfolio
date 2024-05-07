import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function FormAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //recupere les valeurs des champs email et mot de passe du formulaire
  const authentifiant = {
    email: email,
    password: password,
  };
  //formate les valeurs
  const chargeUtile = JSON.stringify(authentifiant);

  function fetchAuth(evt) {
    evt.preventDefault();

    try {
      fetch("https://portfolio-backend-seven-henna.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile,
      }).then((res) => {
        if (!res.ok) {
          console.log("mot de passe et/ou mail incorrects");
        } else {
          // recupere la réponse et la formate
          res
            .json()
            //enregistre le token dans le sessionStorage
            .then((data) => {
              sessionStorage.setItem(
                "token",
                JSON.stringify(data)
              )(
                alert("Authentification réussie, bienvenue !")(
                  //redirige la page vers index.html
                  navigate("/")
                )
              );
            });
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <form
        className="formAuth"
        action=""
        method="post"
        onSubmit={(evt) => {
          fetchAuth(evt);
        }}
      >
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
            console.log(email);
          }}
        />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <input type="submit" value="connexion" />
        <Link to={"/"}>Retourner à la page d'accueil</Link>
      </form>
    </>
  );
}

export default FormAuth;

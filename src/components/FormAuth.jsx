import { useState } from "react";

function FormAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <form className="formAuth"
      action=""
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
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
    </form>
  );
}

export default FormAuth;

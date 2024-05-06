function HandleProjectMenu({ token, handleDeleteProject, _id }) {
  function handleDelete() {
    // Vérifier si le token est présent
    if (!token) {
      alert(
        "Vous n'avez pas le Superbe Token, veuillez vous identifier à nouveau"
      );
    } else {
      handleDeleteProject(_id);
    }
  }

  return (
    <div className="HandleProjectMenu">
      <input
        type="button"
        value="Supprimer le projet"
        onClick={handleDelete}
        className="btn-class red"
      />
    </div>
  );
}

export default HandleProjectMenu;

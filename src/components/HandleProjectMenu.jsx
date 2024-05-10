function HandleProjectMenu({ token, handleDeleteProject, privateToken, _id }) {
  function handleDelete() {
    // Vérifier qu'aucuns tokens ne soit présents
    if (!token && !privateToken) {
      alert(
        "Vous n'avez pas le Superbe Token, veuillez vous identifier à nouveau"
      );
      return;
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

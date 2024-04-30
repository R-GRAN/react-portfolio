import { useState } from "react";
import Scroller from "./Scroller";

function Collapse( {techniques, technos ,index}) {
    const [visible, setVisible] = useState(false);


  /* fonction gerant le changement d'état de visible lors du clic */
  function handleCollapse() {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <div className="collapse">
      <div className="title_collapse">
        <h3>Taches & technos</h3>
        <button
          className={visible ? "button rotate" : "button "}
          onClick={handleCollapse}
          aria-label="Bouton de bascule du contenu"
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      {/* Condition : s'affiche uniquement si l'état de visible est true */}
      {visible && <Scroller props={techniques} index={index}/>}
      {visible && <Scroller props={technos} index={index}/>}
    </div>
  );
}

export default Collapse;

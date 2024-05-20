import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { TextContext } from "../context/Context";
import "../styles/TextCard.css";

function TextCard() {
  const { handleForm } = useContext(TextContext);

  return (
    <div className="card-text">
      <div className="champs-msg">
        <textarea
          placeholder="Votre message (200 caractères maximum) "
          id="message-card"
          name="text"
          rows="15"
          cols="50"
          maxLength="200"
          onChange={handleForm}
        ></textarea>
      </div>
      <div className="champs-text">
        <input
          className="input-text"
          name="identity"
          placeholder="Destinataire"
          maxLength="25"
          onChange={handleForm}
        />
        <input
          className="input-text"
          name="address"
          placeholder="Adresse"
          maxLength="70"
          onChange={handleForm}
        />
        <input
          className="input-text"
          name="dest"
          placeholder="Expéditeur"
          maxLength="25"
          onChange={handleForm}
        />
        <NavLink to="/visualisation">
          <button className="button"> Visualiser </button>
        </NavLink>
      </div>
    </div>
  );
}

export default TextCard;

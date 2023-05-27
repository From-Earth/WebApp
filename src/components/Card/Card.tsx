import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { getDocumento } from "../../services/Documentos";
import spinner from "../../assets/images/spinner.gif";
import { useUserStore } from "../../services/UserStore";
import { Button } from "../Styled/Buttons";
import { useNavigate } from "react-router-dom";

export default function Card({
  id,
  name,
  progress,
  author,
  description,
  image,
  idUsuario,
}: CardProps) {
  const [load, setLoad] = useState(false);
  const user = useUserStore((state) => state);
  const navigate = useNavigate();
  function downloadDoc() {
    setLoad(true);
    getDocumento(id, name).finally(() => setLoad(false));
  }
  return (
    <div className="c-card">
      <img src={image} className="c-card__image" onClick={downloadDoc} />
      <div>
        <p className="c-card__text">
          {description
            ? description
            : "Lorem ipsum dolor sit amet pariatur dolores facilis culpa modi minus"}
          <br />
          {name}
          <br /> <span className="c-card__author">{author}</span>
        </p>
        <div className="c-card__row">
          <div className="c-card__progress">{progress}%</div>
          {idUsuario == user.id && (          
              <div onClick={() =>navigate(`/painel/livro/edit/${id}`)}>edit</div>            
          )}
        </div>
      </div>
      {load && (
        <div className="c-card_load">
          <img src={spinner} width="35px" />
        </div>
      )}
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
};

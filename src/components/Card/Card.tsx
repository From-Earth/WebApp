import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { getDocumento } from "../../services/Documentos";
import spinner from "../../assets/images/spinner.gif";
import { useUserStore } from "../../services/UserStore";
import { Button, ButtonClean } from "../Styled/Buttons";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../assets/icons/edit-square.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";

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
    <div className="c-card" key={id}>
      <img src={image} className="c-card__image" onClick={downloadDoc} />
      <div>
        <p className="c-card__text">
          <span>
            <b>{name.split(".", 1)}</b>
          </span>
          <br />
          {description
            ? description
            : "Lorem ipsum dolor sit amet pariatur dolores facilis culpa modi minus"}
        </p>

        <p className="c-card__author">
          Enviado por: <b>{author.split(" ", 1)}</b>
        </p>
        <div className="c-card__row">
          {idUsuario == user.id && (
            <div className="c-card__progress">{progress}%</div>
          )}

          <ButtonClean onClick={downloadDoc}>
            <DownloadIcon />
          </ButtonClean>
          {idUsuario == user.id && (
            <ButtonClean onClick={() => navigate(`/painel/livro/edit/${id}`)}>
              <EditIcon />
            </ButtonClean>
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

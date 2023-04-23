import React from "react";
import PropTypes from 'prop-types';
import "./Card.css"
import { getDocumento } from "../../services/Documentos";

export default function Card({id,name, progress, author}: CardProps) {
    function downloadDoc(){
        getDocumento(id, name);
    }
  return (
    <div className="c-card">
      <img src="https://picsum.photos/245/600"  className="c-card__image" onClick={downloadDoc}/>
      <div>
        <p className="c-card__text">
            Lorem ipsum dolor sit amet pariatur dolores facilis culpa modi minus 
            <br/>
          {name}<br/> {author}
        </p>

        <div className="c-card__progress">{progress}%</div>
      </div>
    </div>
  );
}
Card.propTypes = {
    name: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
  };
 
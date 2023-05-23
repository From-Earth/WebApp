import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Card.css"
import { getDocumento } from "../../services/Documentos";
import spinner from "../../assets/images/spinner.gif"

export default function Card({id,name, progress, author, description}: CardProps) {
  const [load,setLoad] = useState(false);
    function downloadDoc(){
        setLoad(true);
        getDocumento(id, name).finally(() => setLoad(false));
    }
  return (
    <div className="c-card">
      <img src="https://picsum.photos/245/600"  className="c-card__image" onClick={downloadDoc}/>
      <div>
        <p className="c-card__text">
            {description ? description : "Lorem ipsum dolor sit amet pariatur dolores facilis culpa modi minus"} 
            <br/>
          {name}<br/> <span className="c-card__author">{author}</span>
        </p>
        <div className="c-card__progress">{progress}%</div>
      </div>
      {load &&(

<div className="c-card_load">
  <img src={spinner} width="35px"/> 

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
 
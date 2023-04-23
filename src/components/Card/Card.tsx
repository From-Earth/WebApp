import React from "react";
import "./Card.css"
export default function Card({name, progress, author}) {
  return (
    <div className="c-card">
      <img src="https://picsum.photos/245/600"  className="c-card__image"/>
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

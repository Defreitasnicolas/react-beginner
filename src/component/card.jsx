import React from "react";
import "./card.css";

const Card = ({ destination, picture, index, setIndex }) => {
  return (
    <>
      <div className="card">
        <img src={picture} alt="photo de destination" />
        <p>{destination}</p>
        <div className="button">
          <button onClick={() => setIndex(index - 1)}>precedent</button>
          <button onClick={() => setIndex(index + 1)}>suivant</button>
        </div>
      </div>
    </>
  );
};

export default Card;

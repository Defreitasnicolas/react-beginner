import React from "react";
import "./card.css";


const Card = ({ destination, picture, index, setIndex, arrayTravel2 }) => {
  
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={picture} alt="photo de destination" />
        </div>
        <p>{destination}</p>
        <div className="button">
          {(index > 0) ? (<button onClick={() => setIndex(index - 1)}>precedent</button>):("")}
          {(index < arrayTravel2.length - 1) ? (<button onClick={() => setIndex(index + 1)}>suivant</button>):("")}
        </div>
      </div>
    </>
  );
};

export default Card;

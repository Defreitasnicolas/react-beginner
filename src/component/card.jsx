import React from "react";
import "./card.css";
import { useState } from "react";

const Card = ({ destination, picture, index, setIndex, arrayTravel }) => {
  const [filteredData, setFilteredData] = useState(arrayTravel);
  console.log(index);
  const handleClick = (style) => {
    setFilteredData(arrayTravel.filter((element) => element.style === style));
  };
  
  return (
    <>
      <div className="filter">
        <button type="button" onClick={() => handleClick("Soleil")}>
          Soleil
        </button>
        <button type="button" onClick={() => handleClick("Montagne")}>
          Montagne
        </button>
        <button type="button" onClick={() => handleClick("Villes")}>
          Villes
        </button>
        <button type="button" onClick={() => (setFilteredData(arrayTravel) , setIndex(0))}>Reset</button>
      </div>
      <h2>Envie de voyager?</h2>
      <div className="card">
        <div className="img">
          <img src={filteredData[index].img} alt="photo de destination" />
        </div>
        <p>{filteredData[index].destination}</p>
        <div className="button">
          {index > 0 ? (
            <button onClick={() => setIndex(index - 1)}>Précédent</button>
          ) : (
            ""
          )}
          {index < filteredData.length - 1 ? (
            <button onClick={() => setIndex(index + 1)}>Suivant</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Card;

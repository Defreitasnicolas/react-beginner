import "./App.css";
import Card from "./component/card";
import { useState } from "react";

const arrayTravel = [
  { destination: "Maldives", img: "src/assets/maldives.jpg" },
  { destination: "Cap Vert", img: "src/assets/cap-vert.jpg" },
  { destination: "Brugge", img: "src/assets/brugge.jpg" },
  { destination: "Guadeloupe", img: "src/assets/guadeloupe.jpg" },
];




function App() {
  const [index, setIndex] = useState(0);
  
  return (
    <>
      <div>
        <Card
          picture={arrayTravel[index].img}
          destination={arrayTravel[index].destination}
          index={index}
          setIndex={setIndex}
          arrayTravel2={arrayTravel}
        />
      </div>
    </>
  );
}

export default App;

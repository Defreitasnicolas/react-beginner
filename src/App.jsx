import "./App.css";
import Card from "./component/card";
import { useState } from "react";

const arrayTravel = [
  { destination: "maldives", img: "src/assets/maldives.jpg" },
  { destination: "cap vert", img: "src/assets/cap-vert.jpg" },
  { destination: "brugge", img: "src/assets/brugge.jpg" },
  { destination: "guadeloupe", img: "src/assets/guadeloupe.jpg" },
];

function App() {
  const [index, setIndex] = useState(0);
  console.log(arrayTravel[index]);
  return (
    <>
      <div>
        <Card
          picture={arrayTravel[index].img}
          destination={arrayTravel[index].destination}
          index={index}
          setIndex={setIndex}
        />
      </div>
    </>
  );
}

export default App;

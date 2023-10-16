import "./App.css";
import Card from "./component/card";
import { useState } from "react";

const arrayTravel = [
  { destination: "Maldives", img: "src/assets/maldives.jpg", style: "Soleil" },
  { destination: "Cap Vert", img: "src/assets/cap-vert.jpg", style: "Soleil" },
  { destination: "Brugge", img: "src/assets/brugge.jpg", style: "Villes" },
  {
    destination: "Guadeloupe",
    img: "src/assets/guadeloupe.jpg",
    style: "Soleil",
  },
  { destination: "Annecy", img: "src/assets/annecy.jpg", style: "Montagne" },
  {
    destination: "Groenland",
    img: "src/assets/groenland.jpg",
    style: "Montagne",
  },
  { destination: "NewYork", img: "src/assets/newyork.jpg", style: "Villes" },
  {
    destination: "Polynesie",
    img: "src/assets/polynesie.jpg",
    style: "Soleil",
  },
  { destination: "Rio", img: "src/assets/rio.jpg", style: "Soleil" },
  {
    destination: "St-Petersburg",
    img: "src/assets/st-petersburg.jpg",
    style: "Villes",
  },
  { destination: "Zanzibar", img: "src/assets/zanzibar.jpg", style: "Soleil" },
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
          arrayTravel={arrayTravel}
        />
      </div>
    </>
  );
}

export default App;

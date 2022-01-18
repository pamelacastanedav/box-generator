import "./App.css";
import StyledBox from "./components/StyledBox";

import { useState } from "react";
import ColorForm from "./components/ColorForm";

function App() {
  //state var
  //create var create boxes
  const [box, setBox] = useState(["red", "blue", "purple"]);

  //copy in order to add to the state
  //spread so it gets new values
  const addBoxes = (newBackgroundBox) => {
    const updatedBoxes = [...box, newBackgroundBox];
    setBox(updatedBoxes);
  };

  return (
    <div className="App">
      <ColorForm addBoxes={addBoxes} />
      <StyledBox box={box} />
    </div>
  );
}

export default App;

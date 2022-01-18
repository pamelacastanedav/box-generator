import React, { useState } from "react";

const ColorForm = (props) => {
  const [color, setColor] = useState("");

  const createBox = (e) => {
    e.preventDefault();
    props.addBoxes(color);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={createBox}>
        <div>
          <label>Color: </label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            // this will feed line 6
          />
        </div>
        <input type="submit" value="CreateBox" />
      </form>
    </div>
  );
};

export default ColorForm;

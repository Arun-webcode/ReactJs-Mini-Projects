import React from "react";
import { useState } from "react";

const Btns = ({ bgOnclick, mainText }) => {
  const [color, setColor] = useState("olive");
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
      onClick={() => setColor({ bgOnclick })}
    >
      {mainText}
    </button>
  );
};

export default Btns;

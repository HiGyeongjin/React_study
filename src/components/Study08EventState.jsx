import React, { useState } from "react";

function Study08EventState() {
  const [inputValue, setinputValue] = useState("");

  const handleChange = (event) => {
    setinputValue(event.target.value);
  };

  return (
    <div className="App">
      <input onChange={handleChange} />
      <span>{inputValue}</span>
    </div>
  );
}

export default Study08EventState;

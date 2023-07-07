import React, { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    name: "김민수",
    school: "엘리스대학교",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson((current) => {
      const newPerson = { ...current };
      newPerson[name] = value;
      return newPerson;
    });
  };

  return (
    <div className="App">
      <input name="name" value={person.name} onChange={handleChange} />
      <input name="school" value={person.school} onChange={handleChange} />
      <button
        onClick={() => {
          alert(`${person.name}님은 ${person.school}에 재학중입니다.`);
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;

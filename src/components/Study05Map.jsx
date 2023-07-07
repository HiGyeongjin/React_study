// 메뉴판을 출력하는 Menu 컴포넌트를 만드세요.
import React from "react";

function Menu() {
  return (
    <div>
      <h3>엘리스 식당 메뉴판</h3>
      <ul>
        <li>짜장면</li>
        <li>짬뽕</li>
        <li>볶음밥</li>
      </ul>
    </div>
  );
}

export default Menu;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   let [todo, setTodo] = useState([
//     "꾸준히 운동하기",
//     "영어 공부하기",
//     "미니 프로젝트 진행하기",
//   ]);

//   //todoList를 정의합니다.
//   const todoList = todo.map((item)=> <li key={item.id}>{item}</li>);

//   return (
//     <div>
//       <h2>신년 목표</h2>
//       <ul>{todoList}</ul>
//     </div>
//   );
// }

// export default App;

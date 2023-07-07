import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 기존의 컴포넌트
// import App from "./App";

//스터디 내용
// import Study01 from "./components/Study01";
// import Study02 from "./components/Study02";
// import Study03SetInterval from "./components/Study03SetInterval";
import Study06State from "./components/Study06State";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Study06State />
  </React.StrictMode>
);

//Study03_SetInterval 내용
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Study03SetInterval />
//     </React.StrictMode>
//   );
// }, 100);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

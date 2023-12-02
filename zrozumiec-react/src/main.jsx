import React from "react";
import ReactDOM from "react-dom/client";

const stringContent = "Test 1!";
const numberContent = 13;
const calcContent = 10 + 5;
function getRandomNumber() {
  // return Math.round(Math.random() * 100);
  console.log(Math.round(Math.random() * 100));
}
const element = <div>{getRandomNumber()}</div>;

ReactDOM.createRoot(document.getElementById("root")).render(element);

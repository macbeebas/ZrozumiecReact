import React from "react";
import ReactDOM from "react-dom/client";

const stringContent = "Test 1!";
const numberContent = 13;
const calcContent = 10 + 5;
function getRandomNumber() {
  // return Math.round(Math.random() * 100);
  console.log(Math.round(Math.random() * 100));
}
const person = {
  name: "Filip",
  age: 29,
};
const paragraphElement = (
  <>
    <h2>Heading</h2>
    <a href="http://zrozumiecreact.pl" className="link" for="">
      Strona kursu
    </a>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
      aspernatur cupiditate nulla. Dolorem assumenda, quidem sint ipsum labore
      id numquam odio, tempora autem provident suscipit ipsam ea sequi illum
      sapiente.
    </p>
  </>
);
const element = (
  <div>
    {paragraphElement}
    {paragraphElement}
    {paragraphElement}
    {paragraphElement}
    {paragraphElement}
    {paragraphElement}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);

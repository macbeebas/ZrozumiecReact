import React from "react";
import ReactDOM from "react-dom/client";

const stringContent = "Test 1!";
const numberContent = 13;
const calcContent = 10 + 5;
const element = (
  <div>
    {stringContent}, {numberContent}, {calcContent}, {20 - 5 - 3},{" "}
    {"Test string"}, {`Number: ${numberContent}`}
  </div>
);
const address = "https://zrozumiecreact.pl";
const linkElement = <a href={address}>{address}</a>;

ReactDOM.createRoot(document.getElementById("root")).render(linkElement);

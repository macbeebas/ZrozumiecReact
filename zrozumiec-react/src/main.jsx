import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
  "a",
  { href: "https://zrozumiecreact.pl" },
  "Test"
);

const elementInJSX = <a href="https://zrozumiecreact.pl">Test 3</a>;

console.log(<h1>Test 2</h1>); // -> React.createElement('h1', {}, 'Test 2')
console.log(element);

ReactDOM.createRoot(document.getElementById("root")).render(element);

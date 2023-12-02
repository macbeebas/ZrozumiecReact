import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
  "a",
  { href: "https://zrozumiecreact.pl" },
  "Test"
);

ReactDOM.createRoot(document.getElementById("root")).render(element);

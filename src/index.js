import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement("div", {
  a: 1,
  b: 2,
  children: "hello world",
});

console.log(element);

ReactDOM.render(element, document.querySelector("#root"));

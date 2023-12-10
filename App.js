import React from "react";
import ReactDOM  from "react-dom/client";

const he=React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child"}, 
[React.createElement("h1", {}, "Namaste React"),
React.createElement("h2", {}, "I'm a h2 tag")]),
React.createElement("div", {id: "child2"}, 
[React.createElement("h1", {}, "I'm a h1 tag"),
React.createElement("h2", {}, "I'm a h2 tag")])]);
const re=ReactDOM.createRoot(document.getElementById("root"));
re.render(he);
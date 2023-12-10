import React from "react";
import ReactDOM from "react-dom/client";
// JSX Functional Component
const JsxHeading = () => (
  <h1 className="head" tabIndex={5}>
    Namaste Javascript using JSX
  </h1>
);
// JSX element
const jsxHeading = (
  <h1 className="head" tabIndex={5}>
    Namaste Javascript using JSX
  </h1>
);
// Component Composition -  Component inside a component
//JSX element inside a component
// {anything inside this in javascript inside JSX}
const Heading = () => (
  <div id="container">
    {jsxHeading}
    {JsxHeading()}
    <JsxHeading />
    <h1>Namaste Javascript using Functional Component</h1>
  </div>
);

//console.log(jsxheading);
const re = ReactDOM.createRoot(document.getElementById("root"));
re.render(<Heading />);

import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return <h2>First component</h2>;
};

const App = ReactDOM.createRoot(document.getElementById("root"));
App.render(<Greeting></Greeting>);

import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
const Index = () => {
  return <App />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/style.scss";
import "bootstrap/scss/bootstrap.scss"
import { App } from "./components/App";

const ROOT = document.querySelector(".container");

ReactDOM.render(<App name="Jamala" />, ROOT);


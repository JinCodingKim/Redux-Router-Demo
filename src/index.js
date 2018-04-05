import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Need to bring in some type of router from react-router-dom

// Need to bring in Provider from react-redux
// Provider serves one purpose: to provide the store to its child components!

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

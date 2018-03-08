import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.hydrate(
    <App initialData={window.initialData} />,
    document.getElementById("root")
);
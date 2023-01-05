import React from "react";
import  ReactDOM  from "react-dom/client";


const h2 = React.createElement("h2",{id:"demo"},"Hello React");

const h1 = React.createElement("h1", { id: "key" }, "Heading 1");

const container = React.createElement("div", { id: "container" }, [h2,h1]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);



import React from "react";
import  ReactDOM  from "react-dom/client";


//const h1 = React.createElement("h1", { id: "key" }, "Heading 1");

let Title = (
    <h2 id="aks">Hello Aakash</h2>
);

let Title2 = () => {
    return <h3>Hello Folks</h3>
}

const Heading2 = () => {
    return(
        <div className="demo"> 
            <h2>Hello My name is Akshay.</h2>
            {Title2()} 
            {Title}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading2 />);



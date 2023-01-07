import React from "react";
import  ReactDOM  from "react-dom/client";


//const h1 = React.createElement("h1", { id: "key" }, "Heading 1");

let Title = (
    <h2 id="aks">Hello Aakash</h2>
);

let Title2 = () => {
    return <h3>Hello Folks</h3>
}

let Title3 = function() {
    return(
        <h4>This is a function</h4>
    )
};

const Heading2 = () => {
    return(
        <div className="demo"> 
            {<Header />}
            <h2>Hello My name is Akshay.</h2>
            {Title2()} 
            {Title}
            {Title3()}
        </div>
    )
}

// Assignment Code 

let Header = function() {
    return(
        <div className="header">
            <img src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"></img>
            <input type="text" placeholder="Search.." />
            <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading2 />);
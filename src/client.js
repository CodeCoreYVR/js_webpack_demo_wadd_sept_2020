import React from 'react';
import ReactDOM from 'react-dom';
import "./a";
import myImage from "./images/Webpack.png";
// Make sure to add image directory inside src directory with an image to load it
import "./styles/main.css";

console.log(myImage);

const App =()=> {
    return(
        <main>
            <h1 style={{color: 'darkblue'}}>Welcome to Webpack!</h1>
            <img
            src={myImage}
            alt="Webpack logo"
            />
        </main>
    );
};

document.addEventListener("DOMContentLoaded", () => {
    const root = document.createElement("div");
    document.body.append(root);

    ReactDOM.render(<App />, root);
});




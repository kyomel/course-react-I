// 1) Import the react and reactDOM libraries
// 2) Get a reference to the div with ID root
// 3) Tell react to take control of that element
// 4) Create a component
// 5) Show the component on the screen

import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    return <h1>{new Date().toLocaleTimeString()}</h1>;
}

root.render(<App />)
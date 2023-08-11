import React from "react";
import {BrowserRouter} from "react-router-dom";

import Routes from "./Routes";
import Nav from "./Nav";
import './App.css';

import whiskey from "./dog1.jpg";
import duke from "./dog2.jpg";
import perry from "./dog3.jpg";
import tubby from "./dog4.jpg";


function App() {

    // Create array of the dog names
    const names = App.defaultProps.dogs.map(dog => dog.name);

    return (
        <div className="App">
            <BrowserRouter>
                <Nav names={names} />
                <Routes />
            </BrowserRouter>
        </div>
    );
}


App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }


export default App;

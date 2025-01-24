
import { useState } from "react";
import "./Flashcard.css"

let front = ["Why do you capitalize function names in React?",
    "What is JSX in React?","What is the difference between a class component and a functional component?",
     "What is a React hook?", "What is state in React?", "What is a prop in React?"];
let back = ["In React, function names are capitalized because React uses the capitalization to distinguish between regular HTML elements (e.g., <div>, <p>) and React components. React components must start with a capital letter so that JSX can correctly interpret them as user-defined components, rather than native HTML tags.",
    "AJSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. React components are written in JSX, which is then transpiled into regular JavaScript by tools like Babel.",
    "A class component is a JavaScript class that extends React.Component and has lifecycle methods, while a functional component is a simpler form of a React component defined as a function. With React hooks, functional components can now have state and side effects, which were previously only available in class components.",
     "A React hook is a special function that allows you to use React features like state, context, and lifecycle methods in functional components. Examples of hooks include useState, useEffect, and useContext.",
      "State is a JavaScript object that holds data or information about the component's condition. React components can have their own state, which can be updated to trigger a re-render of the component when it changes.",
       "Props (short for properties) are inputs to a React component. They allow data to be passed from a parent component to a child component. Props are read-only and cannot be modified by the child component."];

export default function Flashcard({value}) {

const [cardFace, setCardFace]= useState(front[value-1]);

function handleClick() {
    if (cardFace === front[value-1]) {
        setCardFace(back[value-1])
        console.log(`back ${value} ${back[value-1]}`)
    }
    else {
        setCardFace(front[value-1])
        console.log(`front ${value} ${front[value-1]}`)
    }

}

    return (
        <button className = "flashcard" onClick = {handleClick} style= {{ border: "2px solid black", padding: "10px", margin: "10px"}} >
        {cardFace}
     </button>
    )
    
}
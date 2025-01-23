
import { useState } from "react";

let front = ["Q1","Q2","Q3", "Q4", "Q5", "Q6"];
let back = ["A1","A2","A3", "A4", "A5", "A6"];

export default function Flashcard({value}) {

const [cardFace, setCardFace]= useState("front");

function handleClick() {
// console.log("Click")
    if (cardFace === "front") {
        setCardFace("back")
        console.log(`back ${value} ${back[value-1]}`)
    }
    else {
        setCardFace("front")
        console.log(`front ${value} ${front[value-1]}`)
    }

}

    return (
        <button onClick = {handleClick} style= {{ border: "2px solid black", padding: "10px", margin: "10px" }} >
        {cardFace}
        {front[value-1]}
     </button>
    )
    
}
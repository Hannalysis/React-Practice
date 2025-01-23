
import { useState } from "react";
import "./Flashcard.css"

let front = ["A woman in Muncie, Indiana was hospitalized after trying to remove a callus on her foot with a _____.","Q2","Q3", "Q4", "Q5", "Q6"];
let back = ["Shotgun","A2","A3", "A4", "A5", "A6"];

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
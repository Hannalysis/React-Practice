import Flashcard from "../Flashcard/Flashcard"
import { useState } from "react";



export default function FlashcardsContainer() {

const [cardFace, setCardFace]= useState("front");

function handleClick() {
    console.log("Click")
    setCardFace(cardFace === "front" ? "back" : "front");
        if (cardFace === "back") {
            return( 
            console.log("Back"))
        }
        console.log("Front")
}

    return (
        <div className="FlashcardsContainer" style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <div>
                <Flashcard value = "Q1" cardface = {cardFace} handleClick = {handleClick}/>
                <Flashcard value = "Q2" cardface = {cardFace} handleClick = {handleClick}/>
                <Flashcard value = "Q3" cardface = {cardFace} handleClick = {handleClick}/>
            </div>
            <div>
                <Flashcard value = "Q4" cardface = {cardFace} handleClick = {handleClick}/>
                <Flashcard value = "Q5" cardface = {cardFace} handleClick = {handleClick}/>
                <Flashcard value = "Q6" cardface = {cardFace} handleClick = {handleClick}/>
            </div>
        </ div>
    )
}

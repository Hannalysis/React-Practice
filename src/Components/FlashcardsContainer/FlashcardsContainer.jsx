import Flashcard from "../Flashcard/Flashcard"
import "./FlashcardsContainer.css"
import { useState } from "react";



export default function FlashcardsContainer() {
    const flashCards = [{card1: {front: "front2", back: "back2"}}]

    flashCards.map((flashcard, index) => {
        return (
            <Flashcard card={flashcard}/>
        )
    })

    // return (
    //     <div className="flashcardsContainer" style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
    //         <div className = "row">
    //             <Flashcard value = {1}/>
    //             <Flashcard value = {2}/>
    //             <Flashcard value = {3}/>
    //         </div>
    //         <div className = "row">
    //             <Flashcard value = {4}/>
    //             <Flashcard value = {5}/>
    //             <Flashcard value = {6}/>
    //         </div>
    //     </ div>
    // )
}

import Flashcard from "../Flashcard/Flashcard"
import { useState } from "react";



export default function FlashcardsContainer() {


    return (
        <div className="FlashcardsContainer" style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <div>
                <Flashcard value = {1}/>
                <Flashcard value = {2}/>
                <Flashcard value = {3}/>
            </div>
            <div>
                <Flashcard value = {4}/>
                <Flashcard value = {5}/>
                <Flashcard value = {6}/>
            </div>
        </ div>
    )
}

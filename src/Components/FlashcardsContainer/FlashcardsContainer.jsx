import Flashcard from "../Flashcard/Flashcard"
import "./FlashcardsContainer.css"
import { useState } from "react";



export default function FlashcardsContainer() {


    return (
        <div className="flashcardsContainer" style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <div className = "row">
                <Flashcard value = {1}/>
                <Flashcard value = {2}/>
                <Flashcard value = {3}/>
            </div>
            <div className = "row">
                <Flashcard value = {4}/>
                <Flashcard value = {5}/>
                <Flashcard value = {6}/>
            </div>
        </ div>
    )
}

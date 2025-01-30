import Flashcard from "../Flashcard/Flashcard"
import "./FlashcardsContainer.css"



export default function FlashcardsContainer() {
    // this is the array that stores the flashcard info.
    // you can add as many objects to this array (in the correct format) and they will all be rendered on the page
    // might also be nice to store these in a different file and import them - keeps it nice and clean :)
    const flashCards = [
        {card: 
            {front: "This is the front of card1", 
            back: "This is the back of card1"}
        }, 
        {card: 
            {front: "This is the front of card2", 
            back: "This is the back of card2"}
        },
        {card: 
            {front: "This is the front of card3", 
            back: "This is the back of card3"}
        }
    ]

    // this is the return statement for the function "FlashcardsContainer"
    return(
        // here we map or "iterate" through the array above
        // for each iteration or entry/flashcard in the array, we return the <Flashcard /> component with that iterations data
        flashCards.map((flashcard, index) => {
            return (
                // dont worry about the key prop, i added it to get rid of the red error line
                // the 'flashcard' prop is the current iterations data
                <Flashcard key={index} card={flashcard}/>
            )
        })
    )





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

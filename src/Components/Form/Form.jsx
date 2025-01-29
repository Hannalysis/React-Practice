import React, { useState } from "react";

export default function Form() {

const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (!question || !answer) {
    alert("Both question and answer are required!");
    return;
  }
  console.log({ question, answer });
  // Clear the inputs
  setQuestion("");
  setAnswer("");
};

  return (
    <form 
        onSubmit={handleSubmit}
          style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
          <div className = "question">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            value = {question}
            onChange={(e) => setQuestion(e.target.value)} // Update the state when the value changes
            placeholder="Enter your question"
            required></textarea>
            </div>
            <div className = "answer">
          <label htmlFor="answer">Answer:</label>
          <textarea
            id="answer"
            value = {answer}
            onChange={(e) => setAnswer(e.target.value)} // Update the state when the value changes
            required
            placeholder="Enter your answer"
            ></textarea>
            </div>
        <button
          type="submit"
          style={{backgroundColor:"#2B504B", boxShadow: "3px 5px 5px rgba(0,0,0,0.1)"}}
        >
          Add
        </button>
      </form>
  );
}

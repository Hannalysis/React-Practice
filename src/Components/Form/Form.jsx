export default function Form() {
  return (
<form style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
          <div className = "question">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            placeholder="Enter your question"
            required></textarea>
            </div>
            <div className = "answer">
          <label htmlFor="answer">Answer:</label>
          <textarea
            id="answer"
            required
            placeholder="Enter your answer"
            ></textarea>
            </div>
        <button
          type="button"
          style={{backgroundColor:"#2B504B", boxShadow: "3px 5px 5px rgba(0,0,0,0.1)"}}
        >
          Add
        </button>
        </form>
  );
}

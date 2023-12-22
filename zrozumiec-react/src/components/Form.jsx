import { useState } from "react";

const initialReviews = [
  { author: "Brian", text: "Najlepszy film ever!", id: 1 },
  { author: "Jessica", text: "Nie podobał mi się", id: 2 },
];

export function Form() {
  const [reviews, setReviews] = useState(initialReviews);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const reviewsElement = reviews.map((r) => (
    // const reviewsElement = reviews.map((r, index) => ( // 1
    // const reviewsElement = reviews.map((r) => ( // 2
    <article key={r.id}>
      {/* <article key={index}> */}
      {/* <article> */}
      <strong>{r.author}</strong>
      <p>{r.text}</p>
      {/* <input type="text" /> */}
    </article>
  ));

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    setReviews((prevReviews) => {
      return [{ author, text, id: prevReviews.length + 1 }, ...prevReviews];
    });
    setInputValue("");
    setTextareaValue("");
  }

  return (
    <>
      <hr />
      <ul>{reviewsElement}</ul>
      <h2>Dodaj recenzję</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Autor</label>
          </div>
          <input
            type="text"
            name="author"
            id="author"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            name="text"
            id="text"
            value={textareaValue}
            onChange={(event) => {
              setTextareaValue(event.target.value);
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={inputValue === "" || textareaValue === ""}
        >
          Dodaj
        </button>
      </form>
    </>
  );
}

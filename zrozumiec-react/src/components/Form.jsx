import { useState } from "react";

export function Form() {
  const [review, setReview] = useState(null);

  console.log(review);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const author = event.target[0].value;
    const text = event.target[1].value;

    setReview({ author, text });
  }

  return (
    <>
      {review && (
        <article>
          <strong>{review.author}</strong>
          <p>{review.text}</p>
        </article>
      )}
      <h2>Dodaj recenzję</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Autor</label>
          </div>
          <input type="text" name="author" id="author" />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea name="text" id="text"></textarea>
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
}

import { useState } from "react";
import { Form } from "./components/Form";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Reviews } from "./components/Reviews";

const initialReviews = [
  { author: "Brian", text: "Najlepszy film ever!", id: 1 },
  { author: "Jessica", text: "Nie podobał mi się", id: 2 },
];

function App() {
  console.log("<App> - render");
  const [reviews, setReviews] = useState(initialReviews);
  const [counterShown, setCounterShown] = useState(true);

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <button
        onClick={() => {
          setCounterShown((prevCounterShown) => !prevCounterShown);
        }}
      >
        {counterShown ? "Schowaj counter" : "Pokaż counter"}
      </button>
      {counterShown && <LikesCounter />}
      <Plot />
      <Reviews reviews={reviews} />
      <Form
        onReviewSubmit={(author, text) => {
          setReviews((prevReviews) => {
            return [
              { author, text, id: prevReviews.length + 1 },
              ...prevReviews,
            ];
          });
        }}
      />
    </>
  );
}

export default App;

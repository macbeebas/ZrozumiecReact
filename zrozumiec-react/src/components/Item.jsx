import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="item">
      <span className={`emoji ${zoomed ? "zoomed" : ""}`}>{emoji}</span>
      <button
        style={{
          background: "blue",
          border: "5px solid yellow",
          "border-radius": "10px",
          //   bo "border-radius" nie jest jednym słowem dlatego trzeba ująć w cudzysłów
          borderRadius: "10px",
          // albo można zapisać camelCase'm - nie może być "-" w nazwie bo React nie załapie
          // Jednak takie stylowanie przydaje się wyłącznie do szybkiego debugowania - nie robi się tak w praktyce
        }}
        className="btn"
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}

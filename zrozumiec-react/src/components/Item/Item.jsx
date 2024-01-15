import { useState } from "react";
import styled from "styled-components";

const StyledEmoji = styled.span`
  display: block;
  margin-bottom: 42px;
  font-size: 32px;
  transition: transform 0.3s;
  overflow: hidden;

  /* transform: ${({ $zoomed }) => ($zoomed ? "scale(2)" : "scale(1)")}; */
  /* or */
  ${({ $zoomed }) => $zoomed && "transform: scale(2)"}
`;

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="bg-salmon py-8 px-12 rounded-3xl text-center overflow-hidden">
      <span
        className={`block mb-10 text-3xl transition-transform ${
          zoomed ? "scale-[2]" : ""
        }`}
      >
        {emoji}
      </span>
      <button
        className={`bg-transparent border border-solid border-current p-3 rounded-[5px] cursor-pointer w-[120px] text-white transition-colors hover:text-salmon hover:bg-white`}
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}

import { useState } from "react";
import styles from "./Item.module.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border: solid 1px;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  color: white;
  transition: background 0.3s, color 0.3s;

  &:hover {
    color: salmon;
    background: white;
  }
`;

const StyledItem = styled.li`
  background: salmon;
  padding: 30px 50px;
  border-radius: 20px;
  text-align: center;
`;

const StyledEmoji = styled.span`
  display: block;
  margin-bottom: 42px;
  font-size: 32px;
  transition: transform 0.3s;
  overflow: hidden;
`;

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <StyledItem>
      <StyledEmoji>{emoji}</StyledEmoji>
      <StyledButton
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </StyledButton>
    </StyledItem>
  );
}

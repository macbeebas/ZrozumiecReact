import { Item } from "../Item/Item";
import styles from "./List.module.css";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledButton = styled.button``;

export function List() {
  return (
    <>
      <StyledButton>Test</StyledButton>
      <button
        className={styles.btn}
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji
      </button>
      <ul className={styles.list}>
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}

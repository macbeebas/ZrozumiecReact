import { Item } from "../Item/Item";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 30px;
  padding: 30px;
`;

const StyledListItem = styled(Item)`
  margin-bottom: 50px;
`;

export function List() {
  return (
    <>
      <StyledButton
        $primary
        $margin={30}
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji
      </StyledButton>
      <StyledList>
        {emojis.map((emoji) => (
          <StyledListItem key={emoji} emoji={emoji} />
        ))}
      </StyledList>
    </>
  );
}

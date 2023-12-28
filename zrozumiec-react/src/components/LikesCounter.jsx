// import { useState } from "react";

export function LikesCounter({
  numberOfLikes,
  onLikeButtonClick,
  onLoveButtonClick,
}) {
  // const [numberOfLikes, setNumberOfLikes] = useState(50);

  // function handleLikeButtonClick() {
  //   setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
  // }

  // function handleLoveButtonClick() {
  //   setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 3);
  // }
  return (
    <>
      <h2>Liczba polubień: {numberOfLikes}</h2>
      <button onClick={onLikeButtonClick}>Lubię to!</button>
      <button onClick={onLoveButtonClick}>Kocham to!</button>
    </>
  );
}

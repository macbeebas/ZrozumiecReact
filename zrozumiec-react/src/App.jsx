import { useState } from "react";

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);

  function handleClick() {
    setIsSpoilerShown(true);
    console.log("handleClick!");
  }

  console.log("<App> - render");

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Fabuła</h2>
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>

      {isSpoilerShown ? (
        <p>Vader okazuje się być ojcem Luka.</p>
      ) : (
        <button onClick={handleClick}>Pokaż spoiler</button>
      )}
    </>
  );
}

export default App;

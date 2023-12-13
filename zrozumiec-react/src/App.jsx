import { ButtonStrong } from "./components/ButtonStrong";

function App() {
  const buttonEl = (
    <button
      onClick={() => {
        alert("Klik!");
      }}
    >
      Pokaż spoiler
    </button>
  );

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Fabuła</h2>
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      {buttonEl}
      <ButtonStrong
        onClick={() => {
          alert("GRUBY Klik!");
        }}
      >
        Pokaż GRUBY spoiler
      </ButtonStrong>
      <ButtonStrong
        onClick={() => {
          alert("INNY GRUBY Klik!");
        }}
      >
        Pokaż INNY GRUBY spoiler
      </ButtonStrong>

      <p>Vader okazuje się być ojcem Luka.</p>
    </>
  );
}

export default App;
